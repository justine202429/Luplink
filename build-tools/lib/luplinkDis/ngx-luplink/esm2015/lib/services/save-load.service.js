/* eslint-disable no-param-reassign */
import { Inject, Injectable } from '@angular/core';
// import packageInfo from 'package.json';
import { Observable } from 'rxjs';
import sanitize from 'sanitize-filename';
import { HelperFunctions } from '../shared/helper-functions';
import { ENVIRONMENT_TOKEN } from '../shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "../shared/logger/logger.service";
import * as i2 from "../form/form.service";
import * as i3 from "@angular/forms";
const readFile = (files) => new Observable((obs) => {
    // This is a helper function that opens the provided file and passes its content to the provided callback function.
    if (!files || !files.item(0)) {
        // this.logger.warn('Error', 'Unexpected error, cannot open imported file');
        obs.error(new Error('cannot open imported file'));
        return;
    }
    const file = files.item(0);
    const fileReader = new FileReader();
    fileReader.onerror = (err) => obs.error(err);
    fileReader.onabort = (err) => obs.error(err);
    fileReader.onload = () => obs.next(fileReader.result);
    fileReader.onloadend = () => obs.complete();
    fileReader.readAsText(file, 'utf8');
});
export class SaveLoadService {
    /**
     * This service handles both saving and loading of configuration files, JSatOrb config files.
     * Note: Using promises here might not be the best choice considering we have used only observable so far. At least, it is independant from the rest so we don't mix both.
     */
    constructor(environment, logger, formService, fb) {
        this.environment = environment;
        this.logger = logger;
        this.formService = formService;
        this.fb = fb;
        // Defining a callback function to which we will feed the provided file
        // Replace by Observables !!!
        this.parseJSOData = (results) => {
            var _a;
            // console.log(results);
            if (results && results !== {}) {
                const title = (_a = results.header) === null || _a === void 0 ? void 0 : _a.mission;
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
    }
    importJSatOrbConfigFile(files) {
        /*
         * This allows the user to import a JSatOrb Configuration file (.jso) into this app
         */
        return new Observable((obs) => {
            readFile(files).subscribe((value) => {
                obs.next(this.parseJSOData(JSON.parse(value)));
                obs.complete();
            }, (error) => {
                obs.error(error);
            });
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
    formatJSOData(satellites) {
        /**
         * Takes the satellite list from a .jso file and converts all TLE-types satellites to Keplerian-type
         */
        if (!satellites)
            return {}; // input is undefined or null
        Object.entries(satellites).forEach(([key, satellite]) => {
            if (satellite.type === 'tle') {
                satellites[key] = Object.assign(Object.assign({}, satellite), HelperFunctions.convertTLEtoKeplearian(satellite.line1, satellite.line2)); // HelperFunctions.convertTLEtoKeplearian('', ''),
                // console.log(satellites)
                // console.log(HelperFunctions.convertTLEtoKeplearian(satellite.line1, satellite.line2));
            }
            else {
                Object.values(['sma', 'ecc', 'inc', 'pa', 'raan', 'meanAnomaly']).forEach((val) => {
                    satellites[key][val] = parseFloat(satellite[val]);
                });
            }
            // results.satellite = satellites
        });
        return satellites;
    }
    importJSOData(title, satellite, station) {
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
    importConfigFile(files) {
        /*
         * This allows importing a json config file containing a scenario using the save/load buttons
         */
        // #TODO: SOME FILE VERIFICATION
        // Defining a callback function to which we will feed the provided file
        const callbackFn = (results) => {
            if (results && results.metadata) {
                if (results.metadata.version !== this.environment.version) {
                    this.logger.warn('Version Warning', 'The imported file has been generated with a different version');
                }
                const safeResults = results;
                // We want to make sure to import a file-safe name
                safeResults.metadata.title = sanitize(results.metadata.title);
                this.formService.importForm(safeResults);
                this.logger.success('Successfully loaded config file');
            }
            else {
                // If the file doesn't contain metadata or if its content is null or undefined, this probably hasn't been generated with Luplink
                this.logger.error("This file doesn't look like a Luplink configuration file", 'Missing content or metadata');
            }
        };
        // We then pass this callback function to our function that imports the file
        readFile(files).subscribe((value) => {
            callbackFn(JSON.parse(value));
        }, (error) => {
            this.logger.error('Error while importing file', error);
        });
        // this.importFile(files);
        // .then(() => new Promise((results) => callbackFn(results)));
    }
    generateConfig(data) {
        const metadata = {
            title: this.formService.title,
            date: Date.now(),
            version: this.environment.version,
        };
        return { metadata, data };
    }
    exportConfigFile(data) {
        // #TODO: This is working, now are we sure we can't inject javascript using this (XSS injection) ?
        // #TODO: Also, given a large enough JSON, this won't work, -> switch to blob
        // this.logger.debug('exporting config!');
        // FIXME: USING DATA URI IS PRETTY STRAIGHTFORWARD YET THE MAX SIZE DEPENDS ON THE BROWSER (2MB for Chrome, unlimited for Firefox), BETTER TO USE BLOB
        // See https://stackoverflow.com/questions/695151/data-protocol-url-size-limitations
        const configData = this.generateConfig(data);
        const configURL = `data:application/json;charset=UTF-8,${encodeURIComponent(JSON.stringify(configData, undefined, 2))}`;
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
SaveLoadService.ɵfac = function SaveLoadService_Factory(t) { return new (t || SaveLoadService)(i0.ɵɵinject(ENVIRONMENT_TOKEN), i0.ɵɵinject(i1.LoggerService), i0.ɵɵinject(i2.FormService), i0.ɵɵinject(i3.FormBuilder)); };
SaveLoadService.ɵprov = i0.ɵɵdefineInjectable({ token: SaveLoadService, factory: SaveLoadService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SaveLoadService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ENVIRONMENT_TOKEN]
            }] }, { type: i1.LoggerService }, { type: i2.FormService }, { type: i3.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1sb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL3NlcnZpY2VzL3NhdmUtbG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCwwQ0FBMEM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRTNELE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBc0IsRUFBc0IsRUFBRSxDQUM5RCxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3JCLG1IQUFtSDtJQUNuSCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM1Qiw0RUFBNEU7UUFDNUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTztLQUNSO0lBRUQsTUFBTSxJQUFJLEdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBRXBDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMs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ekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxPQUFPLENBQUM7UUFFdEQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsK0JBQStCO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVoQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDN0MsQ0FBQzs7OEVBN0tVLGVBQWUsY0FNaEIsaUJBQWlCO3VEQU5oQixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO3VGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFPSSxNQUFNO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCBwYWNrYWdlSW5mbyBmcm9tICdwYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHNhbml0aXplIGZyb20gJ3Nhbml0aXplLWZpbGVuYW1lJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9mb3JtL2Zvcm0uc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJGdW5jdGlvbnMgfSBmcm9tICcuLi9zaGFyZWQvaGVscGVyLWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVF9UT0tFTiB9IGZyb20gJy4uL3NoYXJlZC9kZXBlbmRlbmNpZXMnO1xuXG5jb25zdCByZWFkRmlsZSA9IChmaWxlczogRmlsZUxpc3QgfCBudWxsKTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0+XG4gIG5ldyBPYnNlcnZhYmxlKChvYnMpID0+IHtcbiAgICAvLyBUaGlzIGlzIGEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgb3BlbnMgdGhlIHByb3ZpZGVkIGZpbGUgYW5kIHBhc3NlcyBpdHMgY29udGVudCB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgaWYgKCFmaWxlcyB8fCAhZmlsZXMuaXRlbSgwKSkge1xuICAgICAgLy8gdGhpcy5sb2dnZXIud2FybignRXJyb3InLCAnVW5leHBlY3RlZCBlcnJvciwgY2Fubm90IG9wZW4gaW1wb3J0ZWQgZmlsZScpO1xuICAgICAgb2JzLmVycm9yKG5ldyBFcnJvcignY2Fubm90IG9wZW4gaW1wb3J0ZWQgZmlsZScpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlOiBGaWxlID0gZmlsZXMuaXRlbSgwKSE7XG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICBmaWxlUmVhZGVyLm9uZXJyb3IgPSAoZXJyKSA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICBmaWxlUmVhZGVyLm9uYWJvcnQgPSAoZXJyKSA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IG9icy5uZXh0KDxzdHJpbmc+ZmlsZVJlYWRlci5yZXN1bHQpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkZW5kID0gKCkgPT4gb2JzLmNvbXBsZXRlKCk7XG5cbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZSwgJ3V0ZjgnKTtcbiAgfSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTYXZlTG9hZFNlcnZpY2Uge1xuICAvKipcbiAgICogVGhpcyBzZXJ2aWNlIGhhbmRsZXMgYm90aCBzYXZpbmcgYW5kIGxvYWRpbmcgb2YgY29uZmlndXJhdGlvbiBmaWxlcywgSlNhdE9yYiBjb25maWcgZmlsZXMuXG4gICAqIE5vdGU6IFVzaW5nIHByb21pc2VzIGhlcmUgbWlnaHQgbm90IGJlIHRoZSBiZXN0IGNob2ljZSBjb25zaWRlcmluZyB3ZSBoYXZlIHVzZWQgb25seSBvYnNlcnZhYmxlIHNvIGZhci4gQXQgbGVhc3QsIGl0IGlzIGluZGVwZW5kYW50IGZyb20gdGhlIHJlc3Qgc28gd2UgZG9uJ3QgbWl4IGJvdGguXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVOVklST05NRU5UX1RPS0VOKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnksXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuICAvLyBEZWZpbmluZyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHdoaWNoIHdlIHdpbGwgZmVlZCB0aGUgcHJvdmlkZWQgZmlsZVxuICAvLyBSZXBsYWNlIGJ5IE9ic2VydmFibGVzICEhIVxuICBwYXJzZUpTT0RhdGEgPSAocmVzdWx0czogYW55KTogeyB0aXRsZTogYW55OyBzYXRlbGxpdGVzOiBhbnk7IGdyb3VuZFN0YXRpb25zOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMgIT09IHt9KSB7XG4gICAgICBjb25zdCB0aXRsZSA9IHJlc3VsdHMuaGVhZGVyPy5taXNzaW9uO1xuICAgICAgbGV0IHsgc2F0ZWxsaXRlcyB9ID0gcmVzdWx0cztcbiAgICAgIGNvbnN0IHsgZ3JvdW5kU3RhdGlvbnMgfSA9IHJlc3VsdHM7XG4gICAgICBzYXRlbGxpdGVzID0gdGhpcy5mb3JtYXRKU09EYXRhKHNhdGVsbGl0ZXMpO1xuICAgICAgLyoqXG4gICAgICAgKiAxLiBEaXNwbGF5IGF2YWlsYWJsZSBvcHRpb25zXG4gICAgICAgKiAyLiBDcmVhdGUgYSBzY2VuYXJpbyA6IGNob29zZSBzYXRlbGxpdGUsIGNob29zZSBncm91bmRzdGF0aW9uLlxuICAgICAgICogMy4gQ29udmVydCB0aGF0IHRvIGEgTEJcbiAgICAgICAqL1xuXG4gICAgICAvLyBUbyBtb3ZlIGVsc2V3aGVyZSAhXG4gICAgICByZXR1cm4geyB0aXRsZSwgc2F0ZWxsaXRlcywgZ3JvdW5kU3RhdGlvbnMgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIHB1YmxpYyBpbXBvcnRKU2F0T3JiQ29uZmlnRmlsZShcbiAgICBmaWxlczogRmlsZUxpc3QgfCBudWxsXG4gICk6IE9ic2VydmFibGU8eyB0aXRsZTogc3RyaW5nOyBzYXRlbGxpdGVzOiBhbnk7IGdyb3VuZFN0YXRpb25zOiBhbnkgfSB8IG51bGw+IHtcbiAgICAvKlxuICAgICAqIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGltcG9ydCBhIEpTYXRPcmIgQ29uZmlndXJhdGlvbiBmaWxlICguanNvKSBpbnRvIHRoaXMgYXBwXG4gICAgICovXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnMpID0+IHtcbiAgICAgIHJlYWRGaWxlKGZpbGVzKS5zdWJzY3JpYmUoXG4gICAgICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgb2JzLm5leHQodGhpcy5wYXJzZUpTT0RhdGEoSlNPTi5wYXJzZSh2YWx1ZSkpKTtcbiAgICAgICAgICBvYnMuY29tcGxldGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgb2JzLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICAvLyBXZSB0aGVuIHBhc3MgdGhpcyBjYWxsYmFjayBmdW5jdGlvbiB0byBvdXIgZnVuY3Rpb24gdGhhdCBpbXBvcnRzIHRoZSBmaWxlXG4gICAgLy8gdGhpcy5pbXBvcnRGaWxlKGZpbGVzKVxuICAgIC8vICAgLnBpcGUoXG4gICAgLy8gICAgIG1lcmdlTWFwKChyZXN1bHQpID0+IGNhbGxiYWNrRm4ocmVzdWx0KSksXG4gICAgLy8gICApXG4gICAgLy8gcmV0dXJuIG5ldyBPYnNlcnZhYmxlKFxuICAgIC8vICAgKHN1YnNjcmliZXIpID0+IHtcbiAgICAvLyAgICAgdGhpcy5pbXBvcnRGaWxlKGZpbGVzKS5zdWJzY3JpYmUoKHJlc3VsdHMpID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcblxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9LFxuICAgIC8vICk7XG4gICAgLy8gLnRoZW4oKHJlc3VsdHMpID0+IG5ldyBQcm9taXNlKCgpID0+IGNhbGxiYWNrRm4ocmVzdWx0cykpKTtcbiAgICAvLyByZXR1cm4gb2YoeyB0aXRsZTogJycsIHNhdGVsbGl0ZXM6IFtdLCBncm91bmRTdGF0aW9uczogW10gfSk7XG4gIH1cbiAgcHVibGljIGZvcm1hdEpTT0RhdGEoc2F0ZWxsaXRlczogYW55KSB7XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHNhdGVsbGl0ZSBsaXN0IGZyb20gYSAuanNvIGZpbGUgYW5kIGNvbnZlcnRzIGFsbCBUTEUtdHlwZXMgc2F0ZWxsaXRlcyB0byBLZXBsZXJpYW4tdHlwZVxuICAgICAqL1xuICAgIGlmICghc2F0ZWxsaXRlcykgcmV0dXJuIHt9OyAvLyBpbnB1dCBpcyB1bmRlZmluZWQgb3IgbnVsbFxuXG4gICAgT2JqZWN0LmVudHJpZXMoc2F0ZWxsaXRlcykuZm9yRWFjaCgoW2tleSwgc2F0ZWxsaXRlXTogW3N0cmluZywgYW55XSkgPT4ge1xuICAgICAgaWYgKHNhdGVsbGl0ZS50eXBlID09PSAndGxlJykge1xuICAgICAgICBzYXRlbGxpdGVzW2tleV0gPSB7IC4uLnNhdGVsbGl0ZSwgLi4uSGVscGVyRnVuY3Rpb25zLmNvbnZlcnRUTEV0b0tlcGxlYXJpYW4oc2F0ZWxsaXRlLmxpbmUxLCBzYXRlbGxpdGUubGluZTIpIH07IC8vIEhlbHBlckZ1bmN0aW9ucy5jb252ZXJ0VExFdG9LZXBsZWFyaWFuKCcnLCAnJyksXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNhdGVsbGl0ZXMpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEhlbHBlckZ1bmN0aW9ucy5jb252ZXJ0VExFdG9LZXBsZWFyaWFuKHNhdGVsbGl0ZS5saW5lMSwgc2F0ZWxsaXRlLmxpbmUyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QudmFsdWVzKFsnc21hJywgJ2VjYycsICdpbmMnLCAncGEnLCAncmFhbicsICdtZWFuQW5vbWFseSddKS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICBzYXRlbGxpdGVzW2tleV1bdmFsXSA9IHBhcnNlRmxvYXQoc2F0ZWxsaXRlW3ZhbF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHJlc3VsdHMuc2F0ZWxsaXRlID0gc2F0ZWxsaXRlc1xuICAgIH0pO1xuICAgIHJldHVybiBzYXRlbGxpdGVzO1xuICB9XG4gIHB1YmxpYyBpbXBvcnRKU09EYXRhKHRpdGxlOiBzdHJpbmcsIHNhdGVsbGl0ZTogYW55LCBzdGF0aW9uOiBhbnkpIHtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBkYXRhIGV4dHJhY3RlZCBmcm9tIEpTYXRPcmIsIHVwZGF0ZXMgdGhlIGN1cnJlbnQgbGluayBidWRnZXRcbiAgICAgKi9cbiAgICBpZiAoIXRoaXMuZm9ybVNlcnZpY2UuaXNDdXJyZW50Rm9ybVNhdmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKCdXYXJuaW5nJywgJ1lvdSBoYXZlIHVuc2F2ZWQgZGF0YScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZvcm1TZXJ2aWNlLnRpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgeyBnZW9tZXRyeSB9ID0gdGhpcy5mb3JtU2VydmljZS5nZXRGb3JtRGF0YSgpO1xuXG4gICAgLy8gSGVyZSBBTVNBVCB1c2VzIG1lYW4gYWx0aXR1ZGUgd2hpY2ggaXMgZXF1aXZhbGVudCB0byBTTUEgYnV0IHdlIHdpbGwgYmUgdXNpbmcgbWF4aW11bSBBbHRpdHVkZSBjb3JyZXNwb25kaW5nIHRvIHdvcnN0IGNhc2Ugc2NlbmFyaW9cbiAgICBnZW9tZXRyeS5hbHRpdHVkZS52YWx1ZSA9ICgxICsgc2F0ZWxsaXRlLmVjYykgKiBzYXRlbGxpdGUuc21hO1xuICAgIGdlb21ldHJ5LmVsZXZhdGlvbi52YWx1ZSA9IHN0YXRpb24uZWxldmF0aW9uO1xuXG4gICAgLy8gVXBkYXRpbmcgc2xhbnRSYW5nZSBhbHNvXG4gICAgZ2VvbWV0cnkuc2xhbnRSYW5nZS52YWx1ZSA9IEhlbHBlckZ1bmN0aW9ucy5zbGFudFJhbmdlRnJvbUFsdEVsZXYoc2F0ZWxsaXRlLnNtYSwgc3RhdGlvbi5lbGV2YXRpb24pO1xuXG4gICAgLy8gdGhpcy5mb3JtU2VydmljZS5hZGRBcmNoaXZlKCdnZW9tZXRyeScsIHRoaXMuZmIuZ3JvdXAoZ2VvbWV0cnkpKTtcbiAgICB0aGlzLmZvcm1TZXJ2aWNlLmdsb2JhbEZvcm0uc2V0Q29udHJvbCgnZ2VvbWV0cnknLCB0aGlzLmZiLmdyb3VwKGdlb21ldHJ5KSk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1TZXJ2aWNlLmdsb2JhbEZvcm0udmFsdWUpO1xuICAgIHRoaXMubG9nZ2VyLnN1Y2Nlc3MoJ2ltcG9ydGluZyBkYXRhJyk7XG4gIH1cbiAgcHVibGljIGltcG9ydENvbmZpZ0ZpbGUoZmlsZXM6IEZpbGVMaXN0IHwgbnVsbCk6IHZvaWQge1xuICAgIC8qXG4gICAgICogVGhpcyBhbGxvd3MgaW1wb3J0aW5nIGEganNvbiBjb25maWcgZmlsZSBjb250YWluaW5nIGEgc2NlbmFyaW8gdXNpbmcgdGhlIHNhdmUvbG9hZCBidXR0b25zXG4gICAgICovXG4gICAgLy8gI1RPRE86IFNPTUUgRklMRSBWRVJJRklDQVRJT05cbiAgICAvLyBEZWZpbmluZyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHdoaWNoIHdlIHdpbGwgZmVlZCB0aGUgcHJvdmlkZWQgZmlsZVxuICAgIGNvbnN0IGNhbGxiYWNrRm4gPSAocmVzdWx0czogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLm1ldGFkYXRhKSB7XG4gICAgICAgIGlmIChyZXN1bHRzLm1ldGFkYXRhLnZlcnNpb24gIT09IHRoaXMuZW52aXJvbm1lbnQudmVyc2lvbikge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ1ZlcnNpb24gV2FybmluZycsICdUaGUgaW1wb3J0ZWQgZmlsZSBoYXMgYmVlbiBnZW5lcmF0ZWQgd2l0aCBhIGRpZmZlcmVudCB2ZXJzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2FmZVJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB0byBpbXBvcnQgYSBmaWxlLXNhZmUgbmFtZVxuICAgICAgICBzYWZlUmVzdWx0cy5tZXRhZGF0YS50aXRsZSA9IHNhbml0aXplKHJlc3VsdHMubWV0YWRhdGEudGl0bGUpO1xuICAgICAgICB0aGlzLmZvcm1TZXJ2aWNlLmltcG9ydEZvcm0oc2FmZVJlc3VsdHMpO1xuICAgICAgICB0aGlzLmxvZ2dlci5zdWNjZXNzKCdTdWNjZXNzZnVsbHkgbG9hZGVkIGNvbmZpZyBmaWxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgZmlsZSBkb2Vzbid0IGNvbnRhaW4gbWV0YWRhdGEgb3IgaWYgaXRzIGNvbnRlbnQgaXMgbnVsbCBvciB1bmRlZmluZWQsIHRoaXMgcHJvYmFibHkgaGFzbid0IGJlZW4gZ2VuZXJhdGVkIHdpdGggTHVwbGlua1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlRoaXMgZmlsZSBkb2Vzbid0IGxvb2sgbGlrZSBhIEx1cGxpbmsgY29uZmlndXJhdGlvbiBmaWxlXCIsICdNaXNzaW5nIGNvbnRlbnQgb3IgbWV0YWRhdGEnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIFdlIHRoZW4gcGFzcyB0aGlzIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIG91ciBmdW5jdGlvbiB0aGF0IGltcG9ydHMgdGhlIGZpbGVcblxuICAgIHJlYWRGaWxlKGZpbGVzKS5zdWJzY3JpYmUoXG4gICAgICAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjYWxsYmFja0ZuKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ0Vycm9yIHdoaWxlIGltcG9ydGluZyBmaWxlJywgZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gICAgLy8gdGhpcy5pbXBvcnRGaWxlKGZpbGVzKTtcbiAgICAvLyAudGhlbigoKSA9PiBuZXcgUHJvbWlzZSgocmVzdWx0cykgPT4gY2FsbGJhY2tGbihyZXN1bHRzKSkpO1xuICB9XG4gIHB1YmxpYyBnZW5lcmF0ZUNvbmZpZyhkYXRhOiBhbnkpOiB7IG1ldGFkYXRhOiBhbnk7IGRhdGE6IGFueSB9IHtcbiAgICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmZvcm1TZXJ2aWNlLnRpdGxlLFxuICAgICAgZGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgIHZlcnNpb246IHRoaXMuZW52aXJvbm1lbnQudmVyc2lvbixcbiAgICB9O1xuICAgIHJldHVybiB7IG1ldGFkYXRhLCBkYXRhIH07XG4gIH1cbiAgcHVibGljIGV4cG9ydENvbmZpZ0ZpbGUoZGF0YTogYW55KSB7XG4gICAgLy8gI1RPRE86IFRoaXMgaXMgd29ya2luZywgbm93IGFyZSB3ZSBzdXJlIHdlIGNhbid0IGluamVjdCBqYXZhc2NyaXB0IHVzaW5nIHRoaXMgKFhTUyBpbmplY3Rpb24pID9cbiAgICAvLyAjVE9ETzogQWxzbywgZ2l2ZW4gYSBsYXJnZSBlbm91Z2ggSlNPTiwgdGhpcyB3b24ndCB3b3JrLCAtPiBzd2l0Y2ggdG8gYmxvYlxuICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdleHBvcnRpbmcgY29uZmlnIScpO1xuXG4gICAgLy8gRklYTUU6IFVTSU5HIERBVEEgVVJJIElTIFBSRVRUWSBTVFJBSUdIVEZPUldBUkQgWUVUIFRIRSBNQVggU0laRSBERVBFTkRTIE9OIFRIRSBCUk9XU0VSICgyTUIgZm9yIENocm9tZSwgdW5saW1pdGVkIGZvciBGaXJlZm94KSwgQkVUVEVSIFRPIFVTRSBCTE9CXG4gICAgLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY5NTE1MS9kYXRhLXByb3RvY29sLXVybC1zaXplLWxpbWl0YXRpb25zXG4gICAgY29uc3QgY29uZmlnRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWcoZGF0YSk7XG4gICAgY29uc3QgY29uZmlnVVJMID0gYGRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04LCR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgSlNPTi5zdHJpbmdpZnkoY29uZmlnRGF0YSwgdW5kZWZpbmVkLCAyKVxuICAgICl9YDtcbiAgICAvLyBDcmVhdGUgYSBwbGFjZWhvbGRlciBlbGVtZW50IGZvciB0aGlzIGRhdGFcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLmhyZWYgPSBjb25maWdVUkw7XG4gICAgYW5jaG9yLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGFuY2hvci5kb3dubG9hZCA9IGAke2NvbmZpZ0RhdGEubWV0YWRhdGEudGl0bGV9Lmpzb25gO1xuXG4gICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgLy8gUmVtb3ZpbmcgcGxhY2Vob2xkZXIgZWxlbWVudFxuICAgIGFuY2hvci5yZW1vdmUoKTtcblxuICAgIC8vIE1hcmsgdGhlIGN1cnJlbnQgZm9ybSBhcyBzYXZlZFxuICAgIHRoaXMuZm9ybVNlcnZpY2UuaXNDdXJyZW50Rm9ybVNhdmVkID0gdHJ1ZTtcbiAgfVxufVxuIl19