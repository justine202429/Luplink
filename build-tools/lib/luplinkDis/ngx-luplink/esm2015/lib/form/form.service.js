/* eslint-disable max-classes-per-file */
import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
// import { LoggerService } from '../services/logger.service';
import { FormControlWarn } from '../shared/custom-field';
import { FORM_TEMPLATE_TOKEN } from '../shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../shared/custom-field";
import * as i3 from "../shared/logger/logger.service";
export class FormService {
    constructor(template, fb, customValidators, logger) {
        this.template = template;
        this.fb = fb;
        this.customValidators = customValidators;
        this.logger = logger;
        /**
         * This service keeps tracks of everything form-related.
         * It listens for forms changes and returns the form Data to the computeLinkBudget service
         */
        // This contains the concatenation of all subforms
        this.globalForm = new FormGroup({}); // A form group can easily be observed
        this.erroneousSection = new BehaviorSubject('');
        this.title = 'Untitled_Link_Budget';
        this.isInterlink = false;
        this.isCurrentFormSaved = true;
        // Has forms already been initialized ?
        this._isInitialized = false;
    }
    get isInitialized() {
        return this._isInitialized;
    }
    set isInitialized(value) {
        this._isInitialized = value;
    }
    addForm(formGroup, name, parent = '') {
        /**
         * This allow adding a form to our globalform. This function is usually called by a form component
         */
        if (parent && parent !== '') {
            const group = this.globalForm.get(parent);
            if (group) {
                group.setControl(name, formGroup);
                this.globalForm.setControl(parent, group);
            }
            else {
                this.globalForm.setControl(parent, this.fb.group({ [name]: formGroup }));
            }
        }
        else if (name !== '') {
            this.globalForm.setControl(name, formGroup);
        }
    }
    getComponentValues(componentId, link = '', parentId) {
        var _a, _b, _c;
        /**
         * Returns the value of a component by its id and its parentId
         */
        if (!parentId)
            return this.getFormData()[componentId];
        return (_c = (_b = (_a = this.getFormData()) === null || _a === void 0 ? void 0 : _a[link]) === null || _b === void 0 ? void 0 : _b[parentId]) === null || _c === void 0 ? void 0 : _c[componentId];
    }
    patchForm(parentName, groupName, formGroup) {
        /**
         *  A wrapper for the method from FormGroup. This allows us to have a globalForm with more depth.
         */
        const group = this.globalForm.get(parentName);
        if (group !== null) {
            group.addControl(groupName, formGroup);
            return;
        }
        this.logger.warn(`${parentName} does not exist! Cannot attach antenna to it.`);
    }
    importForm(results) {
        /**
         * This function is called when importing a .json file.
         * It updates the fields values.
         */
        // #TODO: check file sanity (eg. sanitization)
        // #TODO: Test
        // #TODO We now need to make this more robust
        // Changing global form
        console.log('import form');
        console.log(results.data);
        this.globalForm.patchValue(results.data, { emitEvent: false });
        this.title = results.metadata.title;
    }
    getFormData$() {
        return this.globalForm.valueChanges;
    }
    getFormData() {
        return this.globalForm.value; // The form updated at all times is used for the calculation
    }
    initForms() {
        // This function automatically generates the form to be sent to API even if some components haven't yet been instantiated
        this.template.template.components.forEach((componentTemplate) => {
            if (componentTemplate.componentId !== '') {
                const fg = this.createFormGroup(componentTemplate);
                if (componentTemplate.parentComponent) {
                    this.addForm(fg, componentTemplate.componentId, componentTemplate.parentComponent);
                }
                else {
                    this.addForm(fg, componentTemplate.componentId);
                }
            }
        });
        this._isInitialized = true;
    }
    createFormGroup(componentTemplate) {
        /**
         * This function takes in a Form template and return a FormGroup of the corresponding component.
         * This makes the conversion between angular reactive forms and our custom JSON templates for transmission chain parts.
         */
        const group = {};
        componentTemplate.params.forEach((element) => {
            // The default value is 'undefined' if key not found in map
            // Here we create FormControls for both the input and its unit
            const inputControl = new FormControlWarn(element.default, {
                // FIXME: Formcontrolwarn
                validators: [Validators.pattern('^[+-]?[0-9]+([,][0-9]+)*([.][0-9]+)?$')],
                updateOn: 'change',
            }); // , [Validators.required, Validators.maxLength(6)]); //FIXME: For testing purposes
            // Updating on blur is less distracting, a good compromise
            const unitControl = element.units.length === 0
                ? new FormControl('', Validators.nullValidator)
                : new FormControl(element.units[0], Validators.required);
            // For units, we can assume they will be valid since the user is constrained in his choices
            group[element.id] = new FormGroup({
                // A group composed of both the field and its unit
                value: inputControl,
                unit: unitControl,
            }, [
                this.customValidators.fieldValidator,
                element.type === 'loss' ? this.customValidators.positiveLossWarningValidator : Validators.nullValidator,
            ]);
            if (element.alternative !== undefined) {
                const subGroup = this.createFormGroup(element.alternative);
                group[element.alternative.componentId] = subGroup;
            }
        });
        return this.fb.group(group);
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(i0.ɵɵinject(FORM_TEMPLATE_TOKEN), i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.CustomValidators), i0.ɵɵinject(i3.LoggerService)); };
FormService.ɵprov = i0.ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [FORM_TEMPLATE_TOKEN]
            }] }, { type: i1.FormBuilder }, { type: i2.CustomValidators }, { type: i3.LoggerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFlLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFvQixlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFPN0QsTUFBTSxPQUFPLFdBQVc7SUF1QnRCLFlBQ3VDLFFBQWEsRUFDMUMsRUFBZSxFQUNmLGdCQUFrQyxFQUNsQyxNQUFxQjtRQUhRLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDMUMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQXpCL0I7OztXQUdHO1FBQ0gsa0RBQWtEO1FBRTNDLGVBQVUsR0FBYyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztRQUNqRixxQkFBZ0IsR0FBNEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUsVUFBSyxHQUFXLHNCQUFzQixDQUFDO1FBQ3ZDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUUxQyx1Q0FBdUM7UUFDL0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFhckMsQ0FBQztJQVpKLElBQUksYUFBYTtRQUNmLE9B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QUUsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUMvQjtnQkFDRSxrREFBa0Q7Z0JBQ2xELEtBQUssRUFBRSxZQUFZO2dCQUNuQixJQUFJLEVBQUUsV0FBVzthQUNsQixFQUNEO2dCQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO2dCQUNwQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYTthQUN4RyxDQUNGLENBQUM7WUFFRixJQUFJLE9BQU8sQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O3NFQWxKVSxXQUFXLGNBd0JaLG1CQUFtQjttREF4QmxCLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07dUZBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQXlCSSxNQUFNO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycywgRm9ybUNvbnRyb2xXYXJuIH0gZnJvbSAnLi4vc2hhcmVkL2N1c3RvbS1maWVsZCc7XG5pbXBvcnQgeyBGT1JNX1RFTVBMQVRFX1RPS0VOIH0gZnJvbSAnLi4vc2hhcmVkL2RlcGVuZGVuY2llcyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvRm9ybS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG4gIHB1YmxpYyBGb3Jtc1RlbXBsYXRlOiBhbnk7XG4gIC8qKlxuICAgKiBUaGlzIHNlcnZpY2Uga2VlcHMgdHJhY2tzIG9mIGV2ZXJ5dGhpbmcgZm9ybS1yZWxhdGVkLlxuICAgKiBJdCBsaXN0ZW5zIGZvciBmb3JtcyBjaGFuZ2VzIGFuZCByZXR1cm5zIHRoZSBmb3JtIERhdGEgdG8gdGhlIGNvbXB1dGVMaW5rQnVkZ2V0IHNlcnZpY2VcbiAgICovXG4gIC8vIFRoaXMgY29udGFpbnMgdGhlIGNvbmNhdGVuYXRpb24gb2YgYWxsIHN1YmZvcm1zXG5cbiAgcHVibGljIGdsb2JhbEZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pOyAvLyBBIGZvcm0gZ3JvdXAgY2FuIGVhc2lseSBiZSBvYnNlcnZlZFxuICBwdWJsaWMgZXJyb25lb3VzU2VjdGlvbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnVW50aXRsZWRfTGlua19CdWRnZXQnO1xuICBwdWJsaWMgaXNJbnRlcmxpbms6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzQ3VycmVudEZvcm1TYXZlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gSGFzIGZvcm1zIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCA/XG4gIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSW5pdGlhbGl6ZWQ7XG4gIH1cbiAgc2V0IGlzSW5pdGlhbGl6ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEZPUk1fVEVNUExBVEVfVE9LRU4pIHByaXZhdGUgdGVtcGxhdGU6IGFueSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGN1c3RvbVZhbGlkYXRvcnM6IEN1c3RvbVZhbGlkYXRvcnMsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBhZGRGb3JtKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBuYW1lOiBzdHJpbmcsIHBhcmVudDogc3RyaW5nID0gJycpIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGFsbG93IGFkZGluZyBhIGZvcm0gdG8gb3VyIGdsb2JhbGZvcm0uIFRoaXMgZnVuY3Rpb24gaXMgdXN1YWxseSBjYWxsZWQgYnkgYSBmb3JtIGNvbXBvbmVudFxuICAgICAqL1xuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50ICE9PSAnJykge1xuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdsb2JhbEZvcm0uZ2V0KHBhcmVudCkgYXMgRm9ybUdyb3VwO1xuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGdyb3VwLnNldENvbnRyb2wobmFtZSwgZm9ybUdyb3VwKTtcbiAgICAgICAgdGhpcy5nbG9iYWxGb3JtLnNldENvbnRyb2wocGFyZW50LCBncm91cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdsb2JhbEZvcm0uc2V0Q29udHJvbChwYXJlbnQsIHRoaXMuZmIuZ3JvdXAoeyBbbmFtZV06IGZvcm1Hcm91cCB9KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYW1lICE9PSAnJykge1xuICAgICAgdGhpcy5nbG9iYWxGb3JtLnNldENvbnRyb2wobmFtZSwgZm9ybUdyb3VwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tcG9uZW50VmFsdWVzKGNvbXBvbmVudElkOiBzdHJpbmcsIGxpbms6IHN0cmluZyA9ICcnLCBwYXJlbnRJZD86IHN0cmluZyk6IGFueSB8IHVuZGVmaW5lZCB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBjb21wb25lbnQgYnkgaXRzIGlkIGFuZCBpdHMgcGFyZW50SWRcbiAgICAgKi9cbiAgICBpZiAoIXBhcmVudElkKSByZXR1cm4gdGhpcy5nZXRGb3JtRGF0YSgpW2NvbXBvbmVudElkXTtcbiAgICByZXR1cm4gdGhpcy5nZXRGb3JtRGF0YSgpPy5bbGlua10/LltwYXJlbnRJZF0/Lltjb21wb25lbnRJZF07XG4gIH1cblxuICBwdWJsaWMgcGF0Y2hGb3JtKHBhcmVudE5hbWU6IHN0cmluZywgZ3JvdXBOYW1lOiBzdHJpbmcsIGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XG4gICAgLyoqXG4gICAgICogIEEgd3JhcHBlciBmb3IgdGhlIG1ldGhvZCBmcm9tIEZvcm1Hcm91cC4gVGhpcyBhbGxvd3MgdXMgdG8gaGF2ZSBhIGdsb2JhbEZvcm0gd2l0aCBtb3JlIGRlcHRoLlxuICAgICAqL1xuICAgIGNvbnN0IGdyb3VwID0gPEZvcm1Hcm91cD50aGlzLmdsb2JhbEZvcm0uZ2V0KHBhcmVudE5hbWUpO1xuICAgIGlmIChncm91cCAhPT0gbnVsbCkge1xuICAgICAgZ3JvdXAuYWRkQ29udHJvbChncm91cE5hbWUsIGZvcm1Hcm91cCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyLndhcm4oYCR7cGFyZW50TmFtZX0gZG9lcyBub3QgZXhpc3QhIENhbm5vdCBhdHRhY2ggYW50ZW5uYSB0byBpdC5gKTtcbiAgfVxuXG4gIHB1YmxpYyBpbXBvcnRGb3JtKHJlc3VsdHM6IGFueSk6IHZvaWQge1xuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gaW1wb3J0aW5nIGEgLmpzb24gZmlsZS5cbiAgICAgKiBJdCB1cGRhdGVzIHRoZSBmaWVsZHMgdmFsdWVzLlxuICAgICAqL1xuXG4gICAgLy8gI1RPRE86IGNoZWNrIGZpbGUgc2FuaXR5IChlZy4gc2FuaXRpemF0aW9uKVxuICAgIC8vICNUT0RPOiBUZXN0XG4gICAgLy8gI1RPRE8gV2Ugbm93IG5lZWQgdG8gbWFrZSB0aGlzIG1vcmUgcm9idXN0XG4gICAgLy8gQ2hhbmdpbmcgZ2xvYmFsIGZvcm1cbiAgICBjb25zb2xlLmxvZygnaW1wb3J0IGZvcm0nKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmRhdGEpO1xuICAgIHRoaXMuZ2xvYmFsRm9ybS5wYXRjaFZhbHVlKHJlc3VsdHMuZGF0YSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMudGl0bGUgPSByZXN1bHRzLm1ldGFkYXRhLnRpdGxlO1xuICB9XG5cbiAgcHVibGljIGdldEZvcm1EYXRhJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdsb2JhbEZvcm0udmFsdWVDaGFuZ2VzO1xuICB9XG5cbiAgcHVibGljIGdldEZvcm1EYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsRm9ybS52YWx1ZTsgLy8gVGhlIGZvcm0gdXBkYXRlZCBhdCBhbGwgdGltZXMgaXMgdXNlZCBmb3IgdGhlIGNhbGN1bGF0aW9uXG4gIH1cblxuICBwdWJsaWMgaW5pdEZvcm1zKCk6IHZvaWQge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gYXV0b21hdGljYWxseSBnZW5lcmF0ZXMgdGhlIGZvcm0gdG8gYmUgc2VudCB0byBBUEkgZXZlbiBpZiBzb21lIGNvbXBvbmVudHMgaGF2ZW4ndCB5ZXQgYmVlbiBpbnN0YW50aWF0ZWRcbiAgICB0aGlzLnRlbXBsYXRlLnRlbXBsYXRlLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50VGVtcGxhdGU6IEZvcm0pID0+IHtcbiAgICAgIGlmIChjb21wb25lbnRUZW1wbGF0ZS5jb21wb25lbnRJZCAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgZmcgPSB0aGlzLmNyZWF0ZUZvcm1Hcm91cChjb21wb25lbnRUZW1wbGF0ZSk7XG4gICAgICAgIGlmIChjb21wb25lbnRUZW1wbGF0ZS5wYXJlbnRDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLmFkZEZvcm0oZmcsIGNvbXBvbmVudFRlbXBsYXRlLmNvbXBvbmVudElkLCBjb21wb25lbnRUZW1wbGF0ZS5wYXJlbnRDb21wb25lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkRm9ybShmZywgY29tcG9uZW50VGVtcGxhdGUuY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlRm9ybUdyb3VwKGNvbXBvbmVudFRlbXBsYXRlOiBGb3JtKTogRm9ybUdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGluIGEgRm9ybSB0ZW1wbGF0ZSBhbmQgcmV0dXJuIGEgRm9ybUdyb3VwIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNvbXBvbmVudC5cbiAgICAgKiBUaGlzIG1ha2VzIHRoZSBjb252ZXJzaW9uIGJldHdlZW4gYW5ndWxhciByZWFjdGl2ZSBmb3JtcyBhbmQgb3VyIGN1c3RvbSBKU09OIHRlbXBsYXRlcyBmb3IgdHJhbnNtaXNzaW9uIGNoYWluIHBhcnRzLlxuICAgICAqL1xuICAgIGNvbnN0IGdyb3VwOiBhbnkgPSB7fTtcblxuICAgIGNvbXBvbmVudFRlbXBsYXRlLnBhcmFtcy5mb3JFYWNoKChlbGVtZW50OiBGaWVsZCkgPT4ge1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgaXMgJ3VuZGVmaW5lZCcgaWYga2V5IG5vdCBmb3VuZCBpbiBtYXBcbiAgICAgIC8vIEhlcmUgd2UgY3JlYXRlIEZvcm1Db250cm9scyBmb3IgYm90aCB0aGUgaW5wdXQgYW5kIGl0cyB1bml0XG4gICAgICBjb25zdCBpbnB1dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2xXYXJuKGVsZW1lbnQuZGVmYXVsdCwge1xuICAgICAgICAvLyBGSVhNRTogRm9ybWNvbnRyb2x3YXJuXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnBhdHRlcm4oJ15bKy1dP1swLTldKyhbLF1bMC05XSspKihbLl1bMC05XSspPyQnKV0sXG4gICAgICAgIHVwZGF0ZU9uOiAnY2hhbmdlJywgLy8gUmVtb3ZlZCBiZWNhdXNlIG9mIGRhdGEgbG9zcyB3aGVuIHN3aXRjaGluZyBwYWdlIHdpdGhvdXQgYmx1cnJpbmcgZmlyc3RcbiAgICAgIH0pOyAvLyAsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCg2KV0pOyAvL0ZJWE1FOiBGb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgICAgLy8gVXBkYXRpbmcgb24gYmx1ciBpcyBsZXNzIGRpc3RyYWN0aW5nLCBhIGdvb2QgY29tcHJvbWlzZVxuICAgICAgY29uc3QgdW5pdENvbnRyb2wgPVxuICAgICAgICBlbGVtZW50LnVuaXRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3IpXG4gICAgICAgICAgOiBuZXcgRm9ybUNvbnRyb2woZWxlbWVudC51bml0c1swXSwgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAvLyBGb3IgdW5pdHMsIHdlIGNhbiBhc3N1bWUgdGhleSB3aWxsIGJlIHZhbGlkIHNpbmNlIHRoZSB1c2VyIGlzIGNvbnN0cmFpbmVkIGluIGhpcyBjaG9pY2VzXG4gICAgICBncm91cFtlbGVtZW50LmlkXSA9IG5ldyBGb3JtR3JvdXAoXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBBIGdyb3VwIGNvbXBvc2VkIG9mIGJvdGggdGhlIGZpZWxkIGFuZCBpdHMgdW5pdFxuICAgICAgICAgIHZhbHVlOiBpbnB1dENvbnRyb2wsXG4gICAgICAgICAgdW5pdDogdW5pdENvbnRyb2wsXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICB0aGlzLmN1c3RvbVZhbGlkYXRvcnMuZmllbGRWYWxpZGF0b3IsXG4gICAgICAgICAgZWxlbWVudC50eXBlID09PSAnbG9zcycgPyB0aGlzLmN1c3RvbVZhbGlkYXRvcnMucG9zaXRpdmVMb3NzV2FybmluZ1ZhbGlkYXRvciA6IFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcixcbiAgICAgICAgXVxuICAgICAgKTtcblxuICAgICAgaWYgKGVsZW1lbnQuYWx0ZXJuYXRpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBzdWJHcm91cCA9IHRoaXMuY3JlYXRlRm9ybUdyb3VwKGVsZW1lbnQuYWx0ZXJuYXRpdmUpO1xuICAgICAgICBncm91cFtlbGVtZW50LmFsdGVybmF0aXZlLmNvbXBvbmVudElkXSA9IHN1Ykdyb3VwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZmIuZ3JvdXAoZ3JvdXApO1xuICB9XG59XG4iXX0=