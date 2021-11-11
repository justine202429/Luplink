import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoggerService } from '../../shared/logger/logger.service';
import { SaveLoadService } from '../../services/save-load.service';
import { HelperFunctions } from '../../shared/helper-functions';
import mockJSatOrbData from '../../shared/testing/mockJSatOrbData.json';
import { FormService } from '../../form/form.service';
import { ENVIRONMENT_TOKEN } from '../../shared/dependencies';

@Component({
  selector: 'lib-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  /**
   * Import Data from JSatOrb, select satellites and groundstations to study. Maybe also import from nanospace.
   */
  constructor(@Inject(ENVIRONMENT_TOKEN) public environment: any, private logger: LoggerService, private saveLoadService: SaveLoadService, private formService: FormService, private fb:FormBuilder) { }
  public selectedSatellite: any;
  public selectedStation: any;
  public jsoData: { title: string, satellites: any, groundStations: any } = { title: '', satellites: undefined, groundStations: undefined };
  debugMode = this.environment.debugMode;

  jsoForm = new FormGroup({
    satellite: new FormControl(),
    station: new FormControl(),
  });

  ngOnInit(): void {
    if (this.debugMode) {
      const testData = mockJSatOrbData;
      const title = testData.header?.mission;
      const satellites = this.saveLoadService.formatJSOData(testData.satellites);
      const { groundStations } = testData;
      this.jsoData = { title, satellites, groundStations };
      this.buildForm();
    }
  }

  importJSatOrbData(files: FileList | null) {
    const obs = this.saveLoadService.importJSatOrbConfigFile(files)
      .subscribe(
        (value:any) => {
          if (value) this.jsoData = value;
          console.log('import from jso');
          console.log(this.jsoData);
          this.buildForm();
          obs.unsubscribe();
        },
        (error:any) => {
          this.logger.error('Error', 'Could not open file provided');
          obs.unsubscribe();
        },
        // When complete
        () => { obs.unsubscribe(); },
      );
    // return;
  }

  buildForm(data: any = this.jsoData): FormGroup {
    /**
     * This builds the reactive part of the form from jsoData so that it can be displayed by template
     */
    this.jsoForm.patchValue({
      satellite: this.jsoData.satellites[0], // MIGHT CRASH IF EMPTY
      station: this.jsoData.groundStations[0],
    });
    return this.jsoForm;
  }
  useSelectedData() {
    this.logger.debug('jsoForm value:', this.jsoForm.value);
    this.selectedSatellite = this.jsoForm.controls.satellite.value;
    this.selectedStation = this.jsoForm.controls.station.value;
    if (!(this.selectedSatellite && this.selectedStation)) {
      this.logger.warn('Warning', 'Station or satellite not selected!');
      return;
    }
    this.saveLoadService.importJSOData(this.jsoData.title, this.selectedSatellite, this.selectedStation);
  }
}
