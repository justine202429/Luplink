import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { jsoMockData } from '../shared/data.mock';
import { ENVIRONMENT_TOKEN } from '../shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "../form/form.service";
import * as i2 from "../shared/logger/logger.service";
import * as i3 from "../services/save-load.service";
export class JSatOrbLinkService {
    constructor(formService, logger, loadService, environment) {
        this.formService = formService;
        this.logger = logger;
        this.loadService = loadService;
        this.environment = environment;
        this.jsoData$ = new Subject();
        this.jsoMockData = jsoMockData;
        this.jsoData = this.environment.debugMode ? this.jsoMockData : {}; //= this.jsoMockData; //{};
        this.jsoData$.next(this.jsoData);
    }
    updateEndpoint(newEndpoint) {
        /**
         * Since the ENV token is passed by value between jso & luplink, we need a way to update the api endpoint
         * @input newEndpoint, e.g. 'http://localhost:8001' or '157.63.2.17:87'
         *
         */
        this.environment.luplinkEndpoint = newEndpoint;
    }
    updateJSOData(data) {
        /**
         * Allow JSO to send data that can then be used by luplink
         */
        this.jsoData = data;
        this.jsoData$.next(this.jsoData);
    }
    getJSOData() {
        /**
         * Returns the currently stored JSO data
         */
        return this.jsoData;
    }
    getJSOData$() {
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
JSatOrbLinkService.ɵfac = function JSatOrbLinkService_Factory(t) { return new (t || JSatOrbLinkService)(i0.ɵɵinject(i1.FormService), i0.ɵɵinject(i2.LoggerService), i0.ɵɵinject(i3.SaveLoadService), i0.ɵɵinject(ENVIRONMENT_TOKEN)); };
JSatOrbLinkService.ɵprov = i0.ɵɵdefineInjectable({ token: JSatOrbLinkService, factory: JSatOrbLinkService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JSatOrbLinkService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.FormService }, { type: i2.LoggerService }, { type: i3.SaveLoadService }, { type: undefined, decorators: [{
                type: Inject,
                args: [ENVIRONMENT_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNhdG9yYi1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2x1cGxpbmstanNhdG9yYi1pbXBvcnQvanNhdG9yYi1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBTTNELE1BQU0sT0FBTyxrQkFBa0I7SUFPN0IsWUFDVSxXQUF3QixFQUN4QixNQUFxQixFQUNyQixXQUE0QixFQUNELFdBQWdCO1FBSDNDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQ0QsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFSN0MsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzVDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBU2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQUM5RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELGNBQWMsQ0FBQyxXQUFtQjtRQUNoQzs7OztXQUlHO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO0lBQ2pELENBQUM7SUFDRCxhQUFhLENBQUMsSUFBUztRQUNyQjs7V0FFRztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVTtRQUNSOztXQUVHO1FBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1Q7O1dBRUc7UUFDSCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELFdBQVc7UUFDVDs7V0FFRztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsbUZBQW1GO1lBQ25GLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsY0FBYztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7b0ZBOURVLGtCQUFrQiwyR0FXbkIsaUJBQWlCOzBEQVhoQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNO3VGQUVQLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQVlJLE1BQU07dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL2Zvcm0vZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IFNhdmVMb2FkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NhdmUtbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IGpzb01vY2tEYXRhIH0gZnJvbSAnLi4vc2hhcmVkL2RhdGEubW9jayc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVF9UT0tFTiB9IGZyb20gJy4uL3NoYXJlZC9kZXBlbmRlbmNpZXMnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSlNhdE9yYkxpbmtTZXJ2aWNlIHtcbiAgLy8gcHJpdmF0ZSBqc29EYXRhJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGpzb0RhdGE6IGFueTtcbiAgcHJpdmF0ZSBqc29EYXRhJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGpzb01vY2tEYXRhID0ganNvTW9ja0RhdGE7XG4gIHByaXZhdGUgbHVwbGlua0Zvcm1TYXZlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkU2VydmljZTogU2F2ZUxvYWRTZXJ2aWNlLFxuICAgIEBJbmplY3QoRU5WSVJPTk1FTlRfVE9LRU4pIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICApIHtcbiAgICB0aGlzLmpzb0RhdGEgPSB0aGlzLmVudmlyb25tZW50LmRlYnVnTW9kZSA/IHRoaXMuanNvTW9ja0RhdGEgOiB7fTsgLy89IHRoaXMuanNvTW9ja0RhdGE7IC8ve307XG4gICAgdGhpcy5qc29EYXRhJC5uZXh0KHRoaXMuanNvRGF0YSk7XG4gIH1cbiAgdXBkYXRlRW5kcG9pbnQobmV3RW5kcG9pbnQ6IHN0cmluZykge1xuICAgIC8qKlxuICAgICAqIFNpbmNlIHRoZSBFTlYgdG9rZW4gaXMgcGFzc2VkIGJ5IHZhbHVlIGJldHdlZW4ganNvICYgbHVwbGluaywgd2UgbmVlZCBhIHdheSB0byB1cGRhdGUgdGhlIGFwaSBlbmRwb2ludFxuICAgICAqIEBpbnB1dCBuZXdFbmRwb2ludCwgZS5nLiAnaHR0cDovL2xvY2FsaG9zdDo4MDAxJyBvciAnMTU3LjYzLjIuMTc6ODcnXG4gICAgICpcbiAgICAgKi9cbiAgICB0aGlzLmVudmlyb25tZW50Lmx1cGxpbmtFbmRwb2ludCA9IG5ld0VuZHBvaW50O1xuICB9XG4gIHVwZGF0ZUpTT0RhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgLyoqXG4gICAgICogQWxsb3cgSlNPIHRvIHNlbmQgZGF0YSB0aGF0IGNhbiB0aGVuIGJlIHVzZWQgYnkgbHVwbGlua1xuICAgICAqL1xuICAgIHRoaXMuanNvRGF0YSA9IGRhdGE7XG4gICAgdGhpcy5qc29EYXRhJC5uZXh0KHRoaXMuanNvRGF0YSk7XG4gIH1cblxuICBnZXRKU09EYXRhKCk6IGFueSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IHN0b3JlZCBKU08gZGF0YVxuICAgICAqL1xuICAgIHJldHVybiB0aGlzLmpzb0RhdGE7XG4gIH1cblxuICBnZXRKU09EYXRhJCgpOiBhbnkge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byBjdXJyZW50bHkgc3RvcmVkIEpTTyBkYXRhXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMuanNvRGF0YSQ7XG4gIH1cbiAgaW5pdFNlcnZpY2UoKSB7XG4gICAgLyoqXG4gICAgICogU3RhcnRlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY3JlYXRlZC4gSGFuZGxlcyB0aGUgc2F2ZSBvZiBsdXBsaW5rIGRhdGEgd2hpbGUgbmF2aWdhdGluZyBiZXR3ZWVuIGx1cGxpbmsgJiBqc29cbiAgICAgKi9cbiAgICB0aGlzLmZvcm1TZXJ2aWNlLmdsb2JhbEZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtIGRhdGEgdXBkYXRlZCcpO1xuICAgICAgLy8gdGhpcy5sdXBsaW5rRm9ybVNhdmUgPSB7IGRhdGE6IHZhbHVlIH07IC8vSlNPTi5zdHJpbmdpZnkodmFsdWUpLCB1bmRlZmluZWQsIDIgfTtcbiAgICAgIHRoaXMubHVwbGlua0Zvcm1TYXZlID0gdGhpcy5sb2FkU2VydmljZS5nZW5lcmF0ZUNvbmZpZyh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgcmVmcmVzaEx1cGxpbmsoKSB7XG4gICAgY29uc29sZS5sb2coJ3JlZnJlc2hpbmcgbHVwbGluaycpO1xuICAgIGlmICh0aGlzLmx1cGxpbmtGb3JtU2F2ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3NhdmUgZXhpc3RzJyk7XG4gICAgICB0aGlzLmZvcm1TZXJ2aWNlLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5mb3JtU2VydmljZS5pbXBvcnRGb3JtKHRoaXMubHVwbGlua0Zvcm1TYXZlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==