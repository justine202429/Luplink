import { Component, Input, } from '@angular/core';
import { Validators, } from '@angular/forms';
import { DrawingDefault } from '../models/default';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../synthetic-drawing-form.service";
export class SyntheticDrawingFormComponent {
    constructor(formBuilder, drawingService) {
        this.formBuilder = formBuilder;
        this.drawingService = drawingService;
        // This ties the form to the right LBScenario model, don't forget to include it
        this.scenarioId = 'default';
        // This sets the options for our form group
        const controlOptions = { validators: [Validators.required], updateOn: 'blur' };
        this.drawingForm = this.formBuilder.group({
            power: DrawingDefault.powerIn,
            gains: this.formBuilder.group(DrawingDefault.defaultGains),
        }, controlOptions);
    }
    ngOnInit() {
        // When the 'updateOn:blur' is triggered, we call the onSubmit within the new context
        this.drawingFormSub = this.drawingForm.valueChanges.subscribe({
            next: this.onSubmit.bind(this),
        });
        this.LBScenarioSub = this.drawingService.getLBScenario$(this.scenarioId).subscribe((next) => {
            this.currentScenario = next;
        });
    }
    ngOnDestroy() {
        this.drawingFormSub.unsubscribe();
        this.LBScenarioSub.unsubscribe();
    }
    randomizeInputs() {
        // Randomize belongs to the form component, we should randomize here and send data to model after
        const defaultLBScenario = this.drawingService.getLBScenario(this.scenarioId);
        const components = defaultLBScenario.randomize();
        const newGains = {};
        const excluded = ['tx', 'rx'];
        Object.entries(components).forEach(([key, value]) => {
            if (!excluded.includes(key)) {
                newGains[key] = value.gain;
            }
        });
        this.drawingForm.patchValue({ gains: newGains }); // Update the form values
        defaultLBScenario.compute();
        this.drawingService.updateLBScenario(this.scenarioId, defaultLBScenario);
    }
    onSubmit() {
        const defaultLBScenario = this.drawingService.getLBScenario(this.scenarioId);
        defaultLBScenario.setPowerIn(this.drawingForm.value.power);
        const formValues = this.drawingForm.value.gains;
        defaultLBScenario.editGains(formValues);
        defaultLBScenario.compute();
        this.drawingService.updateLBScenario(this.scenarioId, defaultLBScenario);
    }
}
SyntheticDrawingFormComponent.ɵfac = function SyntheticDrawingFormComponent_Factory(t) { return new (t || SyntheticDrawingFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.SyntheticDrawingFormService)); };
SyntheticDrawingFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SyntheticDrawingFormComponent, selectors: [["lib-synthetic-drawing-form"]], inputs: { scenarioId: "scenarioId" }, decls: 34, vars: 1, consts: [["id", "form", 3, "formGroup"], [1, "field"], [1, "label"], ["formControlName", "power", "type", "number", 1, "input"], ["formArrayName", "gains"], ["formControlName", "cableTx", "type", "number", 1, "input"], ["formControlName", "antTx", "type", "number", 1, "input"], ["formControlName", "fsl", "type", "number", 1, "input"], ["formControlName", "antRx", "type", "number", 1, "input"], ["formControlName", "cableRx", "type", "number", 1, "input"], [1, "field", "is-grouped"], [1, "control"], ["form", "form", "type", "submit", 1, "button", "is-primary", 3, "click"], ["id", "randomize", 1, "button", "is-secondary", 3, "click"]], template: function SyntheticDrawingFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵtext(3, "Power in: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵelementStart(8, "label", 2);
        i0.ɵɵtext(9, "Tx Cable Loss: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 1);
        i0.ɵɵelementStart(12, "label", 2);
        i0.ɵɵtext(13, "Tx Antenna Gain: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 1);
        i0.ɵɵelementStart(16, "label", 2);
        i0.ɵɵtext(17, "FSL: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 1);
        i0.ɵɵelementStart(20, "label", 2);
        i0.ɵɵtext(21, "Rx Antenna Gain: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 1);
        i0.ɵɵelementStart(24, "label", 2);
        i0.ɵɵtext(25, "Rx Cable Loss: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(26, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 10);
        i0.ɵɵelementStart(28, "div", 11);
        i0.ɵɵelementStart(29, "button", 12);
        i0.ɵɵlistener("click", function SyntheticDrawingFormComponent_Template_button_click_29_listener() { return ctx.onSubmit(); });
        i0.ɵɵtext(30, " Update Graph ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div", 11);
        i0.ɵɵelementStart(32, "button", 13);
        i0.ɵɵlistener("click", function SyntheticDrawingFormComponent_Template_button_click_32_listener() { return ctx.randomizeInputs(); });
        i0.ɵɵtext(33, " Random values ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.drawingForm);
    } }, directives: [i1.ɵangular_packages_forms_forms_ba, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.FormArrayName], styles: [".ng-valid.required[_ngcontent-%COMP%], .ng-valid[required][_ngcontent-%COMP%]{border-left:5px solid green}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid red}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SyntheticDrawingFormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-synthetic-drawing-form',
                templateUrl: './synthetic-drawing-form.component.html',
                styleUrls: ['./synthetic-drawing-form.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.SyntheticDrawingFormService }]; }, { scenarioId: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludGhldGljLWRyYXdpbmctZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvc3ludGhldGljLWRyYXdpbmcvc3ludGhldGljLWRyYXdpbmctZm9ybS9zeW50aGV0aWMtZHJhd2luZy1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9zeW50aGV0aWMtZHJhd2luZy9zeW50aGV0aWMtZHJhd2luZy1mb3JtL3N5bnRoZXRpYy1kcmF3aW5nLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDMkMsVUFBVSxHQUMzRCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVFuRCxNQUFNLE9BQU8sNkJBQTZCO0lBUXhDLFlBQW9CLFdBQXdCLEVBQVUsY0FBMEM7UUFBNUUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBNEI7UUFIaEcsK0VBQStFO1FBQ3RFLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFHdEMsMkNBQTJDO1FBQzNDLE1BQU0sY0FBYyxHQUEyQixFQUFFLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDdkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU87WUFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFX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QSxpQkFBUTtRQUFBLDRCQUE2RDtRQUM3RyxpQkFBTTtRQUNOLCtCQUFtQjtRQUNqQixpQ0FBcUI7UUFBQSxzQkFBSztRQUFBLGlCQUFRO1FBQUEsNEJBQTJEO1FBQy9GLGlCQUFNO1FBQ04sK0JBQW1CO1FBQ2pCLGlDQUFxQjtRQUFBLGtDQUFpQjtRQUFBLGlCQUFRO1FBQUEsNEJBQTZEO1FBQzdHLGlCQUFNO1FBQ04sK0JBQW1CO1FBQ2pCLGlDQUFxQjtRQUFBLGdDQUFlO1FBQUEsaUJBQVE7UUFBQSw0QkFBK0Q7UUFDN0csaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sZ0NBQThCO1FBQzVCLGdDQUFxQjtRQUNuQixtQ0FBaUY7UUFBckIsMkdBQVMsY0FBVSxJQUFDO1FBQzlFLCtCQUNGO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUNOLGdDQUFxQjtRQUNuQixtQ0FBK0U7UUFBNUIsMkdBQVMscUJBQWlCLElBQUM7UUFDNUUsZ0NBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTzs7UUFwQ1MsMkNBQXlCOzt1RkRlNUIsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQzthQUN2RDt3R0FPVSxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTGlua0J1ZGdldENvbXBvbmVudCwgTGlua0J1ZGdldFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9MaW5rQnVkZ2V0U2NlbmFyaW8ubW9kZWwnO1xuaW1wb3J0IHsgRHJhd2luZ0RlZmF1bHQgfSBmcm9tICcuLi9tb2RlbHMvZGVmYXVsdCc7XG5pbXBvcnQgeyBTeW50aGV0aWNEcmF3aW5nRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9zeW50aGV0aWMtZHJhd2luZy1mb3JtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc3ludGhldGljLWRyYXdpbmctZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zeW50aGV0aWMtZHJhd2luZy1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ludGhldGljLWRyYXdpbmctZm9ybS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTeW50aGV0aWNEcmF3aW5nRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZHJhd2luZ0Zvcm06IEZvcm1Hcm91cDtcbiAgY3VycmVudFNjZW5hcmlvOiBhbnk7XG4gIGRyYXdpbmdGb3JtU3ViOiBhbnk7XG4gIExCU2NlbmFyaW9TdWI6IGFueTtcbiAgLy8gVGhpcyB0aWVzIHRoZSBmb3JtIHRvIHRoZSByaWdodCBMQlNjZW5hcmlvIG1vZGVsLCBkb24ndCBmb3JnZXQgdG8gaW5jbHVkZSBpdFxuICBASW5wdXQoKSBzY2VuYXJpb0lkOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgZHJhd2luZ1NlcnZpY2U6U3ludGhldGljRHJhd2luZ0Zvcm1TZXJ2aWNlKSB7XG4gICAgLy8gVGhpcyBzZXRzIHRoZSBvcHRpb25zIGZvciBvdXIgZm9ybSBncm91cFxuICAgIGNvbnN0IGNvbnRyb2xPcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zID0geyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sIHVwZGF0ZU9uOiAnYmx1cicgfTtcbiAgICB0aGlzLmRyYXdpbmdGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBwb3dlcjogRHJhd2luZ0RlZmF1bHQucG93ZXJJbixcbiAgICAgIGdhaW5zOiB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKERyYXdpbmdEZWZhdWx0LmRlZmF1bHRHYWlucyksXG4gICAgfSwgY29udHJvbE9wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gV2hlbiB0aGUgJ3VwZGF0ZU9uOmJsdXInIGlzIHRyaWdnZXJlZCwgd2UgY2FsbCB0aGUgb25TdWJtaXQgd2l0aGluIHRoZSBuZXcgY29udGV4dFxuICAgIHRoaXMuZHJhd2luZ0Zvcm1TdWIgPSB0aGlzLmRyYXdpbmdGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpLFxuICAgIH0pO1xuICAgIHRoaXMuTEJTY2VuYXJpb1N1YiA9IHRoaXMuZHJhd2luZ1NlcnZpY2UuZ2V0TEJTY2VuYXJpbyQodGhpcy5zY2VuYXJpb0lkKS5zdWJzY3JpYmUoKG5leHQpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFNjZW5hcmlvID0gbmV4dDtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZHJhd2luZ0Zvcm1TdWIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLkxCU2NlbmFyaW9TdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJhbmRvbWl6ZUlucHV0cygpIHtcbiAgICAvLyBSYW5kb21pemUgYmVsb25ncyB0byB0aGUgZm9ybSBjb21wb25lbnQsIHdlIHNob3VsZCByYW5kb21pemUgaGVyZSBhbmQgc2VuZCBkYXRhIHRvIG1vZGVsIGFmdGVyXG4gICAgY29uc3QgZGVmYXVsdExCU2NlbmFyaW86IExpbmtCdWRnZXRTY2VuYXJpbyA9IHRoaXMuZHJhd2luZ1NlcnZpY2UuZ2V0TEJTY2VuYXJpbyh0aGlzLnNjZW5hcmlvSWQpO1xuICAgIGNvbnN0IGNvbXBvbmVudHM6IHsgW2lkOiBzdHJpbmddOiBMaW5rQnVkZ2V0Q29tcG9uZW50OyB9ID0gZGVmYXVsdExCU2NlbmFyaW8ucmFuZG9taXplKCk7XG5cbiAgICBjb25zdCBuZXdHYWluczogeyBbaWQ6c3RyaW5nXTpudW1iZXIgfSA9IHt9O1xuICAgIGNvbnN0IGV4Y2x1ZGVkID0gWyd0eCcsICdyeCddO1xuICAgIE9iamVjdC5lbnRyaWVzKGNvbXBvbmVudHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKCFleGNsdWRlZC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG5ld0dhaW5zW2tleV0gPSB2YWx1ZS5nYWluO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZHJhd2luZ0Zvcm0ucGF0Y2hWYWx1ZSh7IGdhaW5zOiBuZXdHYWlucyB9KTsvLyBVcGRhdGUgdGhlIGZvcm0gdmFsdWVzXG4gICAgZGVmYXVsdExCU2NlbmFyaW8uY29tcHV0ZSgpO1xuICAgIHRoaXMuZHJhd2luZ1NlcnZpY2UudXBkYXRlTEJTY2VuYXJpbyh0aGlzLnNjZW5hcmlvSWQsIGRlZmF1bHRMQlNjZW5hcmlvKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGRlZmF1bHRMQlNjZW5hcmlvID0gdGhpcy5kcmF3aW5nU2VydmljZS5nZXRMQlNjZW5hcmlvKHRoaXMuc2NlbmFyaW9JZCk7XG4gICAgZGVmYXVsdExCU2NlbmFyaW8uc2V0UG93ZXJJbig8bnVtYmVyPiB0aGlzLmRyYXdpbmdGb3JtLnZhbHVlLnBvd2VyKTtcblxuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB0aGlzLmRyYXdpbmdGb3JtLnZhbHVlLmdhaW5zO1xuXG4gICAgZGVmYXVsdExCU2NlbmFyaW8uZWRpdEdhaW5zKGZvcm1WYWx1ZXMpO1xuICAgIGRlZmF1bHRMQlNjZW5hcmlvLmNvbXB1dGUoKTtcbiAgICB0aGlzLmRyYXdpbmdTZXJ2aWNlLnVwZGF0ZUxCU2NlbmFyaW8odGhpcy5zY2VuYXJpb0lkLCBkZWZhdWx0TEJTY2VuYXJpbyk7XG4gIH1cbn1cbiIsIjxmb3JtIGlkPVwiZm9ybVwiIFtmb3JtR3JvdXBdPVwiZHJhd2luZ0Zvcm1cIj5cbiAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5Qb3dlciBpbjogPC9sYWJlbD48aW5wdXQgY2xhc3M9XCJpbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cInBvd2VyXCIgdHlwZT1cIm51bWJlclwiIC8+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgIDxkaXYgZm9ybUFycmF5TmFtZT1cImdhaW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5UeCBDYWJsZSBMb3NzOiA8L2xhYmVsPjxpbnB1dCBjbGFzcz1cImlucHV0XCIgZm9ybUNvbnRyb2xOYW1lPVwiY2FibGVUeFwiIHR5cGU9XCJudW1iZXJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5UeCBBbnRlbm5hIEdhaW46IDwvbGFiZWw+PGlucHV0IGNsYXNzPVwiaW5wdXRcIiBmb3JtQ29udHJvbE5hbWU9XCJhbnRUeFwiIHR5cGU9XCJudW1iZXJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5GU0w6IDwvbGFiZWw+PGlucHV0IGNsYXNzPVwiaW5wdXRcIiBmb3JtQ29udHJvbE5hbWU9XCJmc2xcIiB0eXBlPVwibnVtYmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+UnggQW50ZW5uYSBHYWluOiA8L2xhYmVsPjxpbnB1dCBjbGFzcz1cImlucHV0XCIgZm9ybUNvbnRyb2xOYW1lPVwiYW50UnhcIiB0eXBlPVwibnVtYmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+UnggQ2FibGUgTG9zczogPC9sYWJlbD48aW5wdXQgY2xhc3M9XCJpbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cImNhYmxlUnhcIiB0eXBlPVwibnVtYmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgZm9ybT1cImZvcm1cIiB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgVXBkYXRlIEdyYXBoXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zZWNvbmRhcnlcIiBpZD1cInJhbmRvbWl6ZVwiIChjbGljayk9XCJyYW5kb21pemVJbnB1dHMoKVwiPlxuICAgICAgICBSYW5kb20gdmFsdWVzXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=