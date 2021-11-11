/* eslint-disable no-param-reassign */
import { Inject, Injectable } from '@angular/core';
// import packageInfo from 'package.json';
import { Observable } from 'rxjs';
import sanitize from 'sanitize-filename';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../form/form.service';
import { HelperFunctions } from '../shared/helper-functions';
import { LoggerService } from '../shared/logger/logger.service';
import { ENVIRONMENT_TOKEN } from '../shared/dependencies';

const readFile = (files: FileList | null): Observable<string> =>
  new Observable((obs) => {
    // This is a helper function that opens the provided file and passes its content to the provided callback function.
    if (!files || !files.item(0)) {
      // this.logger.warn('Error', 'Unexpected error, cannot open imported file');
      obs.error(new Error('cannot open imported file'));
      return;
    }

    const file: File = files.item(0)!;
    const fileReader = new FileReader();

    fileReader.onerror = (err) => obs.error(err);
    fileReader.onabort = (err) => obs.error(err);
    fileReader.onload = () => obs.next(<string>fileReader.result);
    fileReader.onloadend = () => obs.complete();

    fileReader.readAsText(file, 'utf8');
  });

@Injectable({
  providedIn: 'root',
})
export class SaveLoadService {
  /**
   * This service handles both saving and loading of configuration files, JSatOrb config files.
   * Note: Using promises here might not be the best choice considering we have used only observable so far. At least, it is independant from the rest so we don't mix both.
   */
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private environment: any,
    private logger: LoggerService,
    private formService: FormService,
    private fb: FormBuilder
  ) {}
  // Defining a callback function to which we will feed the provided file
  // Replace by Observables !!!
  parseJSOData = (results: any): { title: any; satellites: any; groundStations: any } | null => {
    // console.log(results);
    if (results && results !== {}) {
      const title = results.header?.mission;
      let { satellites } = results;
      const { groundStations } = results;
      satellites = this.formatJSOData(satellites);
      /**
       * 1. Display available options
       * 2. Create a scenario : choose satellite, choose groundstation.
       * 3. Convert that to a LB
       */

      // To move elsewhere !
      return { title, satellites, groundStations };
    }
    return null;
  };
  public importJSatOrbConfigFile(
    files: FileList | null
  ): Observable<{ title: string; satellites: any; groundStations: any } | null> {
    /*
     * This allows the user to import a JSatOrb Configuration file (.jso) into this app
     */
    return new Observable((obs) => {
      readFile(files).subscribe(
        (value: string) => {
          obs.next(this.parseJSOData(JSON.parse(value)));
          obs.complete();
        },
        (error) => {
          obs.error(error);
        }
      );
    });
    // We then pass this callback function to our function that imports the file
    // this.importFile(files)
    //   .pipe(
    //     mergeMap((result) => callbackFn(result)),
    //   )
    // return new Observable(
    //   (subscriber) => {
    //     this.importFile(files).subscribe((results) => {
    //       console.log(results);

    //     });
    // },
    // );
    // .then((results) => new Promise(() => callbackFn(results)));
    // return of({ title: '', satellites: [], groundStations: [] });
  }
  public formatJSOData(satellites: any) {
    /**
     * Takes the satellite list from a .jso file and converts all TLE-types satellites to Keplerian-type
     */
    if (!satellites) return {}; // input is undefined or null

    Object.entries(satellites).forEach(([key, satellite]: [string, any]) => {
      if (satellite.type === 'tle') {
        satellites[key] = { ...satellite, ...HelperFunctions.convertTLEtoKeplearian(satellite.line1, satellite.line2) }; // HelperFunctions.convertTLEtoKeplearian('', ''),
        // console.log(satellites)
        // console.log(HelperFunctions.convertTLEtoKeplearian(satellite.line1, satellite.line2));
      } else {
        Object.values(['sma', 'ecc', 'inc', 'pa', 'raan', 'meanAnomaly']).forEach((val) => {
          satellites[key][val] = parseFloat(satellite[val]);
        });
      }
      // results.satellite = satellites
    });
    return satellites;
  }
  public importJSOData(title: string, satellite: any, station: any) {
    /**
     * Given data extracted from JSatOrb, updates the current link budget
     */
    if (!this.formService.isCurrentFormSaved) {
      this.logger.warn('Warning', 'You have unsaved data');
      return;
    }
    this.formService.title = title;
    const { geometry } = this.formService.getFormData();

    // Here AMSAT uses mean altitude which is equivalent to SMA but we will be using maximum Altitude corresponding to worst case scenario
    geometry.altitude.value = (1 + satellite.ecc) * satellite.sma;
    geometry.elevation.value = station.elevation;

    // Updating slantRange also
    geometry.slantRange.value = HelperFunctions.slantRangeFromAltElev(satellite.sma, station.elevation);

    // this.formService.addArchive('geometry', this.fb.group(geometry));
    this.formService.globalForm.setControl('geometry', this.fb.group(geometry));

    console.log(this.formService.globalForm.value);
    this.logger.success('importing data');
  }
  public importConfigFile(files: FileList | null): void {
    /*
     * This allows importing a json config file containing a scenario using the save/load buttons
     */
    // #TODO: SOME FILE VERIFICATION
    // Defining a callback function to which we will feed the provided file
    const callbackFn = (results: any) => {
      if (results && results.metadata) {
        if (results.metadata.version !== this.environment.version) {
          this.logger.warn('Version Warning', 'The imported file has been generated with a different version');
        }
        const safeResults = results;
        // We want to make sure to import a file-safe name
        safeResults.metadata.title = sanitize(results.metadata.title);
        this.formService.importForm(safeResults);
        this.logger.success('Successfully loaded config file');
      } else {
        // If the file doesn't contain metadata or if its content is null or undefined, this probably hasn't been generated with Luplink
        this.logger.error("This file doesn't look like a Luplink configuration file", 'Missing content or metadata');
      }
    };
    // We then pass this callback function to our function that imports the file

    readFile(files).subscribe(
      (value: string) => {
        callbackFn(JSON.parse(value));
      },
      (error) => {
        this.logger.error('Error while importing file', error);
      }
    );
    // this.importFile(files);
    // .then(() => new Promise((results) => callbackFn(results)));
  }
  public generateConfig(data: any): { metadata: any; data: any } {
    const metadata = {
      title: this.formService.title,
      date: Date.now(),
      version: this.environment.version,
    };
    return { metadata, data };
  }
  public exportConfigFile(data: any) {
    // #TODO: This is working, now are we sure we can't inject javascript using this (XSS injection) ?
    // #TODO: Also, given a large enough JSON, this won't work, -> switch to blob
    // this.logger.debug('exporting config!');

    // FIXME: USING DATA URI IS PRETTY STRAIGHTFORWARD YET THE MAX SIZE DEPENDS ON THE BROWSER (2MB for Chrome, unlimited for Firefox), BETTER TO USE BLOB
    // See https://stackoverflow.com/questions/695151/data-protocol-url-size-limitations
    const configData = this.generateConfig(data);
    const configURL = `data:application/json;charset=UTF-8,${encodeURIComponent(
      JSON.stringify(configData, undefined, 2)
    )}`;
    // Create a placeholder element for this data
    const anchor = document.createElement('a');
    anchor.href = configURL;
    anchor.target = '_blank';
    anchor.download = `${configData.metadata.title}.json`;

    anchor.click();
    // Removing placeholder element
    anchor.remove();

    // Mark the current form as saved
    this.formService.isCurrentFormSaved = true;
  }
}
