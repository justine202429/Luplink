import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormService } from '../form/form.service';
import { SaveLoadService } from '../services/save-load.service';
import { jsoMockData } from '../shared/data.mock';
import { ENVIRONMENT_TOKEN } from '../shared/dependencies';
import { LoggerService } from '../shared/logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class JSatOrbLinkService {
  // private jsoData$: Subject<any> = new Subject<any>();
  private jsoData: any;
  private jsoData$: Subject<any> = new Subject<any>();
  private jsoMockData = jsoMockData;
  private luplinkFormSave: any;

  constructor(
    private formService: FormService,
    private logger: LoggerService,
    private loadService: SaveLoadService,
    @Inject(ENVIRONMENT_TOKEN) private environment: any
  ) {
    this.jsoData = this.environment.debugMode ? this.jsoMockData : {}; //= this.jsoMockData; //{};
    this.jsoData$.next(this.jsoData);
  }
  updateEndpoint(newEndpoint: string) {
    /**
     * Since the ENV token is passed by value between jso & luplink, we need a way to update the api endpoint
     * @input newEndpoint, e.g. 'http://localhost:8001' or '157.63.2.17:87'
     *
     */
    this.environment.luplinkEndpoint = newEndpoint;
  }
  updateJSOData(data: any): void {
    /**
     * Allow JSO to send data that can then be used by luplink
     */
    this.jsoData = data;
    this.jsoData$.next(this.jsoData);
  }

  getJSOData(): any {
    /**
     * Returns the currently stored JSO data
     */
    return this.jsoData;
  }

  getJSOData$(): any {
    /**
     * Returns an observable to currently stored JSO data
     */
    return this.jsoData$;
  }
  initService() {
    /**
     * Started when the component is created. Handles the save of luplink data while navigating between luplink & jso
     */
    this.formService.globalForm.valueChanges.subscribe((value) => {
      console.log('form data updated');
      // this.luplinkFormSave = { data: value }; //JSON.stringify(value), undefined, 2 };
      this.luplinkFormSave = this.loadService.generateConfig(value);
    });
  }
  refreshLuplink() {
    console.log('refreshing luplink');
    if (this.luplinkFormSave) {
      console.log('save exists');
      this.formService.isInitialized = true;
      this.formService.importForm(this.luplinkFormSave);
    }
  }
}
