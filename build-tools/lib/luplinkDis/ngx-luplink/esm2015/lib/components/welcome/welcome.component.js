import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import mockJSatOrbData from '../../shared/testing/mockJSatOrbData.json';
import { ENVIRONMENT_TOKEN } from '../../shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/logger/logger.service";
import * as i2 from "../../services/save-load.service";
import * as i3 from "../../form/form.service";
import * as i4 from "@angular/forms";
import * as i5 from "../navigation-sidebar/navigation-sidebar.component";
import * as i6 from "../card/card.component";
import * as i7 from "@angular/common";
import * as i8 from "ngx-nanospace-client-lib";
function WelcomeComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const satellite_r6 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", satellite_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", satellite_r6.name, "");
} }
function WelcomeComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const station_r7 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", station_r7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", station_r7.name, " ");
} }
function WelcomeComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Semi-Major Axis (SMA):");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵelementStart(6, "b");
    i0.ɵɵtext(7, "Excentricity:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵelementStart(10, "b");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵelementStart(13, "b");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.selectedSatellite.sma.toPrecision(3), "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.selectedSatellite.ecc, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Minimum Altitude: ", ((1 - ctx_r3.selectedSatellite.ecc) * ctx_r3.selectedSatellite.sma).toPrecision(3), " km");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Maximum Altitude (imported into geometry): ", ((1 + ctx_r3.selectedSatellite.ecc) * ctx_r3.selectedSatellite.sma).toPrecision(3), " km");
} }
function WelcomeComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Elevation:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.selectedStation.elevation.toPrecision(3), "");
} }
function WelcomeComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "lib-card", 6);
    i0.ɵɵelementStart(2, "div", 30);
    i0.ɵɵelement(3, "nano-dropdown-project");
    i0.ɵɵelement(4, "nano-input-id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", "Import from Nanospace");
} }
export class WelcomeComponent {
    /**
     * Import Data from JSatOrb, select satellites and groundstations to study. Maybe also import from nanospace.
     */
    constructor(environment, logger, saveLoadService, formService, fb) {
        this.environment = environment;
        this.logger = logger;
        this.saveLoadService = saveLoadService;
        this.formService = formService;
        this.fb = fb;
        this.jsoData = { title: '', satellites: undefined, groundStations: undefined };
        this.debugMode = this.environment.debugMode;
        this.jsoForm = new FormGroup({
            satellite: new FormControl(),
            station: new FormControl(),
        });
    }
    ngOnInit() {
        var _a;
        if (this.debugMode) {
            const testData = mockJSatOrbData;
            const title = (_a = testData.header) === null || _a === void 0 ? void 0 : _a.mission;
            const satellites = this.saveLoadService.formatJSOData(testData.satellites);
            const { groundStations } = testData;
            this.jsoData = { title, satellites, groundStations };
            this.buildForm();
        }
    }
    importJSatOrbData(files) {
        const obs = this.saveLoadService.importJSatOrbConfigFile(files)
            .subscribe((value) => {
            if (value)
                this.jsoData = value;
            console.log('import from jso');
            console.log(this.jsoData);
            this.buildForm();
            obs.unsubscribe();
        }, (error) => {
            this.logger.error('Error', 'Could not open file provided');
            obs.unsubscribe();
        }, 
        // When complete
        () => { obs.unsubscribe(); });
        // return;
    }
    buildForm(data = this.jsoData) {
        /**
         * This builds the reactive part of the form from jsoData so that it can be displayed by template
         */
        this.jsoForm.patchValue({
            satellite: this.jsoData.satellites[0],
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
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(i0.ɵɵdirectiveInject(ENVIRONMENT_TOKEN), i0.ɵɵdirectiveInject(i1.LoggerService), i0.ɵɵdirectiveInject(i2.SaveLoadService), i0.ɵɵdirectiveInject(i3.FormService), i0.ɵɵdirectiveInject(i4.FormBuilder)); };
WelcomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WelcomeComponent, selectors: [["lib-welcome"]], decls: 69, vars: 18, consts: [[1, "columns"], [1, "column", "is-narrow", 3, "currentComponent"], [1, "column", "pl-0", "pr-5"], [1, "pt-3"], [1, "columns", "is-centered"], [1, "column", "is-two-thirds"], [3, "title"], [2, "display", "flex", "justify-content", "space-around", "align-items", "center"], [1, "button", "is-primary"], [1, "file-input"], ["id", "file", "type", "file", "accept", ".jso", 1, "file", 3, "change"], ["file", ""], [2, "text-align", "center"], [1, "column"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field"], [1, "label"], [1, "select", "is-fullwidth"], ["formControlName", "satellite"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "field", "is-expanded"], ["formControlName", "station"], [1, "field", "is-grouped", "is-grouped-right"], [1, "control"], ["type", "submit", 1, "button", "is-primary"], [4, "ngIf"], ["class", "column", 4, "ngIf"], [3, "ngValue"], [2, "display", "inline-flex"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "lib-navigation-sidebar", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "section", 3);
        i0.ɵɵelementStart(4, "h2");
        i0.ɵɵtext(5, "Welcome to Luplink");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "Start importing data from JSatOrb or use default data to compute a link budget!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 4);
        i0.ɵɵelementStart(9, "div", 5);
        i0.ɵɵelementStart(10, "lib-card", 6);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "a", 8);
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelementStart(14, "input", 10, 11);
        i0.ɵɵlistener("change", function WelcomeComponent_Template_input_change_14_listener() { i0.ɵɵrestoreView(_r8); const _r0 = i0.ɵɵreference(15); return ctx.importJSatOrbData(_r0.files); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(16, " Load JSatOrb file (.jso) ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 12);
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19, "Imported project: ");
        i0.ɵɵelementStart(20, "b");
        i0.ɵɵtext(21);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "br");
        i0.ɵɵtext(23, "Satellites: ");
        i0.ɵɵelementStart(24, "b");
        i0.ɵɵtext(25);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(26, "br");
        i0.ɵɵtext(27, "Groundstations: ");
        i0.ɵɵelementStart(28, "b");
        i0.ɵɵtext(29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "lib-card", 6);
        i0.ɵɵelementStart(31, "div", 13);
        i0.ɵɵelementStart(32, "p");
        i0.ɵɵelementStart(33, "i");
        i0.ɵɵtext(34, "Choose a satellite and a groundstation to import: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "form", 14);
        i0.ɵɵlistener("ngSubmit", function WelcomeComponent_Template_form_ngSubmit_35_listener() { return ctx.useSelectedData(); });
        i0.ɵɵelementStart(36, "div", 15);
        i0.ɵɵelementStart(37, "div", 16);
        i0.ɵɵelementStart(38, "div", 17);
        i0.ɵɵelementStart(39, "div", 18);
        i0.ɵɵtext(40, "Satellite:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div", 19);
        i0.ɵɵelementStart(42, "select", 20);
        i0.ɵɵtemplate(43, WelcomeComponent_option_43_Template, 2, 2, "option", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "div", 22);
        i0.ɵɵelementStart(45, "div", 18);
        i0.ɵɵtext(46, "Station:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "div", 19);
        i0.ɵɵelementStart(48, "select", 23);
        i0.ɵɵtemplate(49, WelcomeComponent_option_49_Template, 2, 2, "option", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "div", 16);
        i0.ɵɵelement(51, "div", 18);
        i0.ɵɵelementStart(52, "div", 24);
        i0.ɵɵelementStart(53, "div", 25);
        i0.ɵɵelementStart(54, "button", 26);
        i0.ɵɵtext(55, "Import");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "h3");
        i0.ɵɵtext(57, "Selected Satellite:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "pre");
        i0.ɵɵtext(59);
        i0.ɵɵpipe(60, "json");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(61, WelcomeComponent_div_61_Template, 15, 4, "div", 27);
        i0.ɵɵelementStart(62, "h3");
        i0.ɵɵtext(63, "Selected groundstation");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "pre");
        i0.ɵɵtext(65);
        i0.ɵɵpipe(66, "json");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(67, WelcomeComponent_div_67_Template, 5, 1, "div", 27);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(68, WelcomeComponent_div_68_Template, 5, 1, "div", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("currentComponent", "welcome");
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("title", "Import data from JSatOrb");
        i0.ɵɵadvance(11);
        i0.ɵɵtextInterpolate(ctx.jsoData.title);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("(", ctx.jsoData.satellites == null ? null : ctx.jsoData.satellites.length, ")");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("(", ctx.jsoData.groundStations == null ? null : ctx.jsoData.groundStations.length, ")");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("title", "Satellite & Groundstation selection");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.jsoForm);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.jsoData.satellites);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.jsoData.groundStations);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(60, 14, ctx.selectedSatellite));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.selectedSatellite);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(66, 16, ctx.selectedStation));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.selectedStation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.environment.enableNanospace);
    } }, directives: [i5.NavigationSidebarComponent, i6.CardComponent, i4.ɵangular_packages_forms_forms_ba, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.FormControlName, i7.NgForOf, i7.NgIf, i4.NgSelectOption, i4.ɵangular_packages_forms_forms_z, i8.ɵd, i8.ɵg], pipes: [i7.JsonPipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WelcomeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ENVIRONMENT_TOKEN]
            }] }, { type: i1.LoggerService }, { type: i2.SaveLoadService }, { type: i3.FormService }, { type: i4.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFlLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyRSxPQUFPLGVBQWUsTUFBTSwyQ0FBMkMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7SUN5RXBDLGtDQUFnRjtJQUM5RSxZQUFrQjtJQUFBLGlCQUFTOzs7SUFENkIsc0NBQXFCO0lBQzdFLGVBQWtCO0lBQWxCLGlEQUFrQjs7O0lBUXBCLGtDQUFnRjtJQUM5RSxZQUNGO0lBQUEsaUJBQVM7OztJQUZtRCxvQ0FBbUI7SUFDN0UsZUFDRjtJQURFLGdEQUNGOzs7SUFvQmQsMkJBQStCO0lBQzdCLHlCQUFHO0lBQUEseUJBQUc7SUFBQSxzQ0FBc0I7SUFBQSxpQkFBSTtJQUFDLFlBQTRDO0lBQUEsaUJBQUk7SUFDakYseUJBQUc7SUFBQSx5QkFBRztJQUFBLDZCQUFhO0lBQUEsaUJBQUk7SUFBQyxZQUF5QjtJQUFBLGlCQUFJO0lBQ3JELHlCQUFHO0lBQUEsMEJBQUc7SUFBQSxhQUF5RjtJQUFBLGlCQUFJO0lBQUEsaUJBQUk7SUFDdkcsMEJBQUc7SUFBQSwwQkFBRztJQUFBLGFBQ3FFO0lBQUEsaUJBQUk7SUFBQSxpQkFBSTtJQUdyRixpQkFBTTs7O0lBUDZCLGVB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Q1QsaUJBQU07UUFDTiwyQkFBSTtRQUFBLG9DQUFtQjtRQUFBLGlCQUFLO1FBQzVCLDRCQUFLO1FBQUEsYUFBNEI7O1FBQUEsaUJBQU07UUFDdkMscUVBUU07UUFDTiwyQkFBSTtRQUFBLHVDQUFzQjtRQUFBLGlCQUFLO1FBQy9CLDRCQUFLO1FBQUEsYUFBMEI7O1FBQUEsaUJBQU07UUFDckMsb0VBRU07UUFFUixpQkFBVztRQUdiLGlCQUFNO1FBR04sb0VBT007UUFDUixpQkFBTTtRQUNSLGlCQUFVO1FBQ1osaUJBQU07UUFDUixpQkFBTTs7UUE5STZDLGVBQThCO1FBQTlCLDRDQUE4QjtRQWU3RCxlQUFvQztRQUFwQyxrREFBb0M7UUFZaEIsZ0JBQXNCO1FBQXRCLHVDQUFzQjtRQUN6QyxlQUFxQztRQUFyQyxzR0FBcUM7UUFDckMsZUFBeUM7UUFBekMsOEdBQXlDO1FBSzFDLGVBQStDO1FBQS9DLDZEQUErQztRQXNDbEMsZUFBMEI7UUFBMUIsdUNBQTBCO1FBT0gsZUFBMEI7UUFBMUIsZ0RBQTBCO1FBUzVCLGVBQThCO1FBQTlCLG9EQUE4QjtRQXFCbkUsZ0JBQTRCO1FBQTVCLG1FQUE0QjtRQUMzQixlQUF1QjtRQUF2Qiw0Q0FBdUI7UUFVeEIsZUFBMEI7UUFBMUIsaUVBQTBCO1FBQ3pCLGVBQXFCO1FBQXJCLDBDQUFxQjtRQVVWLGVBQXNDO1FBQXRDLHNEQUFzQzs7dUZEdEh0RCxnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4Qzs7c0JBS2MsTUFBTTt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNhdmVMb2FkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NhdmUtbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlckZ1bmN0aW9ucyB9IGZyb20gJy4uLy4uL3NoYXJlZC9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCBtb2NrSlNhdE9yYkRhdGEgZnJvbSAnLi4vLi4vc2hhcmVkL3Rlc3RpbmcvbW9ja0pTYXRPcmJEYXRhLmpzb24nO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mb3JtL2Zvcm0uc2VydmljZSc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVF9UT0tFTiB9IGZyb20gJy4uLy4uL3NoYXJlZC9kZXBlbmRlbmNpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItd2VsY29tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi93ZWxjb21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2VsY29tZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBXZWxjb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEltcG9ydCBEYXRhIGZyb20gSlNhdE9yYiwgc2VsZWN0IHNhdGVsbGl0ZXMgYW5kIGdyb3VuZHN0YXRpb25zIHRvIHN0dWR5LiBNYXliZSBhbHNvIGltcG9ydCBmcm9tIG5hbm9zcGFjZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRU5WSVJPTk1FTlRfVE9LRU4pIHB1YmxpYyBlbnZpcm9ubWVudDogYW55LCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBzYXZlTG9hZFNlcnZpY2U6IFNhdmVMb2FkU2VydmljZSwgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgZmI6Rm9ybUJ1aWxkZXIpIHsgfVxuICBwdWJsaWMgc2VsZWN0ZWRTYXRlbGxpdGU6IGFueTtcbiAgcHVibGljIHNlbGVjdGVkU3RhdGlvbjogYW55O1xuICBwdWJsaWMganNvRGF0YTogeyB0aXRsZTogc3RyaW5nLCBzYXRlbGxpdGVzOiBhbnksIGdyb3VuZFN0YXRpb25zOiBhbnkgfSA9IHsgdGl0bGU6ICcnLCBzYXRlbGxpdGVzOiB1bmRlZmluZWQsIGdyb3VuZFN0YXRpb25zOiB1bmRlZmluZWQgfTtcbiAgZGVidWdNb2RlID0gdGhpcy5lbnZpcm9ubWVudC5kZWJ1Z01vZGU7XG5cbiAganNvRm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHNhdGVsbGl0ZTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgc3RhdGlvbjogbmV3IEZvcm1Db250cm9sKCksXG4gIH0pO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlYnVnTW9kZSkge1xuICAgICAgY29uc3QgdGVzdERhdGEgPSBtb2NrSlNhdE9yYkRhdGE7XG4gICAgICBjb25zdCB0aXRsZSA9IHRlc3REYXRhLmhlYWRlcj8ubWlzc2lvbjtcbiAgICAgIGNvbnN0IHNhdGVsbGl0ZXMgPSB0aGlzLnNhdmVMb2FkU2VydmljZS5mb3JtYXRKU09EYXRhKHRlc3REYXRhLnNhdGVsbGl0ZXMpO1xuICAgICAgY29uc3QgeyBncm91bmRTdGF0aW9ucyB9ID0gdGVzdERhdGE7XG4gICAgICB0aGlzLmpzb0RhdGEgPSB7IHRpdGxlLCBzYXRlbGxpdGVzLCBncm91bmRTdGF0aW9ucyB9O1xuICAgICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICBpbXBvcnRKU2F0T3JiRGF0YShmaWxlczogRmlsZUxpc3QgfCBudWxsKSB7XG4gICAgY29uc3Qgb2JzID0gdGhpcy5zYXZlTG9hZFNlcnZpY2UuaW1wb3J0SlNhdE9yYkNvbmZpZ0ZpbGUoZmlsZXMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAodmFsdWU6YW55KSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlKSB0aGlzLmpzb0RhdGEgPSB2YWx1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnaW1wb3J0IGZyb20ganNvJyk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5qc29EYXRhKTtcbiAgICAgICAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICAgICAgICAgIG9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6YW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ0Vycm9yJywgJ0NvdWxkIG5vdCBvcGVuIGZpbGUgcHJvdmlkZWQnKTtcbiAgICAgICAgICBvYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gV2hlbiBjb21wbGV0ZVxuICAgICAgICAoKSA9PiB7IG9icy51bnN1YnNjcmliZSgpOyB9LFxuICAgICAgKTtcbiAgICAvLyByZXR1cm47XG4gIH1cblxuICBidWlsZEZvcm0oZGF0YTogYW55ID0gdGhpcy5qc29EYXRhKTogRm9ybUdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGJ1aWxkcyB0aGUgcmVhY3RpdmUgcGFydCBvZiB0aGUgZm9ybSBmcm9tIGpzb0RhdGEgc28gdGhhdCBpdCBjYW4gYmUgZGlzcGxheWVkIGJ5IHRlbXBsYXRlXG4gICAgICovXG4gICAgdGhpcy5qc29Gb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgc2F0ZWxsaXRlOiB0aGlzLmpzb0RhdGEuc2F0ZWxsaXRlc1swXSwgLy8gTUlHSFQgQ1JBU0ggSUYgRU1QVFlcbiAgICAgIHN0YXRpb246IHRoaXMuanNvRGF0YS5ncm91bmRTdGF0aW9uc1swXSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5qc29Gb3JtO1xuICB9XG4gIHVzZVNlbGVjdGVkRGF0YSgpIHtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnanNvRm9ybSB2YWx1ZTonLCB0aGlzLmpzb0Zvcm0udmFsdWUpO1xuICAgIHRoaXMuc2VsZWN0ZWRTYXRlbGxpdGUgPSB0aGlzLmpzb0Zvcm0uY29udHJvbHMuc2F0ZWxsaXRlLnZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWRTdGF0aW9uID0gdGhpcy5qc29Gb3JtLmNvbnRyb2xzLnN0YXRpb24udmFsdWU7XG4gICAgaWYgKCEodGhpcy5zZWxlY3RlZFNhdGVsbGl0ZSAmJiB0aGlzLnNlbGVjdGVkU3RhdGlvbikpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ1dhcm5pbmcnLCAnU3RhdGlvbiBvciBzYXRlbGxpdGUgbm90IHNlbGVjdGVkIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNhdmVMb2FkU2VydmljZS5pbXBvcnRKU09EYXRhKHRoaXMuanNvRGF0YS50aXRsZSwgdGhpcy5zZWxlY3RlZFNhdGVsbGl0ZSwgdGhpcy5zZWxlY3RlZFN0YXRpb24pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuICA8bGliLW5hdmlnYXRpb24tc2lkZWJhciBjbGFzcz1cImNvbHVtbiBpcy1uYXJyb3dcIiBbY3VycmVudENvbXBvbmVudF09XCInd2VsY29tZSdcIj48L2xpYi1uYXZpZ2F0aW9uLXNpZGViYXI+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4gcGwtMCBwci01XCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwdC0zXCI+XG4gICAgICA8aDI+V2VsY29tZSB0byBMdXBsaW5rPC9oMj5cbiAgICAgIDxwPlN0YXJ0IGltcG9ydGluZyBkYXRhIGZyb20gSlNhdE9yYiBvciB1c2UgZGVmYXVsdCBkYXRhIHRvIGNvbXB1dGUgYSBsaW5rIGJ1ZGdldCE8L3A+XG4gICAgICA8IS0tIDxhIGNsYXNzPVwiYnV0dG9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWlucHV0XCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZmlsZVwiIGNsYXNzPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLmpzb25cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIER1bW15IGltcG9ydFxuICAgICAgPC9hPiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWNlbnRlcmVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtdHdvLXRoaXJkc1wiPlxuXG4gICAgICAgICAgPCEtLSA8aW5wdXQgaWQ9XCJmaWxlXCIgY2xhc3M9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuanNvXCIgI2ZpbGUgKGNoYW5nZSk9XCJpbXBvcnRKU2F0T3JiRGF0YShmaWxlLmZpbGVzKVwiPiAtLT5cbiAgICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cIidJbXBvcnQgZGF0YSBmcm9tIEpTYXRPcmInXCI+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaWxlXCIgY2xhc3M9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuanNvXCIgI2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJpbXBvcnRKU2F0T3JiRGF0YShmaWxlLmZpbGVzKVwiPlxuICAgICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgZm9yPVwiZmlsZVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+SW1wb3J0PC9sYWJlbD4gLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgTG9hZCBKU2F0T3JiIGZpbGUgKC5qc28pXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+SW1wb3J0ZWQgcHJvamVjdDogPGI+e3t0aGlzLmpzb0RhdGEudGl0bGV9fTwvYj48YnI+U2F0ZWxsaXRlczpcbiAgICAgICAgICAgICAgICAgIDxiPih7e3RoaXMuanNvRGF0YS5zYXRlbGxpdGVzPy5sZW5ndGh9fSk8L2I+PGJyPkdyb3VuZHN0YXRpb25zOlxuICAgICAgICAgICAgICAgICAgPGI+KHt7dGhpcy5qc29EYXRhLmdyb3VuZFN0YXRpb25zPy5sZW5ndGh9fSk8L2I+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGliLWNhcmQ+XG4gICAgICAgICAgPGxpYi1jYXJkIFt0aXRsZV09XCInU2F0ZWxsaXRlICYgR3JvdW5kc3RhdGlvbiBzZWxlY3Rpb24nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxwPjxpPkNob29zZSBhIHNhdGVsbGl0ZSBhbmQgYSBncm91bmRzdGF0aW9uIHRvIGltcG9ydDogPC9pPjwvcD5cbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cblxuICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlNhdGVsbGl0ZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DaGFyYWN0ZXJpc3RpY3M8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBzYXRlbGxpdGUgb2YgdGhpcy5kYXRhLnNhdGVsbGl0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3NhdGVsbGl0ZS5uYW1lfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7c2F0ZWxsaXRlLnR5cGV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0aGlzLnNlbGVjdGVkU2F0ZWxsaXRlID0gc2F0ZWxsaXRlXCI+U2VsZWN0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdGlvbnM8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBzdGF0aW9uIG9mIHRoaXMuZGF0YS5ncm91bmRTdGF0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7c3RhdGlvbi5uYW1lfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidGhpcy5zZWxlY3RlZFN0YXRpb24gPSBzdGF0aW9uXCI+U2VsZWN0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBbZm9ybUdyb3VwXT1cInRoaXMuanNvRm9ybVwiIChuZ1N1Ym1pdCk9XCJ1c2VTZWxlY3RlZERhdGEoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5TYXRlbGxpdGU6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdCBpcy1mdWxsd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwic2F0ZWxsaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHNhdGVsbGl0ZSBvZiB0aGlzLmpzb0RhdGEuc2F0ZWxsaXRlc1wiIFtuZ1ZhbHVlXT1cInNhdGVsbGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2F0ZWxsaXRlLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtZXhwYW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5TdGF0aW9uOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInN0YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGlvbiBvZiB0aGlzLmpzb0RhdGEuZ3JvdW5kU3RhdGlvbnNcIiBbbmdWYWx1ZV09XCJzdGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdGF0aW9uLm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbXB0eSBzcGFjZSAtLT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWQgaXMtZ3JvdXBlZC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5JbXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDM+U2VsZWN0ZWQgU2F0ZWxsaXRlOjwvaDM+XG4gICAgICAgICAgICA8cHJlPnt7c2VsZWN0ZWRTYXRlbGxpdGUgfCBqc29ufX08L3ByZT5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZFNhdGVsbGl0ZVwiPlxuICAgICAgICAgICAgICA8cD48Yj5TZW1pLU1ham9yIEF4aXMgKFNNQSk6PC9iPiB7eygoc2VsZWN0ZWRTYXRlbGxpdGUuc21hKSkudG9QcmVjaXNpb24oMyl9fTwvcD5cbiAgICAgICAgICAgICAgPHA+PGI+RXhjZW50cmljaXR5OjwvYj4ge3tzZWxlY3RlZFNhdGVsbGl0ZS5lY2N9fTwvcD5cbiAgICAgICAgICAgICAgPHA+PGI+TWluaW11bSBBbHRpdHVkZToge3soKDEtc2VsZWN0ZWRTYXRlbGxpdGUuZWNjKSpzZWxlY3RlZFNhdGVsbGl0ZS5zbWEpLnRvUHJlY2lzaW9uKDMpfX0ga208L2I+PC9wPlxuICAgICAgICAgICAgICA8cD48Yj5NYXhpbXVtIEFsdGl0dWRlIChpbXBvcnRlZCBpbnRvIGdlb21ldHJ5KTpcbiAgICAgICAgICAgICAgICAgIHt7KCgxK3NlbGVjdGVkU2F0ZWxsaXRlLmVjYykqc2VsZWN0ZWRTYXRlbGxpdGUuc21hKS50b1ByZWNpc2lvbigzKX19IGttPC9iPjwvcD5cblxuICAgICAgICAgICAgICA8IS0tIDxwPjxiPk1lYW4gQWx0aXR1ZGU6IHt7KHNlbGVjdGVkU2F0ZWxsaXRlLnNtYSkudG9QcmVjaXNpb24oMyl9fSBrbTwvYj48L3A+IC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDM+U2VsZWN0ZWQgZ3JvdW5kc3RhdGlvbjwvaDM+XG4gICAgICAgICAgICA8cHJlPnt7c2VsZWN0ZWRTdGF0aW9uIHwganNvbn19PC9wcmU+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRTdGF0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPjxiPkVsZXZhdGlvbjo8L2I+IHt7KHNlbGVjdGVkU3RhdGlvbi5lbGV2YXRpb24pLnRvUHJlY2lzaW9uKDMpfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXNlU2VsZWN0ZWREYXRhKClcIj5JbXBvcnQ8L2E+IC0tPlxuICAgICAgICAgIDwvbGliLWNhcmQ+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIDxhIGNsYXNzPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIlwiIGhyZWY9XCJcIiAoY2xpY2spPVwiaW1wb3J0SlNhdE9yYkRhdGEoKVwiPjwvYT4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIiAqbmdJZj1cInRoaXMuZW52aXJvbm1lbnQuZW5hYmxlTmFub3NwYWNlXCI+XG4gICAgICAgICAgPGxpYi1jYXJkIFt0aXRsZV09XCInSW1wb3J0IGZyb20gTmFub3NwYWNlJ1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgIDxuYW5vLWRyb3Bkb3duLXByb2plY3Q+PC9uYW5vLWRyb3Bkb3duLXByb2plY3Q+XG4gICAgICAgICAgICAgIDxuYW5vLWlucHV0LWlkPjwvbmFuby1pbnB1dC1pZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGliLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==