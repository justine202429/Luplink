import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KatexModule } from 'ng-katex';
import { LoggerModule } from '../../shared/logger/logger.module';
import { SimpleDocumentationComponent } from './simple-documentation.component';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/logger/logger.module";
export class SimpleDocumentationModule {
}
SimpleDocumentationModule.ɵfac = function SimpleDocumentationModule_Factory(t) { return new (t || SimpleDocumentationModule)(); };
SimpleDocumentationModule.ɵmod = i0.ɵɵdefineNgModule({ type: SimpleDocumentationModule });
SimpleDocumentationModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FontAwesomeModule,
            FormsModule,
            LoggerModule.forRoot(),
            KatexModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SimpleDocumentationModule, { declarations: [SimpleDocumentationComponent], imports: [CommonModule,
        FontAwesomeModule,
        FormsModule, i1.LoggerModule, KatexModule], exports: [SimpleDocumentationComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SimpleDocumentationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SimpleDocumentationComponent,
                ],
                imports: [
                    CommonModule,
                    FontAwesomeModule,
                    FormsModule,
                    LoggerModule.forRoot(),
                    KatexModule,
                ],
                exports: [
                    SimpleDocumentationComponent,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWRvY3VtZW50YXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9jb21wb25lbnRzL3NpbXBsZS1kb2N1bWVudGF0aW9uL3NpbXBsZS1kb2N1bWVudGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSWpFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFpQmhGLE1BQU0sT0FBTyx5QkFBeUI7O2tHQUF6Qix5QkFBeUI7NkRBQXpCLHlCQUF5QjtpRUFYM0I7WUFDUCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RCLFdBQVc7U0FDWjt3RkFLVSx5QkFBeUIsbUJBYmxDLDRCQUE0QixhQUc1QixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFdBQVcsbUJBRVgsV0FBVyxhQUdYLDRCQUE0Qjt1RkFHbkIseUJBQXlCO2NBZnJDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osNEJBQTRCO2lCQUM3QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsNEJBQTRCO2lCQUM3QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEthdGV4TW9kdWxlIH0gZnJvbSAnbmcta2F0ZXgnO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mb3JtL2Zvcm0uc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3ludGhldGljRHJhd2luZ01vZHVsZSB9IGZyb20gJy4uL3N5bnRoZXRpYy1kcmF3aW5nL3N5bnRoZXRpYy1kcmF3aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2lkZWJhck1vZHVsZSB9IGZyb20gJy4uL25hdmlnYXRpb24tc2lkZWJhci9uYXZpZ2F0aW9uLXNpZGViYXIubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNpbXBsZURvY3VtZW50YXRpb25Db21wb25lbnQgfSBmcm9tICcuL3NpbXBsZS1kb2N1bWVudGF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNpbXBsZURvY3VtZW50YXRpb25Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTG9nZ2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBLYXRleE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNpbXBsZURvY3VtZW50YXRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZURvY3VtZW50YXRpb25Nb2R1bGUgeyB9XG4iXX0=