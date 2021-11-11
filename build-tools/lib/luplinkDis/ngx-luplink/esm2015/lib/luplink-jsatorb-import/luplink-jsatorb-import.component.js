import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./jsatorb-link.service";
import * as i2 from "../shared/logger/logger.service";
import * as i3 from "../services/save-load.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function JSatOrbLinkComponent_form_0_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const satellite_r4 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", satellite_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(satellite_r4.name);
} }
function JSatOrbLinkComponent_form_0_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const station_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", station_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(station_r5.name);
} }
function JSatOrbLinkComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("ngSubmit", function JSatOrbLinkComponent_form_0_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.importJSO(); });
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtext(5, "Satellite:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵelementStart(7, "select", 8);
    i0.ɵɵtemplate(8, JSatOrbLinkComponent_form_0_option_8_Template, 2, 2, "option", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵelementStart(10, "div", 6);
    i0.ɵɵtext(11, "Station:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 7);
    i0.ɵɵelementStart(13, "select", 11);
    i0.ɵɵtemplate(14, JSatOrbLinkComponent_form_0_option_14_Template, 2, 2, "option", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 4);
    i0.ɵɵelement(16, "div", 6);
    i0.ɵɵelementStart(17, "div", 12);
    i0.ɵɵelementStart(18, "div", 13);
    i0.ɵɵelementStart(19, "button", 14);
    i0.ɵɵtext(20, "Load");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.importForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r0.jsoData.satellites);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r0.jsoData.groundStations);
} }
function JSatOrbLinkComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "It seems no scenario has been imported inside JSatOrb.");
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4, "Luplink won't be able to import data from JSatOrb.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class JSatOrbLinkComponent {
    constructor(linkService, logger, loadService) {
        this.linkService = linkService;
        this.logger = logger;
        this.loadService = loadService;
        this.isEmpty = false;
        this.importForm = new FormGroup({
            satellite: new FormControl(),
            station: new FormControl(),
        });
    }
    ngOnInit() {
        var _a, _b;
        this.jsoData = this.loadService.parseJSOData(this.linkService.getJSOData());
        if (this.isJSOValid(this.jsoData)) {
            // Set the default values
            this.importForm.patchValue({
                satellite: (_a = this.jsoData) === null || _a === void 0 ? void 0 : _a.satellites[0],
                station: (_b = this.jsoData) === null || _b === void 0 ? void 0 : _b.groundStations[0],
            });
        }
        else {
            // Nothing interesting from getJSOData(), show warning
            this.isEmpty = true;
        }
        // Init the link service that will keep tracks of luplink data changes for persistance of data
        this.linkService.initService();
    }
    isJSOValid(jsoData) {
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
            }
            else {
                this.logger.warn('Data from JSatOrb does either have nosatellites or groundstations');
            }
        }
        else {
            this.logger.warn('Data from JSatOrb is either undefined or null');
        }
        return false;
    }
    importJSO() {
        this.loadService.importJSOData(this.jsoData.title, this.importForm.controls.satellite.value, this.importForm.controls.station.value);
    }
}
JSatOrbLinkComponent.ɵfac = function JSatOrbLinkComponent_Factory(t) { return new (t || JSatOrbLinkComponent)(i0.ɵɵdirectiveInject(i1.JSatOrbLinkService), i0.ɵɵdirectiveInject(i2.LoggerService), i0.ɵɵdirectiveInject(i3.SaveLoadService)); };
JSatOrbLinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JSatOrbLinkComponent, selectors: [["lib-luplink-jsatorb-import"]], decls: 2, vars: 2, consts: [["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field"], [1, "label"], [1, "select", "is-fullwidth"], ["formControlName", "satellite"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "field", "is-expanded"], ["formControlName", "station"], [1, "field", "is-grouped", "is-grouped-right"], [1, "control"], ["type", "submit", 1, "button", "is-primary"], [3, "ngValue"]], template: function JSatOrbLinkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, JSatOrbLinkComponent_form_0_Template, 21, 3, "form", 0);
        i0.ɵɵtemplate(1, JSatOrbLinkComponent_div_1_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isEmpty);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isEmpty);
    } }, directives: [i4.NgIf, i5.ɵangular_packages_forms_forms_ba, i5.NgControlStatusGroup, i5.FormGroupDirective, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.FormControlName, i4.NgForOf, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_z], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JSatOrbLinkComponent, [{
        type: Component,
        args: [{
                selector: 'lib-luplink-jsatorb-import',
                templateUrl: './luplink-jsatorb-import.component.html',
                styleUrls: ['./luplink-jsatorb-import.component.scss'],
            }]
    }], function () { return [{ type: i1.JSatOrbLinkService }, { type: i2.LoggerService }, { type: i3.SaveLoadService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVwbGluay1qc2F0b3JiLWltcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2x1cGxpbmstanNhdG9yYi1pbXBvcnQvbHVwbGluay1qc2F0b3JiLWltcG9ydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2x1cGxpbmstanNhdG9yYi1pbXBvcnQvbHVwbGluay1qc2F0b3JiLWltcG9ydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lDTWhDLGtDQUFnRjtJQUFBLFlBQWtCO0lBQUEsaUJBQVM7OztJQUFuRyxzQ0FBcUI7SUFBbUQsZUFBa0I7SUFBbEIsdUNBQWtCOzs7SUFRbEcsa0NBQWdGO0lBQUEsWUFBZ0I7SUFBQSxpQkFBUzs7O0lBQTdDLG9DQUFtQjtJQUFDLGVBQWdCO0lBQWhCLHFDQUFnQjs7OztJQWZ4SCwrQkFBMkY7SUFBMUMsNExBQXdCO0lBQ3JFLDhCQUFpQztJQUM3Qiw4QkFBd0I7SUFDcEIsOEJBQW1CO0lBQ2YsOEJBQW1CO0lBQUEsMEJBQVU7SUFBQSxpQkFBTTtJQUNuQyw4QkFBaUM7SUFDN0IsaUNBQW9DO0lBQ2hDLGtGQUEyRztJQUMvRyxpQkFBUztJQUNiLGlCQUFNO0lBQ1YsaUJBQU07SUFDTiwrQkFBK0I7SUFDM0IsK0JBQW1CO0lBQUEseUJBQVE7SUFBQSxpQkFBTTtJQUNqQywrQkFBaUM7SUFDN0IsbUNBQWtDO0lBQzlCLG9GQUF5RztJQUM3RyxpQkFBUztJQUNiLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNO0lBQ04sK0JBQXdC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VCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQzthQUN2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2F2ZUxvYWRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2F2ZS1sb2FkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSlNhdE9yYkxpbmtTZXJ2aWNlIH0gZnJvbSAnLi9qc2F0b3JiLWxpbmsuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sdXBsaW5rLWpzYXRvcmItaW1wb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2x1cGxpbmstanNhdG9yYi1pbXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sdXBsaW5rLWpzYXRvcmItaW1wb3J0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEpTYXRPcmJMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxpbmtTZXJ2aWNlOiBKU2F0T3JiTGlua1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkU2VydmljZTogU2F2ZUxvYWRTZXJ2aWNlXG4gICkge31cbiAgcHVibGljIGpzb0RhdGE6IGFueTtcbiAgcHVibGljIGlzRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBpbXBvcnRGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgc2F0ZWxsaXRlOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICBzdGF0aW9uOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5qc29EYXRhID0gdGhpcy5sb2FkU2VydmljZS5wYXJzZUpTT0RhdGEodGhpcy5saW5rU2VydmljZS5nZXRKU09EYXRhKCkpO1xuICAgIGlmICh0aGlzLmlzSlNPVmFsaWQodGhpcy5qc29EYXRhKSkge1xuICAgICAgLy8gU2V0IHRoZSBkZWZhdWx0IHZhbHVlc1xuICAgICAgdGhpcy5pbXBvcnRGb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICBzYXRlbGxpdGU6IHRoaXMuanNvRGF0YT8uc2F0ZWxsaXRlc1swXSxcbiAgICAgICAgc3RhdGlvbjogdGhpcy5qc29EYXRhPy5ncm91bmRTdGF0aW9uc1swXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3RoaW5nIGludGVyZXN0aW5nIGZyb20gZ2V0SlNPRGF0YSgpLCBzaG93IHdhcm5pbmdcbiAgICAgIHRoaXMuaXNFbXB0eSA9IHRydWU7XG4gICAgfVxuICAgIC8vIEluaXQgdGhlIGxpbmsgc2VydmljZSB0aGF0IHdpbGwga2VlcCB0cmFja3Mgb2YgbHVwbGluayBkYXRhIGNoYW5nZXMgZm9yIHBlcnNpc3RhbmNlIG9mIGRhdGFcbiAgICB0aGlzLmxpbmtTZXJ2aWNlLmluaXRTZXJ2aWNlKCk7XG4gIH1cblxuICBpc0pTT1ZhbGlkKGpzb0RhdGE6IGFueSk6IGJvb2xlYW4ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgY2hlY2tzIHRoYXQgdGhlIGltcG9ydGVkIEpTTyBkYXRhIGlzIHZhbGlkOiBub24gZW1wdHkgb3IgbnVsbCBhbmQgaGFzIGV4aXN0aW5nIHNhdGVsbGl0ZXMgLyBHUy5cbiAgICAgKiBJbiBhbGwgb3RoZXIgY2FzZXMsIHRoZSBkYXRhIGlzIGludmFsaWRcbiAgICAgKlxuICAgICAqIEBpbnB1dCBqc29EYXRhOiB7dGl0bGU6IHN0cmluZywgc2F0ZWxsaXRlczogU2F0ZWxsaXRlW10sIGdyb3VuZFN0YXRpb25zOiBHcm91bmRTdGF0aW9uW119XG4gICAgICpcbiAgICAgKiBAb3V0cHV0IHZhbGlkaXR5IG9mIHRoZSBkYXRhXG4gICAgICovXG4gICAgaWYgKGpzb0RhdGEpIHtcbiAgICAgIGlmIChqc29EYXRhLmdyb3VuZFN0YXRpb25zICYmIGpzb0RhdGEuc2F0ZWxsaXRlcykge1xuICAgICAgICBpZiAoanNvRGF0YS5ncm91bmRTdGF0aW9ucy5sZW5ndGggPiAwICYmIGpzb0RhdGEuc2F0ZWxsaXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2dnZXIud2FybignRGF0YSBmcm9tIEpTYXRPcmIgZG9lcyBlaXRoZXIgaGF2ZSBubyBzYXRlbGxpdGVzIG9yIGdyb3VuZHN0YXRpb25zJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKCdEYXRhIGZyb20gSlNhdE9yYiBkb2VzIGVpdGhlciBoYXZlIG5vc2F0ZWxsaXRlcyBvciBncm91bmRzdGF0aW9ucycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKCdEYXRhIGZyb20gSlNhdE9yYiBpcyBlaXRoZXIgdW5kZWZpbmVkIG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGltcG9ydEpTTygpIHtcbiAgICB0aGlzLmxvYWRTZXJ2aWNlLmltcG9ydEpTT0RhdGEoXG4gICAgICB0aGlzLmpzb0RhdGEudGl0bGUsXG4gICAgICB0aGlzLmltcG9ydEZvcm0uY29udHJvbHMuc2F0ZWxsaXRlLnZhbHVlLFxuICAgICAgdGhpcy5pbXBvcnRGb3JtLmNvbnRyb2xzLnN0YXRpb24udmFsdWVcbiAgICApO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImZvcm1cIiBbZm9ybUdyb3VwXT1cInRoaXMuaW1wb3J0Rm9ybVwiIChuZ1N1Ym1pdCk9XCJpbXBvcnRKU08oKVwiICpuZ0lmPVwiIWlzRW1wdHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+U2F0ZWxsaXRlOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwic2F0ZWxsaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIFtuZ1ZhbHVlXT1cInNhdGVsbGl0ZVwiICpuZ0Zvcj1cImxldCBzYXRlbGxpdGUgb2YgdGhpcy5qc29EYXRhLnNhdGVsbGl0ZXNcIj57e3NhdGVsbGl0ZS5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1leHBhbmRlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlN0YXRpb246PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdCBpcy1mdWxsd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJzdGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBzdGF0aW9uIG9mIHRoaXMuanNvRGF0YS5ncm91bmRTdGF0aW9uc1wiIFtuZ1ZhbHVlXT1cInN0YXRpb25cIj57e3N0YXRpb24ubmFtZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cbiAgICAgICAgICAgIDwhLS0gRW1wdHkgc3BhY2UgLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtZ3JvdXBlZCBpcy1ncm91cGVkLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5Mb2FkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG48ZGl2ICpuZ0lmPVwiaXNFbXB0eVwiPlxuICAgIDxwPkl0IHNlZW1zIG5vIHNjZW5hcmlvIGhhcyBiZWVuIGltcG9ydGVkIGluc2lkZSBKU2F0T3JiLjxicj5MdXBsaW5rIHdvbid0IGJlIGFibGUgdG8gaW1wb3J0IGRhdGEgZnJvbSBKU2F0T3JiLjwvcD5cbjwvZGl2PiJdfQ==