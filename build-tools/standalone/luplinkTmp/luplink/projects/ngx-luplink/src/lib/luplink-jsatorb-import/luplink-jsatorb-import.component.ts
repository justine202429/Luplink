import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SaveLoadService } from '../services/save-load.service';
import { LoggerService } from '../shared/logger/logger.service';
import { JSatOrbLinkService } from './jsatorb-link.service';

@Component({
  selector: 'lib-luplink-jsatorb-import',
  templateUrl: './luplink-jsatorb-import.component.html',
  styleUrls: ['./luplink-jsatorb-import.component.scss'],
})
export class JSatOrbLinkComponent implements OnInit {
  constructor(
    public linkService: JSatOrbLinkService,
    private logger: LoggerService,
    private loadService: SaveLoadService
  ) {}
  public jsoData: any;
  public isEmpty: boolean = false;

  importForm = new FormGroup({
    satellite: new FormControl(),
    station: new FormControl(),
  });

  ngOnInit(): void {
    this.jsoData = this.loadService.parseJSOData(this.linkService.getJSOData());
    if (this.isJSOValid(this.jsoData)) {
      // Set the default values
      this.importForm.patchValue({
        satellite: this.jsoData?.satellites[0],
        station: this.jsoData?.groundStations[0],
      });
    } else {
      // Nothing interesting from getJSOData(), show warning
      this.isEmpty = true;
    }
    // Init the link service that will keep tracks of luplink data changes for persistance of data
    this.linkService.initService();
  }

  isJSOValid(jsoData: any): boolean {
    /**
     * This checks that the imported JSO data is valid: non empty or null and has existing satellites / GS.
     * In all other cases, the data is invalid
     *
     * @input jsoData: {title: string, satellites: Satellite[], groundStations: GroundStation[]}
     *
     * @output validity of the data
     */
    if (jsoData) {
      if (jsoData.groundStations && jsoData.satellites) {
        if (jsoData.groundStations.length > 0 && jsoData.satellites.length > 0) {
          return true;
        }
        this.logger.warn('Data from JSatOrb does either have no satellites or groundstations');
      } else {
        this.logger.warn('Data from JSatOrb does either have nosatellites or groundstations');
      }
    } else {
      this.logger.warn('Data from JSatOrb is either undefined or null');
    }
    return false;
  }
  importJSO() {
    this.loadService.importJSOData(
      this.jsoData.title,
      this.importForm.controls.satellite.value,
      this.importForm.controls.station.value
    );
  }
}
