import { Component, Input } from '@angular/core';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
function StepbarComponent_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r0.faExclamation);
} }
function StepbarComponent_fa_icon_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r1.faCheck);
} }
function StepbarComponent_fa_icon_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r2.faExclamation);
} }
function StepbarComponent_fa_icon_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r3.faCheck);
} }
function StepbarComponent_fa_icon_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r4.faExclamation);
} }
function StepbarComponent_fa_icon_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r5.faCheck);
} }
const _c0 = function (a0) { return { "is-active": a0 }; };
const _c1 = function (a0, a1) { return { "is-warning": a0, "is-success": a1 }; };
// interface Validity {
//   steps: { [key: string]: string };
//   forms: { [key: string]: string };
// }
export class StepbarComponent {
    constructor() {
        this.faCheck = faCheck;
        this.faExclamation = faExclamation;
        this._step = 'geometry';
    }
    get validity() {
        return this._validity;
    }
    set validity(value) {
        if (value) {
            this._validity = value;
        }
    }
    get step() {
        return this._step;
    }
    set step(value) {
        this._step = value;
    }
    updateValidity() { }
    isActive(step) {
        /**
         * Determines if one of the step is active depending on other steps validity
         */
        // eslint-disable-next-line no-restricted-syntax
        for (const key in this.validity.steps) {
            if (Object.prototype.hasOwnProperty.call(this.validity.steps, key)) {
                if (this.validity.steps[key] !== 'valid' || this.step === step) {
                    // We don't want the progress bar to continue after a warning
                    return true;
                }
            }
        }
        return false;
    }
}
StepbarComponent.ɵfac = function StepbarComponent_Factory(t) { return new (t || StepbarComponent)(); };
StepbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StepbarComponent, selectors: [["lib-stepbar"]], inputs: { validity: "validity", step: "step" }, decls: 31, vars: 30, consts: [[1, "section", "pb-0", "pt-5"], [1, "steps", "is-medium", "is-centered", "has-content-centered"], [1, "steps-segment", 3, "ngClass"], [1, "steps-marker", 3, "ngClass"], [1, "icon"], [3, "icon", 4, "ngIf"], [1, "steps-content"], [1, "heading"], [1, "steps-marker"], [3, "icon"]], template: function StepbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "ul", 1);
        i0.ɵɵelementStart(2, "li", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵtemplate(5, StepbarComponent_fa_icon_5_Template, 1, 1, "fa-icon", 5);
        i0.ɵɵtemplate(6, StepbarComponent_fa_icon_6_Template, 1, 1, "fa-icon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵelementStart(8, "p", 7);
        i0.ɵɵtext(9, "Geometry");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "li", 2);
        i0.ɵɵelementStart(11, "span", 3);
        i0.ɵɵelementStart(12, "span", 4);
        i0.ɵɵtemplate(13, StepbarComponent_fa_icon_13_Template, 1, 1, "fa-icon", 5);
        i0.ɵɵtemplate(14, StepbarComponent_fa_icon_14_Template, 1, 1, "fa-icon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 6);
        i0.ɵɵelementStart(16, "p", 7);
        i0.ɵɵtext(17, "Uplink");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "li", 2);
        i0.ɵɵelementStart(19, "span", 3);
        i0.ɵɵelementStart(20, "span", 4);
        i0.ɵɵtemplate(21, StepbarComponent_fa_icon_21_Template, 1, 1, "fa-icon", 5);
        i0.ɵɵtemplate(22, StepbarComponent_fa_icon_22_Template, 1, 1, "fa-icon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 6);
        i0.ɵɵelementStart(24, "p", 7);
        i0.ɵɵtext(25, "Downlink");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "li", 2);
        i0.ɵɵelement(27, "span", 8);
        i0.ɵɵelementStart(28, "div", 6);
        i0.ɵɵelementStart(29, "p", 7);
        i0.ɵɵtext(30, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx.isActive("geometry")));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c1, ctx.validity.steps.geometry === "invalid", ctx.validity.steps.geometry === "valid"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.validity.steps.geometry === "invalid");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.validity.steps.geometry === "valid");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(18, _c0, ctx.isActive("uplink")));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(20, _c1, ctx.validity.steps.uplink === "invalid", ctx.validity.steps.uplink === "valid"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.validity.steps.uplink === "invalid");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.validity.steps.uplink === "valid");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(23, _c0, ctx.isActive("downlink")));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(25, _c1, ctx.validity.steps.downlink === "invalid", ctx.validity.steps.downlink === "valid"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.validity.steps.downlink === "invalid");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.validity.steps.downlink === "valid");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(28, _c0, ctx.isActive("result")));
    } }, directives: [i1.NgClass, i1.NgIf, i2.FaIconComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepbarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-stepbar',
                templateUrl: './stepbar.component.html',
                styleUrls: ['./stepbar.component.scss'],
            }]
    }], function () { return []; }, { validity: [{
            type: Input
        }], step: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvc3RlcGJhci9zdGVwYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9zdGVwYmFyL3N0ZXBiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7SUNRakUsNkJBQXdGOzs7SUFBL0UsMkNBQXNCOzs7SUFDL0IsNkJBQWdGOzs7SUFBdkUscUNBQWdCOzs7SUFnQnpCLDZCQUFzRjs7O0lBQTdFLDJDQUFzQjs7O0lBQy9CLDZCQUE4RTs7O0lBQXJFLHFDQUFnQjs7O0lBZXpCLDZCQUF3Rjs7O0lBQS9FLDJDQUFzQjs7O0lBQy9CLDZCQUFnRjs7O0lBQXZFLHFDQUFnQjs7OztBRHhDbkMsdUJBQXVCO0FBQ3ZCLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsSUFBSTtBQU9KLE1BQU0sT0FBTyxnQkFBZ0I7SUF3QjNCO1FBSkEsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNsQixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUV0QixVQUFLLEdBQVcsVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUF2QmhCLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBVTtRQUNyQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBU00sY0FBYyxLQUFVLENBQUM7SUFDekIsUUFBUSxDQUFDLElBQVk7UUFDMUI7O1dBRUc7UUFDSCxnREFBZ0Q7UUFDaEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDbEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQzlELDZEQUE2RDtvQkFDN0QsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnRkF6Q1UsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7UUNiN0Isa0NBQW1DO1FBQ2pDLDZCQUE2RDtRQUMzRCw2QkFBMEU7UUFDeEUsK0JBR0s7UUFDSCwrQkFBbUI7UUFFakIseUVBQXdGO1FBQ3hGLHlFQUFnRjtRQUNsRixpQkFBTztRQUNULGlCQUFPO1FBRVAsOEJBQTJCO1FBQ3pCLDRCQUFtQjtRQUFBLHdCQUFRO1FBQUEsaUJBQUk7UUFDakMsaUJBQU07UUFFUixpQkFBSztRQUNMLDhCQUF3RTtRQUN0RSxnQ0FHTztRQUNMLGdDQUFtQjtRQUVqQiwyRUFBc0Y7UUFDdEYsMkVBQThFO1FBQ2hGLGlCQUFPO1FBQ1QsaUJBQU87UUFDUCwrQkFBMkI7UUFDekIsNkJBQW1CO1FBQUEsdUJBQU07UUFBQSxpQkFBSTtRQUMvQixpQkFBTTtRQUNSLGlCQUFLO1FBQ0wsOEJBQTBFO1FBQ3hFLGdDQUdPO1FBQ0wsZ0NBQW1CO1FBR2pCLDJFQUF3RjtRQUN4RiwyRUFBZ0Y7UUFDbEYsaUJBQU87UUFDVCxpQkFBTztRQUNQLCtCQUEyQjtRQUN6Qiw2QkFBbUI7UUFBQSx5QkFBUTtRQUFBLGlCQUFJO1FBQ2pDLGlCQUFNO1FBQ1IsaUJBQUs7UUFDTCw4QkFBd0U7UUFDdEUsMkJBQWtDO1FBU2xDLCtCQUEyQjtRQUN6Qiw2QkFBbUI7UUFBQSx1QkFBTTtRQUFBLGlCQUFJO1FBQy9CLGlCQUFNO1FBQ1IsaUJBQUs7UUFDUCxpQkFBSztRQUNQLGlCQUFVOztRQS9Eb0IsZUFBK0M7UUFBL0MsK0VBQStDO1FBQzVDLGVBR3ZCO1FBSHVCLHlJQUd2QjtRQUdpQyxlQUEyQztRQUEzQyxnRUFBMkM7UUFDakQsZUFBeUM7UUFBekMsOERBQXlDO1FBU2hELGVBQTZDO1FBQTdDLDZFQUE2QztRQUMxQyxlQUdyQjtRQUhxQixxSUFHckI7UUFHK0IsZUFBeUM7UUFBekMsOERBQXlDO1FBQy9DLGVBQXVDO1FBQXZDLDREQUF1QztRQU85QyxlQUErQztRQUEvQywrRUFBK0M7UUFDNUMsZUFHckI7UUFIcUIseUlBR3JCO1FBSStCLGVBQTJDO1FBQTNDLGdFQUEyQztRQUNqRCxlQUF5QztRQUF6Qyw4REFBeUM7UUFPaEQsZUFBNkM7UUFBN0MsNkVBQTZDOzt1RkRyQzlELGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDO3NDQUdLLFFBQVE7a0JBRFgsS0FBSztZQVdGLElBQUk7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhQ2hlY2ssIGZhRXhjbGFtYXRpb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG4vLyBpbnRlcmZhY2UgVmFsaWRpdHkge1xuLy8gICBzdGVwczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbi8vICAgZm9ybXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4vLyB9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zdGVwYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwYmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBiYXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgdmFsaWRpdHkoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRpdHk7XG4gIH1cbiAgc2V0IHZhbGlkaXR5KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbGlkaXR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0ZXAoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgfVxuICBzZXQgc3RlcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RlcCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3ZhbGlkaXR5OiBhbnk7IC8vIFZhbGlkaXR5ID0geyBzdGVwczoge30sIGZvcm1zOiB7fSB9O1xuXG4gIGZhQ2hlY2sgPSBmYUNoZWNrO1xuICBmYUV4Y2xhbWF0aW9uID0gZmFFeGNsYW1hdGlvbjtcblxuICBwcml2YXRlIF9zdGVwOiBzdHJpbmcgPSAnZ2VvbWV0cnknO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHVwZGF0ZVZhbGlkaXR5KCk6IHZvaWQge31cbiAgcHVibGljIGlzQWN0aXZlKHN0ZXA6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgb25lIG9mIHRoZSBzdGVwIGlzIGFjdGl2ZSBkZXBlbmRpbmcgb24gb3RoZXIgc3RlcHMgdmFsaWRpdHlcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnZhbGlkaXR5LnN0ZXBzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMudmFsaWRpdHkuc3RlcHMsIGtleSkpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRpdHkuc3RlcHNba2V5XSAhPT0gJ3ZhbGlkJyB8fCB0aGlzLnN0ZXAgPT09IHN0ZXApIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRoZSBwcm9ncmVzcyBiYXIgdG8gY29udGludWUgYWZ0ZXIgYSB3YXJuaW5nXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24gcGItMCBwdC01XCI+XG4gIDx1bCBjbGFzcz1cInN0ZXBzIGlzLW1lZGl1bSBpcy1jZW50ZXJlZCBoYXMtY29udGVudC1jZW50ZXJlZFwiPlxuICAgIDxsaSBjbGFzcz1cInN0ZXBzLXNlZ21lbnRcIiBbbmdDbGFzc109XCJ7J2lzLWFjdGl2ZSc6IGlzQWN0aXZlKCdnZW9tZXRyeScpfVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdGVwcy1tYXJrZXJcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ2lzLXdhcm5pbmcnOiB2YWxpZGl0eS5zdGVwcy5nZW9tZXRyeSA9PT0gJ2ludmFsaWQnLFxuICAgICAgICAgICdpcy1zdWNjZXNzJzogdmFsaWRpdHkuc3RlcHMuZ2VvbWV0cnkgPT09ICd2YWxpZCdcbiAgICAgICAgfVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICA8IS0tIDxpIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb25cIiAqbmdJZj1cInZhbGlkaXR5LnN0ZXBzLmdlb21ldHJ5ID09PSAnaW52YWxpZCdcIj48L2k+IC0tPlxuICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhRXhjbGFtYXRpb25cIiAqbmdJZj1cInZhbGlkaXR5LnN0ZXBzLmdlb21ldHJ5ID09PSAnaW52YWxpZCdcIj48L2ZhLWljb24+XG4gICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFDaGVja1wiICpuZ0lmPVwidmFsaWRpdHkuc3RlcHMuZ2VvbWV0cnkgPT09ICd2YWxpZCdcIj48L2ZhLWljb24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWNvbnRlbnRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkaW5nXCI+R2VvbWV0cnk8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzPVwic3RlcHMtc2VnbWVudFwiIFtuZ0NsYXNzXT1cInsnaXMtYWN0aXZlJzogaXNBY3RpdmUoJ3VwbGluaycpfVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdGVwcy1tYXJrZXJcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAnaXMtd2FybmluZyc6IHZhbGlkaXR5LnN0ZXBzLnVwbGluayA9PT0gJ2ludmFsaWQnLFxuICAgICAgICAgICAgJ2lzLXN1Y2Nlc3MnOiB2YWxpZGl0eS5zdGVwcy51cGxpbmsgPT09ICd2YWxpZCdcbiAgICAgICAgICB9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvblwiICpuZ0lmPVwidmFsaWRpdHkuc3RlcHMudXBsaW5rID09PSAnaW52YWxpZCdcIj48L2k+IC0tPlxuICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhRXhjbGFtYXRpb25cIiAqbmdJZj1cInZhbGlkaXR5LnN0ZXBzLnVwbGluayA9PT0gJ2ludmFsaWQnXCI+PC9mYS1pY29uPlxuICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQ2hlY2tcIiAqbmdJZj1cInZhbGlkaXR5LnN0ZXBzLnVwbGluayA9PT0gJ3ZhbGlkJ1wiPjwvZmEtaWNvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWNvbnRlbnRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkaW5nXCI+VXBsaW5rPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgICA8bGkgY2xhc3M9XCJzdGVwcy1zZWdtZW50XCIgW25nQ2xhc3NdPVwieydpcy1hY3RpdmUnOiBpc0FjdGl2ZSgnZG93bmxpbmsnKX1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3RlcHMtbWFya2VyXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ2lzLXdhcm5pbmcnOiB2YWxpZGl0eS5zdGVwcy5kb3dubGluayA9PT0gJ2ludmFsaWQnLFxuICAgICAgICAgICAgJ2lzLXN1Y2Nlc3MnOiB2YWxpZGl0eS5zdGVwcy5kb3dubGluayA9PT0gJ3ZhbGlkJ1xuICAgICAgICAgIH1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgPCEtLSA8aSBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uXCIgKm5nSWY9XCJ2YWxpZGl0eS5zdGVwcy5kb3dubGluayA9PT0gJ2ludmFsaWQnXCI+PC9pPiAtLT5cbiAgICAgICAgICA8IS0tIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiAqbmdJZj1cInZhbGlkaXR5LnN0ZXBzLmRvd25saW5rID09PSAndmFsaWQnXCI+PC9pPiAtLT5cbiAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUV4Y2xhbWF0aW9uXCIgKm5nSWY9XCJ2YWxpZGl0eS5zdGVwcy5kb3dubGluayA9PT0gJ2ludmFsaWQnXCI+PC9mYS1pY29uPlxuICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQ2hlY2tcIiAqbmdJZj1cInZhbGlkaXR5LnN0ZXBzLmRvd25saW5rID09PSAndmFsaWQnXCI+PC9mYS1pY29uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtY29udGVudFwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRpbmdcIj5Eb3dubGluazwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzPVwic3RlcHMtc2VnbWVudFwiIFtuZ0NsYXNzXT1cInsnaXMtYWN0aXZlJzogaXNBY3RpdmUoJ3Jlc3VsdCcpfVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdGVwcy1tYXJrZXJcIj48L3NwYW4+XG4gICAgICA8IS0tIDxzcGFuIGNsYXNzPVwic3RlcHMtbWFya2VyXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ2lzLXdhcm5pbmcnOiB2YWxpZGl0eS5zdGVwcy5kb3dubGluayA9PT0gJ2ludmFsaWQnLFxuICAgICAgICAgICAgJ2lzLXN1Y2Nlc3MnOiB2YWxpZGl0eS5zdGVwcy5kb3dubGluayA9PT0gJ3ZhbGlkJ1xuICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uXCIgKm5nSWY9XCJ2YWxpZGl0eS5zdGVwcy5kb3dubGluayA9PT0gJ2ludmFsaWQnXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj4gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtY29udGVudFwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRpbmdcIj5SZXN1bHQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9zZWN0aW9uPiJdfQ==