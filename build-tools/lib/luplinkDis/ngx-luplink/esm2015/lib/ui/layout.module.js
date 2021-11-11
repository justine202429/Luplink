import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './link-budget/layout.component';
import { CardModule } from '../components/card/card.module';
import { FormModule } from '../form/form.module';
import { LoggerModule } from '../shared/logger/logger.module';
import { SimpleDocumentationModule } from '../components/simple-documentation/simple-documentation.module';
import { StepbarModule } from '../components/stepbar/stepbar.module';
import { NavigationSidebarModule } from '../components/navigation-sidebar/navigation-sidebar.module';
import { ResultSidebarModule } from '../components/results/results.module';
import { routes } from './app.routes';
import { ViewComponent } from './view/view.component';
import { JSatOrbLinkComponent } from '../luplink-jsatorb-import/luplink-jsatorb-import.component';
import { JSatOrbLinkService } from '../luplink-jsatorb-import/jsatorb-link.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        JSatOrbLinkService,
    ], imports: [[
            CommonModule,
            RouterModule.forChild(routes),
            CardModule,
            FormModule,
            LoggerModule,
            SimpleDocumentationModule,
            StepbarModule,
            NavigationSidebarModule,
            ResultSidebarModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutComponent,
        ViewComponent,
        JSatOrbLinkComponent], imports: [CommonModule, i1.RouterModule, CardModule,
        FormModule,
        LoggerModule,
        SimpleDocumentationModule,
        StepbarModule,
        NavigationSidebarModule,
        ResultSidebarModule,
        ReactiveFormsModule], exports: [LayoutComponent,
        ViewComponent,
        JSatOrbLinkComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LayoutComponent,
                    ViewComponent,
                    JSatOrbLinkComponent,
                ],
                imports: [
                    CommonModule,
                    RouterModule.forChild(routes),
                    CardModule,
                    FormModule,
                    LoggerModule,
                    SimpleDocumentationModule,
                    StepbarModule,
                    NavigationSidebarModule,
                    ResultSidebarModule,
                    ReactiveFormsModule,
                ],
                exports: [
                    LayoutComponent,
                    ViewComponent,
                    JSatOrbLinkComponent,
                ],
                providers: [
                    JSatOrbLinkService,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvdWkvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFzQixZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDM0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFxQ3BGLE1BQU0sT0FBTyxZQUFZOzt3RUFBWixZQUFZO2dEQUFaLFlBQVk7cURBVlo7UUFDVCxrQkFBa0I7S0FPbkIsWUExQlE7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0IsVUFBVTtZQUNWLFVBQVU7WUFDVixZQUFZO1lBQ1oseUJBQXlCO1lBQ3pCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLG1CQUFtQjtTQUVwQjt3RkFnQlUsWUFBWSxtQkFoQ3JCLGVBQWU7UUFDZixhQUFhO1FBQ2Isb0JBQW9CLGFBR3BCLFlBQVksbUJBRVosVUFBVTtRQUNWLFVBQVU7UUFDVixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLG1CQUFtQixhQUluQixlQUFlO1FBQ2YsYUFBYTtRQUNiLG9CQUFvQjt1RkFZWCxZQUFZO2NBbEN4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUM3QixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWix5QkFBeUI7b0JBQ3pCLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtpQkFFcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixvQkFBb0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxrQkFBa0I7aUJBT25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3ksIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xpbmstYnVkZ2V0L2xheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtTW9kdWxlIH0gZnJvbSAnLi4vZm9ybS9mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2ltcGxlRG9jdW1lbnRhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2ltcGxlLWRvY3VtZW50YXRpb24vc2ltcGxlLWRvY3VtZW50YXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFN0ZXBiYXJNb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0ZXBiYXIvc3RlcGJhci5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNpZGViYXJNb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24tc2lkZWJhci9uYXZpZ2F0aW9uLXNpZGViYXIubW9kdWxlJztcbmltcG9ydCB7IFJlc3VsdFNpZGViYXJNb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5tb2R1bGUnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcbmltcG9ydCB7IFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSlNhdE9yYkxpbmtDb21wb25lbnQgfSBmcm9tICcuLi9sdXBsaW5rLWpzYXRvcmItaW1wb3J0L2x1cGxpbmstanNhdG9yYi1pbXBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEpTYXRPcmJMaW5rU2VydmljZSB9IGZyb20gJy4uL2x1cGxpbmstanNhdG9yYi1pbXBvcnQvanNhdG9yYi1saW5rLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnLi4vc2hhcmVkL0N1c3RvbVJvdXRlUmV1c2VTdHJhdGVneSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExheW91dENvbXBvbmVudCxcbiAgICBWaWV3Q29tcG9uZW50LFxuICAgIEpTYXRPcmJMaW5rQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICAgIENhcmRNb2R1bGUsXG4gICAgRm9ybU1vZHVsZSxcbiAgICBMb2dnZXJNb2R1bGUsXG4gICAgU2ltcGxlRG9jdW1lbnRhdGlvbk1vZHVsZSxcbiAgICBTdGVwYmFyTW9kdWxlLFxuICAgIE5hdmlnYXRpb25TaWRlYmFyTW9kdWxlLFxuICAgIFJlc3VsdFNpZGViYXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTGF5b3V0Q29tcG9uZW50LFxuICAgIFZpZXdDb21wb25lbnQsXG4gICAgSlNhdE9yYkxpbmtDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEpTYXRPcmJMaW5rU2VydmljZSxcbiAgICAvLyBSZXVzaW5nIHJvdXRlcyBhbGxvdyB1cyB0byBhdm9pZCByZWNyZWF0aW5nIG91ciBjb21wb25lbnRzIG9uIGVhY2ggcm91dGVyIGNoYW5nZS5cbiAgICAvLyBBbHNvLCBmYXN0ZXIgY2hhbmdlIGJldHdlZW4gdGFic1xuICAgIC8vIHtcbiAgICAvLyAgIHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSxcbiAgICAvLyAgIHVzZUNsYXNzOiBDdXN0b21Sb3V0ZVJldXNlU3RyYXRlZ3ksXG4gICAgLy8gfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge1xuXG59XG4iXX0=