import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { HelperFunctions } from '../../shared/helper-functions';
import { EmptyForm } from '../../shared/models/Form.model';
import * as i0 from "@angular/core";
import * as i1 from "../form.service";
import * as i2 from "../../shared/logger/logger.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@fortawesome/angular-fontawesome";
function FormComponent_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵelement(1, "fa-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r3.faInterrogation);
} }
function FormComponent_div_3_span_10_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const unit_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", unit_r9, " ");
} }
function FormComponent_div_3_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵelementStart(1, "select", 18);
    i0.ɵɵtemplate(2, FormComponent_div_3_span_10_option_2_Template, 2, 1, "option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("value", ctx_r4.asField(field_r2).units[0]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.asField(field_r2).units);
} }
function FormComponent_div_3_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.asField(field_r2).units[0], " ");
} }
function FormComponent_div_3_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.getErrorMessage(ctx_r6.localForm.get(field_r2.id)).error, " ");
} }
function FormComponent_div_3_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.getWarningMessage(ctx_r7.asFormWarn(ctx_r7.localForm.get(field_r2.id))), " ");
} }
const _c0 = function (a0) { return { "is-danger": a0 }; };
function FormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 0);
    i0.ɵɵelementStart(2, "div", 1);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "label", 6);
    i0.ɵɵtext(5);
    i0.ɵɵtemplate(6, FormComponent_div_3_span_6_Template, 2, 1, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵelementStart(8, "div", 9);
    i0.ɵɵelement(9, "input", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, FormComponent_div_3_span_10_Template, 3, 2, "span", 11);
    i0.ɵɵtemplate(11, FormComponent_div_3_a_11_Template, 2, 1, "a", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, FormComponent_div_3_p_12_Template, 2, 1, "p", 13);
    i0.ɵɵtemplate(13, FormComponent_div_3_p_13_Template, 2, 1, "p", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    let tmp_3_0 = null;
    let tmp_6_0 = null;
    let tmp_7_0 = null;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r0.asField(field_r2).desc, ": ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r2.type === "loss");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("formGroupName", field_r2.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, !((tmp_3_0 = ctx_r0.localForm.get(field_r2.id)) == null ? null : tmp_3_0.valid)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.asField(field_r2).units.length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.asField(field_r2).units.length == 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !((tmp_6_0 = ctx_r0.localForm.get(field_r2.id)) == null ? null : tmp_6_0.valid));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_7_0 = ctx_r0.localForm.get(field_r2.id)) == null ? null : tmp_7_0.valid);
} }
function FormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "img", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", ctx_r1.displayedImage, i0.ɵɵsanitizeUrl);
} }
export class FormComponent {
    constructor(formService, logger) {
        this.formService = formService;
        this.logger = logger;
        this._formTemplate = new EmptyForm();
        this.isSubform = true;
        this.isStandalone = true;
        this.formStatus = new EventEmitter();
        // We create a subform corresponding to one of the component involved in the link
        this.localForm = new FormGroup({});
        this.faInterrogation = faQuestionCircle;
        this.componentName = '';
        this.parentName = '';
        this.displayedImage = '';
        this.hasImage = false;
        this.validity = 'none';
        this.localSubscription = new Subscription();
        this.globalSubscription = new Subscription();
        // If this is the first component constructed, initialize formService
        if (!this.formService.isInitialized)
            this.formService.initForms();
        this.subscribeToChanges();
    }
    set formTemplate(value) {
        if (value) {
            this._formTemplate = value;
            this.changeComponent(this._formTemplate); // Supplied by datainput template
            this.validity = this.localForm.valid ? 'valid' : 'invalid';
            this.unsubscribeToChanges();
            this.subscribeToChanges();
            if (this.formTemplate.componentId === 'geometry') {
                // We want to link slant range to altitude & elevation
                this.geometrySubscribe();
            }
            // Checking validity
            this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
        }
        else {
            this.logger.debug('Got an undefined formTemplate');
        }
    }
    get formTemplate() {
        return this._formTemplate;
    }
    asField(field) {
        /**
         * Quick helper function for types conversion in the template
         */
        return field;
    }
    asFormWarn(control) {
        /**
         * Casts an AbstractControl into a FormControlWarn
         * (This is useful for doing type casting inside the template)
         */
        return control;
    }
    subscribeToChanges() {
        this.localSubscription = this.localForm.valueChanges.subscribe(() => {
            // Handle saved state
            this.formService.isCurrentFormSaved = false;
            // Handle validity
            const currentFormValidity = this.localForm.valid;
            if (!currentFormValidity && this.validity !== 'invalid') {
                this.validity = 'invalid';
                // console.log(this.step);
                this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
            }
            else if (currentFormValidity && this.validity !== 'valid') {
                this.validity = 'valid';
                this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
            }
            else if (this.validity === 'none') {
                this.validity = currentFormValidity ? 'valid' : 'invalid';
                this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
            }
            this.formService.addForm(this.localForm, this.componentName, this.parentName);
        });
        // Subscription to geometry global changes caused by JSatOrb imports
        if (this.formTemplate.componentId === 'geometry') {
            this.globalSubscription.unsubscribe();
            this.globalSubscription = this.formService.globalForm.valueChanges.subscribe((newValue) => {
                if (this.componentName === 'geometry' && this.formTemplate.componentId === 'geometry') {
                    // Here we pass value from global to local, so we do not want to emit a valueChange event
                    // This way we avoid an infinite event loop
                    this.localForm.patchValue(newValue.geometry, { emitEvent: false });
                }
            });
        }
    }
    unsubscribeToChanges() {
        this.localSubscription.unsubscribe();
        this.globalSubscription.unsubscribe();
    }
    geometrySubscribe() {
        var _a, _b;
        /**
         * Handles the link between slant range and altitude/elevation
         * This function is a bit specific but could be generalized when used for other fields.
         * Only call this function when used with geometry templates.
         */
        if (this.formTemplate.componentId !== 'geometry') {
            return; // If our component isn't geometry related, pass the following subscriptions
        }
        (_a = this.localForm.get('altitude')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((value) => {
            var _a, _b;
            // Altitude edited => calculate SR
            const elevation = (_a = this.localForm.get('elevation')) === null || _a === void 0 ? void 0 : _a.value;
            // Convert to radians if required
            elevation.value = elevation.unit === '°' ? elevation.value : elevation.value * (180 / Math.PI);
            // Convert altitue to km
            const altitude = HelperFunctions.convertDistance(parseFloat(value.value), value.unit, 'km');
            (_b = this.localForm.get('slantRange')) === null || _b === void 0 ? void 0 : _b.setValue({
                value: HelperFunctions.slantRangeFromAltElev(altitude, parseFloat(elevation.value)).toFixed(1),
                unit: 'km',
            });
        });
        (_b = this.localForm.get('elevation')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((value) => {
            var _a, _b;
            // elevation changed => calculate SR again
            const altitude = (_a = this.localForm.get('altitude')) === null || _a === void 0 ? void 0 : _a.value;
            // Convert to radians if required
            altitude.value = HelperFunctions.convertDistance(parseFloat(altitude.value), altitude.unit, 'km');
            // Convert altitue to km
            const elev = value.unit === '°' ? value.value : value.value * (180 / Math.PI);
            (_b = this.localForm.get('slantRange')) === null || _b === void 0 ? void 0 : _b.setValue({
                value: HelperFunctions.slantRangeFromAltElev(altitude.value, parseFloat(elev)).toFixed(1),
                unit: 'km',
            });
        });
    }
    changeComponent(componentTemplate) {
        /**
         * Handles the reuse of the form components by allowing to change inner template
         * @Input <Form>componentTemplate, the new template to use
         */
        var _a, _b;
        // Setting up new Template involves a lot a casting and checking if templates fields aren't null or undefined
        this.parentName = (_a = componentTemplate.parentComponent) !== null && _a !== void 0 ? _a : '';
        this.componentName = componentTemplate.componentId;
        this.hasImage = !!componentTemplate.image; // Casts our componentTemplate.image to a boolean
        this.displayedImage = (_b = componentTemplate.image) !== null && _b !== void 0 ? _b : '';
        let previousForm;
        if (!this.parentName) {
            previousForm = this.formService.globalForm.value[this.componentName];
        }
        else {
            previousForm = this.formService.globalForm.value[this.parentName][this.componentName];
        }
        // We use default values here but since they have already been used to generate globalForm, we shouldn't use them once again
        // Here we want to regenerate the localFrom from archived form
        const newForm = this.formService.createFormGroup(componentTemplate);
        if (previousForm) {
            // Previous from already exists, we overwrite the localForm
            newForm.setValue(previousForm);
            this.localForm = newForm;
            // Now we want to add this localForm to the globalForm
            if (componentTemplate.parentComponent) {
                // Component is stored in a group
                const group = this.formService.globalForm.get(this.parentName);
                if (group) {
                    // The group already existed
                    group.setControl(this.componentName, this.localForm);
                    this.formService.globalForm.setControl(this.parentName, group);
                }
                else {
                    this.formService.addForm(this.localForm, this.componentName, this.parentName);
                }
            }
            else {
                // Component is not stored in a group (cf geometry)
                this.formService.globalForm.setControl(this.componentName, this.localForm);
            }
        }
        else {
            // This form doesn't exist in the archives
            // We will use the values from globalForm
            this.localForm = newForm;
            this.formService.addForm(this.localForm, this.componentName, this.parentName);
        }
    }
    getWarningMessage(control) {
        /**
         * Returns the warning message if there is one
         */
        if (control && control.warnings)
            return control.warnings;
        return '';
    }
    getErrorMessage(control) {
        var _a, _b;
        /**
         * This function gathers result from validators.
         * The custom validator are defined in custom-fields.ts
         */
        let error;
        const warning = '';
        // Internal error, the control does not exist
        if (control === null) {
            error = 'Unknown error (-1)';
            return { error, warning };
        }
        const { errors } = control;
        if (errors === null) {
            if ((_b = (_a = control.get('value')) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.pattern) {
                // Here we intercept the case where regexp is wrong.
                error = 'Please choose a numerical value';
            }
            else {
                // No error
            }
        }
        else {
            // array destructuring (same as error = errors.error;)
            ({ error } = errors);
        }
        return { error, warning };
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(i0.ɵɵdirectiveInject(i1.FormService), i0.ɵɵdirectiveInject(i2.LoggerService)); };
FormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormComponent, selectors: [["lib-form"]], inputs: { formTemplate: "formTemplate", groupId: "groupId", isSubform: "isSubform", isStandalone: "isStandalone" }, outputs: { formStatus: "formStatus" }, decls: 5, vars: 3, consts: [[1, "columns", "is-multiline"], [1, "column"], ["role", "form", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["class", "column", "style", "text-align:center;", 4, "ngIf"], [1, "field", "basic-input"], [1, "label"], ["style", "color: lightgray; dislay: inline-block; float:right", "class", "has-tooltip-arrow has-tooltip-right has-tooltip-multiline", "data-tooltip", "Losses are algebraic. They should be written as negative number (e.g. -3.0dB)", 4, "ngIf"], [1, "field", "has-addons", 3, "formGroupName"], [1, "control", "is-expanded"], ["type", "text", "formControlName", "value", 1, "input", 3, "ngClass"], ["class", "select", 4, "ngIf"], ["class", "button is-static", 4, "ngIf"], ["class", "help is-danger m-0", 4, "ngIf"], ["class", "help is-warning m-0", 4, "ngIf"], ["data-tooltip", "Losses are algebraic. They should be written as negative number (e.g. -3.0dB)", 1, "has-tooltip-arrow", "has-tooltip-right", "has-tooltip-multiline", 2, "color", "lightgray", "dislay", "inline-block", "float", "right"], [3, "icon"], [1, "select"], ["formControlName", "unit", 3, "value"], [1, "button", "is-static"], [1, "help", "is-danger", "m-0"], [1, "help", "is-warning", "m-0"], [1, "column", 2, "text-align", "center"], [2, "max-width", "180px", 3, "src"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "form", 2);
        i0.ɵɵtemplate(3, FormComponent_div_3_Template, 14, 10, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FormComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.localForm);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.formTemplate.params);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasImage);
    } }, directives: [i3.ɵangular_packages_forms_forms_ba, i3.NgControlStatusGroup, i3.FormGroupDirective, i4.NgForOf, i4.NgIf, i3.FormGroupName, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i4.NgClass, i5.FaIconComponent, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_z], styles: ["label[_ngcontent-%COMP%]{margin:0;margin-bottom:0!important;padding:6px}.input-wrapper[_ngcontent-%COMP%]{display:inline-flex}.form-control[_ngcontent-%COMP%]{max-width:90px;min-width:90px}.spacing[_ngcontent-%COMP%]{margin:24px;padding:0 24px}.field[_ngcontent-%COMP%]{max-width:360px}.field[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{margin:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss'],
            }]
    }], function () { return [{ type: i1.FormService }, { type: i2.LoggerService }]; }, { formTemplate: [{
            type: Input
        }], groupId: [{
            type: Input
        }], isSubform: [{
            type: Input
        }], isStandalone: [{
            type: Input
        }], formStatus: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2Zvcm0vY29tcG9uZW50L2Zvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9mb3JtL2NvbXBvbmVudC9mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFnQyxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQWdCLFNBQVMsRUFBZSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7OztJQ0d0RSxnQ0FFK0Y7SUFFN0YsOEJBQTRDO0lBQzlDLGlCQUFPOzs7SUFESSxlQUF3QjtJQUF4Qiw2Q0FBd0I7OztJQVUvQiw4QkFBa0Q7SUFDaEQsWUFDRjtJQUFBLGlCQUFTOzs7SUFEUCxlQUNGO0lBREUsd0NBQ0Y7OztJQUpKLGdDQUE2RDtJQUMzRCxrQ0FBcUU7SUFDbkUsa0ZBRVM7SUFDWCxpQkFBUztJQUNYLGlCQUFPOzs7O0lBTDBCLGVBQXFDO0lBQXJDLG9FQUFxQztJQUN6QyxlQUF1QjtJQUF2Qix3REFBdUI7OztJQUtwRCw2QkFBcUU7SUFDbkUsWUFDRjtJQUFBLGlCQUFJOzs7O0lBREYsZUFDRjtJQURFLGtFQUNGOzs7SUFFRiw2QkFBMkU7SUFDekUsWUFDRjtJQUFBLGlCQUFJOzs7O0lBREYsZUFDRjtJ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QUNwRCxLQUFLLEdBQUcsaUNBQWlDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsV0FBVzthQUNaO1NBQ0Y7YUFBTTtZQUNMLHNEQUFzRDtZQUN0RCxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDdEI7UUFFRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7OzBFQTFOVSxhQUFhO2tEQUFiLGFBQWE7UUNmMUIsOEJBQWtDO1FBRWhDLDhCQUFvQjtRQUNsQiwrQkFBMEM7UUFDeEMsZ0VBcUNNO1FBQ1IsaUJBQU87UUFDVCxpQkFBTTtRQUNOLDhEQUVNO1FBQ1IsaUJBQU07O1FBNUNnQixlQUF1QjtRQUF2Qix5Q0FBdUI7UUFDaEIsZUFBc0I7UUFBdEIsaURBQXNCO1FBd0NELGVBQWM7UUFBZCxtQ0FBYzs7dUZEN0JuRCxhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7MEZBR0ssWUFBWTtrQkFEZixLQUFLO1lBdUJHLE9BQU87a0JBQWYsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBRUksVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyRnVuY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2hlbHBlci1mdW5jdGlvbnMnO1xuaW1wb3J0IHsgQW50ZW5uYUZpZWxkLCBFbXB0eUZvcm0sIEZpZWxkLCBGb3JtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9Gb3JtLm1vZGVsJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1Db250cm9sV2FybiB9IGZyb20gJy4uLy4uL3NoYXJlZC9jdXN0b20tZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc2V0IGZvcm1UZW1wbGF0ZSh2YWx1ZTogRm9ybSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fZm9ybVRlbXBsYXRlID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZUNvbXBvbmVudCh0aGlzLl9mb3JtVGVtcGxhdGUpOyAvLyBTdXBwbGllZCBieSBkYXRhaW5wdXQgdGVtcGxhdGVcbiAgICAgIHRoaXMudmFsaWRpdHkgPSB0aGlzLmxvY2FsRm9ybS52YWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCc7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlVG9DaGFuZ2VzKCk7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvQ2hhbmdlcygpO1xuICAgICAgaWYgKHRoaXMuZm9ybVRlbXBsYXRlLmNvbXBvbmVudElkID09PSAnZ2VvbWV0cnknKSB7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gbGluayBzbGFudCByYW5nZSB0byBhbHRpdHVkZSAmIGVsZXZhdGlvblxuICAgICAgICB0aGlzLmdlb21ldHJ5U3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICAvLyBDaGVja2luZyB2YWxpZGl0eVxuICAgICAgdGhpcy5mb3JtU3RhdHVzLmVtaXQoeyBpZDogdGhpcy5mb3JtVGVtcGxhdGUuY29tcG9uZW50SWQsIHZhbGlkaXR5OiB0aGlzLnZhbGlkaXR5IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnR290IGFuIHVuZGVmaW5lZCBmb3JtVGVtcGxhdGUnKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGZvcm1UZW1wbGF0ZSgpOiBGb3JtIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVRlbXBsYXRlO1xuICB9XG4gIHByaXZhdGUgX2Zvcm1UZW1wbGF0ZSA9IG5ldyBFbXB0eUZvcm0oKTtcblxuICBASW5wdXQoKSBncm91cElkPzogc3RyaW5nO1xuICBASW5wdXQoKSBpc1N1YmZvcm0/OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgaXNTdGFuZGFsb25lPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGZvcm1TdGF0dXM6IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmc7IHZhbGlkaXR5OiAndmFsaWQnIHwgJ2ludmFsaWQnIHwgJ25vbmUnIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBGb3Jtc1RlbXBsYXRlOiBhbnk7XG4gIC8vIFdlIGNyZWF0ZSBhIHN1YmZvcm0gY29ycmVzcG9uZGluZyB0byBvbmUgb2YgdGhlIGNvbXBvbmVudCBpbnZvbHZlZCBpbiB0aGUgbGlua1xuICBwdWJsaWMgbG9jYWxGb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcblxuICBmYUludGVycm9nYXRpb24gPSBmYVF1ZXN0aW9uQ2lyY2xlO1xuICBjb21wb25lbnROYW1lOiBzdHJpbmcgPSAnJztcbiAgcGFyZW50TmFtZTogc3RyaW5nID0gJyc7XG4gIGRpc3BsYXllZEltYWdlOiBzdHJpbmcgPSAnJztcbiAgaGFzSW1hZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdmFsaWRpdHk6ICd2YWxpZCcgfCAnaW52YWxpZCcgfCAnbm9uZScgPSAnbm9uZSc7XG5cbiAgcHJpdmF0ZSBsb2NhbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIGdsb2JhbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwdWJsaWMgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgY29tcG9uZW50IGNvbnN0cnVjdGVkLCBpbml0aWFsaXplIGZvcm1TZXJ2aWNlXG4gICAgaWYgKCF0aGlzLmZvcm1TZXJ2aWNlLmlzSW5pdGlhbGl6ZWQpIHRoaXMuZm9ybVNlcnZpY2UuaW5pdEZvcm1zKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0NoYW5nZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc0ZpZWxkKGZpZWxkOiBGaWVsZCB8IEFudGVubmFGaWVsZCk6IEZpZWxkIHtcbiAgICAvKipcbiAgICAgKiBRdWljayBoZWxwZXIgZnVuY3Rpb24gZm9yIHR5cGVzIGNvbnZlcnNpb24gaW4gdGhlIHRlbXBsYXRlXG4gICAgICovXG4gICAgcmV0dXJuIGZpZWxkIGFzIEZpZWxkO1xuICB9XG4gIHB1YmxpYyBhc0Zvcm1XYXJuKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwpOiBGb3JtQ29udHJvbFdhcm4ge1xuICAgIC8qKlxuICAgICAqIENhc3RzIGFuIEFic3RyYWN0Q29udHJvbCBpbnRvIGEgRm9ybUNvbnRyb2xXYXJuXG4gICAgICogKFRoaXMgaXMgdXNlZnVsIGZvciBkb2luZyB0eXBlIGNhc3RpbmcgaW5zaWRlIHRoZSB0ZW1wbGF0ZSlcbiAgICAgKi9cbiAgICByZXR1cm4gY29udHJvbCBhcyBGb3JtQ29udHJvbFdhcm47XG4gIH1cblxuICBzdWJzY3JpYmVUb0NoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhbFN1YnNjcmlwdGlvbiA9IHRoaXMubG9jYWxGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gSGFuZGxlIHNhdmVkIHN0YXRlXG4gICAgICB0aGlzLmZvcm1TZXJ2aWNlLmlzQ3VycmVudEZvcm1TYXZlZCA9IGZhbHNlO1xuICAgICAgLy8gSGFuZGxlIHZhbGlkaXR5XG4gICAgICBjb25zdCBjdXJyZW50Rm9ybVZhbGlkaXR5OiBib29sZWFuID0gdGhpcy5sb2NhbEZvcm0udmFsaWQ7XG4gICAgICBpZiAoIWN1cnJlbnRGb3JtVmFsaWRpdHkgJiYgdGhpcy52YWxpZGl0eSAhPT0gJ2ludmFsaWQnKSB7XG4gICAgICAgIHRoaXMudmFsaWRpdHkgPSAnaW52YWxpZCc7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RlcCk7XG4gICAgICAgIHRoaXMuZm9ybVN0YXR1cy5lbWl0KHsgaWQ6IHRoaXMuZm9ybVRlbXBsYXRlLmNvbXBvbmVudElkLCB2YWxpZGl0eTogdGhpcy52YWxpZGl0eSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZvcm1WYWxpZGl0eSAmJiB0aGlzLnZhbGlkaXR5ICE9PSAndmFsaWQnKSB7XG4gICAgICAgIHRoaXMudmFsaWRpdHkgPSAndmFsaWQnO1xuICAgICAgICB0aGlzLmZvcm1TdGF0dXMuZW1pdCh7IGlkOiB0aGlzLmZvcm1UZW1wbGF0ZS5jb21wb25lbnRJZCwgdmFsaWRpdHk6IHRoaXMudmFsaWRpdHkgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmFsaWRpdHkgPT09ICdub25lJykge1xuICAgICAgICB0aGlzLnZhbGlkaXR5ID0gY3VycmVudEZvcm1WYWxpZGl0eSA/ICd2YWxpZCcgOiAnaW52YWxpZCc7XG4gICAgICAgIHRoaXMuZm9ybVN0YXR1cy5lbWl0KHsgaWQ6IHRoaXMuZm9ybVRlbXBsYXRlLmNvbXBvbmVudElkLCB2YWxpZGl0eTogdGhpcy52YWxpZGl0eSB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9ybVNlcnZpY2UuYWRkRm9ybSh0aGlzLmxvY2FsRm9ybSwgdGhpcy5jb21wb25lbnROYW1lLCB0aGlzLnBhcmVudE5hbWUpO1xuICAgIH0pO1xuICAgIC8vIFN1YnNjcmlwdGlvbiB0byBnZW9tZXRyeSBnbG9iYWwgY2hhbmdlcyBjYXVzZWQgYnkgSlNhdE9yYiBpbXBvcnRzXG4gICAgaWYgKHRoaXMuZm9ybVRlbXBsYXRlLmNvbXBvbmVudElkID09PSAnZ2VvbWV0cnknKSB7XG4gICAgICB0aGlzLmdsb2JhbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5nbG9iYWxTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm1TZXJ2aWNlLmdsb2JhbEZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWU6IGFueSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnROYW1lID09PSAnZ2VvbWV0cnknICYmIHRoaXMuZm9ybVRlbXBsYXRlLmNvbXBvbmVudElkID09PSAnZ2VvbWV0cnknKSB7XG4gICAgICAgICAgLy8gSGVyZSB3ZSBwYXNzIHZhbHVlIGZyb20gZ2xvYmFsIHRvIGxvY2FsLCBzbyB3ZSBkbyBub3Qgd2FudCB0byBlbWl0IGEgdmFsdWVDaGFuZ2UgZXZlbnRcbiAgICAgICAgICAvLyBUaGlzIHdheSB3ZSBhdm9pZCBhbiBpbmZpbml0ZSBldmVudCBsb29wXG4gICAgICAgICAgdGhpcy5sb2NhbEZvcm0ucGF0Y2hWYWx1ZShuZXdWYWx1ZS5nZW9tZXRyeSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdW5zdWJzY3JpYmVUb0NoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZ2xvYmFsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbiAgZ2VvbWV0cnlTdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgbGluayBiZXR3ZWVuIHNsYW50IHJhbmdlIGFuZCBhbHRpdHVkZS9lbGV2YXRpb25cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGEgYml0IHNwZWNpZmljIGJ1dCBjb3VsZCBiZSBnZW5lcmFsaXplZCB3aGVuIHVzZWQgZm9yIG90aGVyIGZpZWxkcy5cbiAgICAgKiBPbmx5IGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHVzZWQgd2l0aCBnZW9tZXRyeSB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgaWYgKHRoaXMuZm9ybVRlbXBsYXRlLmNvbXBvbmVudElkICE9PSAnZ2VvbWV0cnknKSB7XG4gICAgICByZXR1cm47IC8vIElmIG91ciBjb21wb25lbnQgaXNuJ3QgZ2VvbWV0cnkgcmVsYXRlZCwgcGFzcyB0aGUgZm9sbG93aW5nIHN1YnNjcmlwdGlvbnNcbiAgICB9XG5cbiAgICB0aGlzLmxvY2FsRm9ybS5nZXQoJ2FsdGl0dWRlJyk/LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAvLyBBbHRpdHVkZSBlZGl0ZWQgPT4gY2FsY3VsYXRlIFNSXG4gICAgICBjb25zdCBlbGV2YXRpb24gPSB0aGlzLmxvY2FsRm9ybS5nZXQoJ2VsZXZhdGlvbicpPy52YWx1ZTtcbiAgICAgIC8vIENvbnZlcnQgdG8gcmFkaWFucyBpZiByZXF1aXJlZFxuICAgICAgZWxldmF0aW9uLnZhbHVlID0gZWxldmF0aW9uLnVuaXQgPT09ICfCsCcgPyBlbGV2YXRpb24udmFsdWUgOiBlbGV2YXRpb24udmFsdWUgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAvLyBDb252ZXJ0IGFsdGl0dWUgdG8ga21cbiAgICAgIGNvbnN0IGFsdGl0dWRlID0gSGVscGVyRnVuY3Rpb25zLmNvbnZlcnREaXN0YW5jZShwYXJzZUZsb2F0KHZhbHVlLnZhbHVlKSwgdmFsdWUudW5pdCwgJ2ttJyk7XG4gICAgICB0aGlzLmxvY2FsRm9ybS5nZXQoJ3NsYW50UmFuZ2UnKT8uc2V0VmFsdWUoe1xuICAgICAgICB2YWx1ZTogSGVscGVyRnVuY3Rpb25zLnNsYW50UmFuZ2VGcm9tQWx0RWxldihhbHRpdHVkZSwgcGFyc2VGbG9hdChlbGV2YXRpb24udmFsdWUpKS50b0ZpeGVkKDEpLFxuICAgICAgICB1bml0OiAna20nLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbEZvcm0uZ2V0KCdlbGV2YXRpb24nKT8udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIC8vIGVsZXZhdGlvbiBjaGFuZ2VkID0+IGNhbGN1bGF0ZSBTUiBhZ2FpblxuICAgICAgY29uc3QgYWx0aXR1ZGUgPSB0aGlzLmxvY2FsRm9ybS5nZXQoJ2FsdGl0dWRlJyk/LnZhbHVlO1xuICAgICAgLy8gQ29udmVydCB0byByYWRpYW5zIGlmIHJlcXVpcmVkXG4gICAgICBhbHRpdHVkZS52YWx1ZSA9IEhlbHBlckZ1bmN0aW9ucy5jb252ZXJ0RGlzdGFuY2UocGFyc2VGbG9hdChhbHRpdHVkZS52YWx1ZSksIGFsdGl0dWRlLnVuaXQsICdrbScpO1xuICAgICAgLy8gQ29udmVydCBhbHRpdHVlIHRvIGttXG4gICAgICBjb25zdCBlbGV2ID0gdmFsdWUudW5pdCA9PT0gJ8KwJyA/IHZhbHVlLnZhbHVlIDogdmFsdWUudmFsdWUgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICB0aGlzLmxvY2FsRm9ybS5nZXQoJ3NsYW50UmFuZ2UnKT8uc2V0VmFsdWUoe1xuICAgICAgICB2YWx1ZTogSGVscGVyRnVuY3Rpb25zLnNsYW50UmFuZ2VGcm9tQWx0RWxldihhbHRpdHVkZS52YWx1ZSwgcGFyc2VGbG9hdChlbGV2KSkudG9GaXhlZCgxKSxcbiAgICAgICAgdW5pdDogJ2ttJyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlQ29tcG9uZW50KGNvbXBvbmVudFRlbXBsYXRlOiBGb3JtKTogdm9pZCB7XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgcmV1c2Ugb2YgdGhlIGZvcm0gY29tcG9uZW50cyBieSBhbGxvd2luZyB0byBjaGFuZ2UgaW5uZXIgdGVtcGxhdGVcbiAgICAgKiBASW5wdXQgPEZvcm0+Y29tcG9uZW50VGVtcGxhdGUsIHRoZSBuZXcgdGVtcGxhdGUgdG8gdXNlXG4gICAgICovXG5cbiAgICAvLyBTZXR0aW5nIHVwIG5ldyBUZW1wbGF0ZSBpbnZvbHZlcyBhIGxvdCBhIGNhc3RpbmcgYW5kIGNoZWNraW5nIGlmIHRlbXBsYXRlcyBmaWVsZHMgYXJlbid0IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgdGhpcy5wYXJlbnROYW1lID0gY29tcG9uZW50VGVtcGxhdGUucGFyZW50Q29tcG9uZW50ID8/ICcnO1xuICAgIHRoaXMuY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudFRlbXBsYXRlLmNvbXBvbmVudElkO1xuICAgIHRoaXMuaGFzSW1hZ2UgPSAhIWNvbXBvbmVudFRlbXBsYXRlLmltYWdlOyAvLyBDYXN0cyBvdXIgY29tcG9uZW50VGVtcGxhdGUuaW1hZ2UgdG8gYSBib29sZWFuXG4gICAgdGhpcy5kaXNwbGF5ZWRJbWFnZSA9IGNvbXBvbmVudFRlbXBsYXRlLmltYWdlID8/ICcnO1xuXG4gICAgbGV0IHByZXZpb3VzRm9ybTtcbiAgICBpZiAoIXRoaXMucGFyZW50TmFtZSkge1xuICAgICAgcHJldmlvdXNGb3JtID0gdGhpcy5mb3JtU2VydmljZS5nbG9iYWxGb3JtLnZhbHVlW3RoaXMuY29tcG9uZW50TmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzRm9ybSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2xvYmFsRm9ybS52YWx1ZVt0aGlzLnBhcmVudE5hbWVdW3RoaXMuY29tcG9uZW50TmFtZV07XG4gICAgfVxuXG4gICAgLy8gV2UgdXNlIGRlZmF1bHQgdmFsdWVzIGhlcmUgYnV0IHNpbmNlIHRoZXkgaGF2ZSBhbHJlYWR5IGJlZW4gdXNlZCB0byBnZW5lcmF0ZSBnbG9iYWxGb3JtLCB3ZSBzaG91bGRuJ3QgdXNlIHRoZW0gb25jZSBhZ2FpblxuICAgIC8vIEhlcmUgd2Ugd2FudCB0byByZWdlbmVyYXRlIHRoZSBsb2NhbEZyb20gZnJvbSBhcmNoaXZlZCBmb3JtXG4gICAgY29uc3QgbmV3Rm9ybSA9IHRoaXMuZm9ybVNlcnZpY2UuY3JlYXRlRm9ybUdyb3VwKGNvbXBvbmVudFRlbXBsYXRlKTtcbiAgICBpZiAocHJldmlvdXNGb3JtKSB7XG4gICAgICAvLyBQcmV2aW91cyBmcm9tIGFscmVhZHkgZXhpc3RzLCB3ZSBvdmVyd3JpdGUgdGhlIGxvY2FsRm9ybVxuICAgICAgbmV3Rm9ybS5zZXRWYWx1ZShwcmV2aW91c0Zvcm0pO1xuICAgICAgdGhpcy5sb2NhbEZvcm0gPSBuZXdGb3JtO1xuXG4gICAgICAvLyBOb3cgd2Ugd2FudCB0byBhZGQgdGhpcyBsb2NhbEZvcm0gdG8gdGhlIGdsb2JhbEZvcm1cbiAgICAgIGlmIChjb21wb25lbnRUZW1wbGF0ZS5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgLy8gQ29tcG9uZW50IGlzIHN0b3JlZCBpbiBhIGdyb3VwXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5mb3JtU2VydmljZS5nbG9iYWxGb3JtLmdldCh0aGlzLnBhcmVudE5hbWUpIGFzIEZvcm1Hcm91cDtcbiAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgLy8gVGhlIGdyb3VwIGFscmVhZHkgZXhpc3RlZFxuICAgICAgICAgIGdyb3VwLnNldENvbnRyb2wodGhpcy5jb21wb25lbnROYW1lLCB0aGlzLmxvY2FsRm9ybSk7XG4gICAgICAgICAgdGhpcy5mb3JtU2VydmljZS5nbG9iYWxGb3JtLnNldENvbnRyb2wodGhpcy5wYXJlbnROYW1lLCBncm91cCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtU2VydmljZS5hZGRGb3JtKHRoaXMubG9jYWxGb3JtLCB0aGlzLmNvbXBvbmVudE5hbWUsIHRoaXMucGFyZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbXBvbmVudCBpcyBub3Qgc3RvcmVkIGluIGEgZ3JvdXAgKGNmIGdlb21ldHJ5KVxuICAgICAgICB0aGlzLmZvcm1TZXJ2aWNlLmdsb2JhbEZvcm0uc2V0Q29udHJvbCh0aGlzLmNvbXBvbmVudE5hbWUsIHRoaXMubG9jYWxGb3JtKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBmb3JtIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFyY2hpdmVzXG4gICAgICAvLyBXZSB3aWxsIHVzZSB0aGUgdmFsdWVzIGZyb20gZ2xvYmFsRm9ybVxuICAgICAgdGhpcy5sb2NhbEZvcm0gPSBuZXdGb3JtO1xuICAgICAgdGhpcy5mb3JtU2VydmljZS5hZGRGb3JtKHRoaXMubG9jYWxGb3JtLCB0aGlzLmNvbXBvbmVudE5hbWUsIHRoaXMucGFyZW50TmFtZSk7XG4gICAgfVxuICB9XG4gIGdldFdhcm5pbmdNZXNzYWdlKGNvbnRyb2w6IEZvcm1Db250cm9sV2FybiB8IG51bGwpOiBzdHJpbmcge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdhcm5pbmcgbWVzc2FnZSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgKi9cbiAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLndhcm5pbmdzKSByZXR1cm4gY29udHJvbC53YXJuaW5ncztcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgZ2V0RXJyb3JNZXNzYWdlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwpOiB7IGVycm9yOiBzdHJpbmc7IHdhcm5pbmc6IHN0cmluZyB9IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGdhdGhlcnMgcmVzdWx0IGZyb20gdmFsaWRhdG9ycy5cbiAgICAgKiBUaGUgY3VzdG9tIHZhbGlkYXRvciBhcmUgZGVmaW5lZCBpbiBjdXN0b20tZmllbGRzLnRzXG4gICAgICovXG4gICAgbGV0IGVycm9yO1xuICAgIGNvbnN0IHdhcm5pbmcgPSAnJztcbiAgICAvLyBJbnRlcm5hbCBlcnJvciwgdGhlIGNvbnRyb2wgZG9lcyBub3QgZXhpc3RcbiAgICBpZiAoY29udHJvbCA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IgPSAnVW5rbm93biBlcnJvciAoLTEpJztcbiAgICAgIHJldHVybiB7IGVycm9yLCB3YXJuaW5nIH07XG4gICAgfVxuICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBjb250cm9sO1xuXG4gICAgaWYgKGVycm9ycyA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNvbnRyb2wuZ2V0KCd2YWx1ZScpPy5lcnJvcnM/LnBhdHRlcm4pIHtcbiAgICAgICAgLy8gSGVyZSB3ZSBpbnRlcmNlcHQgdGhlIGNhc2Ugd2hlcmUgcmVnZXhwIGlzIHdyb25nLlxuICAgICAgICBlcnJvciA9ICdQbGVhc2UgY2hvb3NlIGEgbnVtZXJpY2FsIHZhbHVlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vIGVycm9yXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFycmF5IGRlc3RydWN0dXJpbmcgKHNhbWUgYXMgZXJyb3IgPSBlcnJvcnMuZXJyb3I7KVxuICAgICAgKHsgZXJyb3IgfSA9IGVycm9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXJyb3IsIHdhcm5pbmcgfTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gIDwhLS0gc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW46MTJweDtcIj4gLS0+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICA8Zm9ybSByb2xlPVwiZm9ybVwiIFtmb3JtR3JvdXBdPVwibG9jYWxGb3JtXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmb3JtVGVtcGxhdGUucGFyYW1zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBiYXNpYy1pbnB1dFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7YXNGaWVsZChmaWVsZCkuZGVzY319OlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGxpZ2h0Z3JheTsgZGlzbGF5OiBpbmxpbmUtYmxvY2s7IGZsb2F0OnJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGFzLXRvb2x0aXAtYXJyb3cgaGFzLXRvb2x0aXAtcmlnaHQgaGFzLXRvb2x0aXAtbXVsdGlsaW5lXCIgKm5nSWY9XCJmaWVsZC50eXBlID09PSAnbG9zcydcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiTG9zc2VzIGFyZSBhbGdlYnJhaWMuIFRoZXkgc2hvdWxkIGJlIHdyaXR0ZW4gYXMgbmVnYXRpdmUgbnVtYmVyIChlLmcuIC0zLjBkQilcIj5cblxuICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFJbnRlcnJvZ2F0aW9uXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGhhcy1hZGRvbnNcIiBmb3JtR3JvdXBOYW1lPVwie3tmaWVsZC5pZH19XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaXMtZXhwYW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaXMtZGFuZ2VyJzogIXRoaXMubG9jYWxGb3JtLmdldChmaWVsZC5pZCk/LnZhbGlkfVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0XCIgKm5nSWY9XCJhc0ZpZWxkKGZpZWxkKS51bml0cy5sZW5ndGggPiAxXCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInVuaXRcIiB2YWx1ZT1cInt7IGFzRmllbGQoZmllbGQpLnVuaXRzWzBdIH19XCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHVuaXQgb2YgYXNGaWVsZChmaWVsZCkudW5pdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyB1bml0IH19XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGlzLXN0YXRpY1wiICpuZ0lmPVwiYXNGaWVsZChmaWVsZCkudW5pdHMubGVuZ3RoID09IDFcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGFzRmllbGQoZmllbGQpLnVuaXRzWzBdIH19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwIGlzLWRhbmdlciBtLTBcIiAqbmdJZj1cIiF0aGlzLmxvY2FsRm9ybS5nZXQoZmllbGQuaWQpPy52YWxpZFwiPlxuICAgICAgICAgICAgICAgIHt7Z2V0RXJyb3JNZXNzYWdlKHRoaXMubG9jYWxGb3JtLmdldChmaWVsZC5pZCkpLmVycm9yfX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAgaXMtd2FybmluZyBtLTBcIiAqbmdJZj1cInRoaXMubG9jYWxGb3JtLmdldChmaWVsZC5pZCk/LnZhbGlkXCI+XG4gICAgICAgICAgICAgICAge3tnZXRXYXJuaW5nTWVzc2FnZShhc0Zvcm1XYXJuKHRoaXMubG9jYWxGb3JtLmdldChmaWVsZC5pZCkpKX19XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5cIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiICpuZ0lmPVwiaGFzSW1hZ2VcIj5cbiAgICA8aW1nIHN0eWxlPVwibWF4LXdpZHRoOjE4MHB4O1wiIHNyYz1cInt7dGhpcy5kaXNwbGF5ZWRJbWFnZX19XCIgLz5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=