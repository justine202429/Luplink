import { Component } from '@angular/core';
import ComputeLinkBudgetService from '../../../../services/compute-link-budget.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../results/results.component";
function ResultSidebarComponent_lib_results_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-results", 2);
} if (rf & 2) {
    i0.ɵɵproperty("minimal", true);
} }
function ResultSidebarComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ResultSidebarComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.computeLinkBudget.toggleResults(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.computeLinkBudget.displayingResults ? ">" : "<", " ");
} }
export class ResultSidebarComponent {
    constructor(computeLinkBudget) {
        this.computeLinkBudget = computeLinkBudget;
    }
}
ResultSidebarComponent.ɵfac = function ResultSidebarComponent_Factory(t) { return new (t || ResultSidebarComponent)(i0.ɵɵdirectiveInject(ComputeLinkBudgetService)); };
ResultSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultSidebarComponent, selectors: [["lib-result-sidebar"]], decls: 2, vars: 2, consts: [[3, "minimal", 4, "ngIf"], ["class", "button", "style", "position: fixed; bottom: 10px; right: 10px", 3, "click", 4, "ngIf"], [3, "minimal"], [1, "button", 2, "position", "fixed", "bottom", "10px", "right", "10px", 3, "click"]], template: function ResultSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ResultSidebarComponent_lib_results_0_Template, 1, 1, "lib-results", 0);
        i0.ɵɵtemplate(1, ResultSidebarComponent_button_1_Template, 2, 1, "button", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.computeLinkBudget.displayingResults);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.computeLinkBudget.computeLayout == "sidebar");
    } }, directives: [i1.NgIf, i2.ResultsComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultSidebarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-result-sidebar',
                templateUrl: './result-sidebar.component.html',
                styleUrls: ['./result-sidebar.component.scss'],
            }]
    }], function () { return [{ type: ComputeLinkBudgetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9jb21wb25lbnRzL3Jlc3VsdHMvY29tcG9uZW50cy9zaWRlYmFyL3Jlc3VsdC1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9yZXN1bHRzL2NvbXBvbmVudHMvc2lkZWJhci9yZXN1bHQtc2lkZWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sd0JBQXdCLE1BQU0sa0RBQWtELENBQUM7Ozs7O0lDR3hGLGlDQUE2Rjs7SUFBaEYsOEJBQWdCOzs7O0lBSTdCLGlDQUN3RztJQUE1QyxzS0FBUyx3Q0FBaUMsSUFBQztJQUNyRyxZQUEyRDtJQUFBLGlCQUFTOzs7SUFBcEUsZUFBMkQ7SUFBM0QsdUZBQTJEOztBREY3RCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQW1CLGlCQUEyQztRQUEzQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO0lBQUksQ0FBQzs7NEZBRHhELHNCQUFzQix1QkFQNUIsd0JBQXdCOzJEQU9sQixzQkFBc0I7UUNKbkMsdUZBQTZGO1FBSTdGLDZFQUVzRTs7UUFOdkMsOERBQThDO1FBSzFFLGVBQXVEO1FBQXZELHVFQUF1RDs7dUZERDdDLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7c0NBTk0sd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgQ29tcHV0ZUxpbmtCdWRnZXRTZXJ2aWNlIGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbXB1dGUtbGluay1idWRnZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1yZXN1bHQtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN1bHQtc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3VsdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdFNpZGViYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcHV0ZUxpbmtCdWRnZXQ6IENvbXB1dGVMaW5rQnVkZ2V0U2VydmljZSkgeyB9XG59XG4iLCI8IS0tIDxkaXYgaWQ9XCJzaWRlYmFyLXJlc3VsdFwiIGNsYXNzPVwiY29sdW1uIGlzLW5hcnJvdyBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19zbGlkZUluUmlnaHRcIiAtLT5cbjwhLS0gKm5nSWY9XCJ0aGlzLmNvbXB1dGVMaW5rQnVkZ2V0LmRpc3BsYXlpbmdSZXN1bHRzICYmIHRoaXMuY29tcHV0ZUxpbmtCdWRnZXQuY29tcHV0ZUxheW91dCA9PSAnc2lkZWJhcidcIj4gLS0+XG48IS0tIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbiBwdC0wIHBiLTBcIj4gLS0+XG48IS0tIDxhc2lkZSBjbGFzcz1cInJlc3VsdFwiPiAtLT5cbjxsaWItcmVzdWx0cyBbbWluaW1hbF09XCJ0cnVlXCIgKm5nSWY9XCJ0aGlzLmNvbXB1dGVMaW5rQnVkZ2V0LmRpc3BsYXlpbmdSZXN1bHRzXCI+PC9saWItcmVzdWx0cz5cbjwhLS0gPC9hc2lkZT4gLS0+XG48IS0tIDwvc2VjdGlvbj4gLS0+XG48IS0tIDwvZGl2PiAtLT5cbjxidXR0b24gY2xhc3M9XCJidXR0b25cIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAxMHB4OyByaWdodDogMTBweFwiXG4gICpuZ0lmPVwidGhpcy5jb21wdXRlTGlua0J1ZGdldC5jb21wdXRlTGF5b3V0ID09ICdzaWRlYmFyJ1wiIChjbGljayk9XCJjb21wdXRlTGlua0J1ZGdldC50b2dnbGVSZXN1bHRzKClcIj5cbiAge3sgdGhpcy5jb21wdXRlTGlua0J1ZGdldC5kaXNwbGF5aW5nUmVzdWx0cyA/IFwiPlwiIDogXCI8XCIgfX0gPC9idXR0b24+Il19