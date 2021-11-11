import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../card/card.component";
import * as i2 from "../synthetic-drawing/synthetic-drawing-display/synthetic-drawing.component";
import * as i3 from "../synthetic-drawing/synthetic-drawing-form/synthetic-drawing-form.component";
export class SynthesisComponent {
    constructor() { }
}
SynthesisComponent.ɵfac = function SynthesisComponent_Factory(t) { return new (t || SynthesisComponent)(); };
SynthesisComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SynthesisComponent, selectors: [["lib-synthesis"]], decls: 8, vars: 3, consts: [[1, "section"], [1, "columns", "is-multiline", "is-centered"], [1, "column", "is-two-third-desktop"], [3, "scenarioId"], [1, "column", "is-one-third-desktop"], [3, "title"]], template: function SynthesisComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "lib-card");
        i0.ɵɵelement(4, "lib-synthetic-drawing", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "lib-card", 5);
        i0.ɵɵelement(7, "lib-synthetic-drawing-form", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("scenarioId", "default");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("title", "Input values");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("scenarioId", "default");
    } }, directives: [i1.CardComponent, i2.SyntheticDrawingComponent, i3.SyntheticDrawingFormComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SynthesisComponent, [{
        type: Component,
        args: [{
                selector: 'lib-synthesis',
                templateUrl: './synthesis.component.html',
                styleUrls: ['./synthesis.component.scss'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludGhlc2lzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9zeW50aGVzaXMvc3ludGhlc2lzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9zeW50aGVzaXMvc3ludGhlc2lzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT2xELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsZ0JBQWdCLENBQUM7O29GQUROLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDUC9CLGtDQUF5QjtRQUN2Qiw4QkFBOEM7UUFDMUMsOEJBQXlDO1FBRXZDLGdDQUFVO1FBQ1IsMkNBQXdFO1FBQzFFLGlCQUFXO1FBRWIsaUJBQU07UUFHTiw4QkFBeUM7UUFDdkMsbUNBQW1DO1FBQ2pDLGdEQUFrRjtRQUNwRixpQkFBVztRQUNiLGlCQUFNO1FBQ1YsaUJBQU07UUFDUixpQkFBVTs7UUFadUIsZUFBd0I7UUFBeEIsc0NBQXdCO1FBT3ZDLGVBQXdCO1FBQXhCLHNDQUF3QjtRQUNKLGVBQXdCO1FBQXhCLHNDQUF3Qjs7dUZETmpELGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN5bnRoZXNpcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zeW50aGVzaXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zeW50aGVzaXMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3ludGhlc2lzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlxuICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtY2VudGVyZWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtdHdvLXRoaXJkLWRlc2t0b3BcIj5cblxuICAgICAgICA8bGliLWNhcmQ+XG4gICAgICAgICAgPGxpYi1zeW50aGV0aWMtZHJhd2luZyBbc2NlbmFyaW9JZF09XCInZGVmYXVsdCdcIj48L2xpYi1zeW50aGV0aWMtZHJhd2luZz5cbiAgICAgICAgPC9saWItY2FyZD5cblxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1vbmUtdGhpcmQtZGVza3RvcFwiPlxuICAgICAgICA8bGliLWNhcmQgW3RpdGxlXT1cIidJbnB1dCB2YWx1ZXMnXCI+XG4gICAgICAgICAgPGxpYi1zeW50aGV0aWMtZHJhd2luZy1mb3JtIFtzY2VuYXJpb0lkXT1cIidkZWZhdWx0J1wiPjwvbGliLXN5bnRoZXRpYy1kcmF3aW5nLWZvcm0+XG4gICAgICAgIDwvbGliLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXX0=