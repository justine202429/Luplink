import { Component, Input } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
function CardComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 3);
    i0.ɵɵelementStart(1, "p", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 5);
    i0.ɵɵlistener("click", function CardComponent_header_1_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.collapseCard(); });
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵelement(5, "fa-icon", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("transform", "rotate-", ctx_r0.collapsed ? 0 : 180, "");
    i0.ɵɵproperty("icon", ctx_r0.faAngleDown);
} }
function CardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class CardComponent {
    constructor() {
        this.styleClass = '';
        this.isWide = false;
        this.faAngleDown = faAngleDown;
        this.collapsed = false;
    }
    collapseCard() {
        this.collapsed = !this.collapsed;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["lib-card"]], inputs: { styleClass: "styleClass", title: "title", isWide: "isWide" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [[1, "card", 3, "ngClass"], ["class", "card-header", 4, "ngIf"], ["class", "card-content", 4, "ngIf"], [1, "card-header"], [1, "card-header-title"], ["aria-label", "collapse", 1, "card-header-icon", "is-text", "is-link", 3, "click"], [1, "icon"], ["aria-hidden", "true", 3, "icon", "transform"], [1, "card-content"], [1, "content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CardComponent_header_1_Template, 6, 3, "header", 1);
        i0.ɵɵtemplate(2, CardComponent_div_2_Template, 3, 0, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.styleClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.collapsed);
    } }, directives: [i1.NgClass, i1.NgIf, i2.FaIconComponent], styles: [".card-header-title[_ngcontent-%COMP%]{margin-bottom:0}.card[_ngcontent-%COMP%]{margin-bottom:20px}.card.is-danger[_ngcontent-%COMP%]{background-color:#f14668;color:#fff}.card.is-success[_ngcontent-%COMP%]{background-color:#48c78e;color:#fff}.card.is-warning[_ngcontent-%COMP%]{background-color:#ffe08a;color:#2f4f4f}.wide[_ngcontent-%COMP%]{width:auto!important}.card-header[_ngcontent-%COMP%]{background-color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'lib-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
            }]
    }], null, { styleClass: [{
            type: Input
        }], title: [{
            type: Input
        }], isWide: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7SUNBOUQsaUNBQTBDO0lBQ3hDLDRCQUE2QjtJQUFBLFlBQVM7SUFBQSxpQkFBSTtJQUMxQyw0QkFBMkY7SUFBL0MsaUxBQXdCO0lBQ2xFLCtCQUFtQjtJQUFBLDZCQUFzRztJQUFBLGlCQUFPO0lBQ2xJLGlCQUFJO0lBQ04saUJBQVM7OztJQUpzQixlQUFTO0lBQVQsa0NBQVM7SUFFYSxlQUEwQztJQUExQyxpRkFBMEM7SUFBL0QseUNBQW9COzs7SUFJcEQsOEJBQTZDO0lBQzNDLDhCQUFzQjtJQUNwQixrQkFBeUI7SUFDM0IsaUJBQU07SUFDUixpQkFBTTs7O0FESlIsTUFBTSxPQUFPLGFBQWE7SUFMMUI7UUFNa0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUl4QixXQUFNLEdBQWEsS0FBSyxDQUFDO1FBRXpDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBRW5CLGNBQVMsR0FBWSxLQUFLLENBQUM7S0FLbkM7SUFIQyxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQzs7MEVBYlUsYUFBYTtrREFBYixhQUFhOztRQ1IxQiw4QkFBMEM7UUFDeEMsb0VBS1M7UUFFVCw4REFJTTtRQUNSLGlCQUFNOztRQWJZLHdDQUFzQjtRQUNULGVBQVc7UUFBWCxnQ0FBVztRQU9iLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZEQWhDLGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQztnQkFFaUIsVUFBVTtrQkFBekIsS0FBSztZQUVHLEtBQUs7a0JBQWIsS0FBSztZQUVVLE1BQU07a0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUFuZ2xlRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgc3R5bGVDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgcHVibGljIGlzV2lkZT86IGJvb2xlYW4gPSBmYWxzZTtcblxuICBmYUFuZ2xlRG93biA9IGZhQW5nbGVEb3duO1xuXG4gIHB1YmxpYyBjb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb2xsYXBzZUNhcmQoKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCIgW25nQ2xhc3NdPVwic3R5bGVDbGFzc1wiID5cbiAgPGhlYWRlciBjbGFzcz1cImNhcmQtaGVhZGVyXCIgKm5nSWY9XCJ0aXRsZVwiPlxuICAgIDxwIGNsYXNzPVwiY2FyZC1oZWFkZXItdGl0bGVcIj57e3RpdGxlfX08L3A+XG4gICAgPGEgY2xhc3M9XCJjYXJkLWhlYWRlci1pY29uIGlzLXRleHQgaXMtbGlua1wiIChjbGljayk9XCJjb2xsYXBzZUNhcmQoKVwiIGFyaWEtbGFiZWw9XCJjb2xsYXBzZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+PGZhLWljb24gW2ljb25dPVwiZmFBbmdsZURvd25cIiB0cmFuc2Zvcm09XCJyb3RhdGUte3tjb2xsYXBzZWQgPyAwIDogMTgwfX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2ZhLWljb24+PC9zcGFuPlxuICAgIDwvYT5cbiAgPC9oZWFkZXI+XG5cbiAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiICpuZ0lmPVwiIWNvbGxhcHNlZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19