import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxNanospaceClientLibModule } from 'ngx-nanospace-client-lib';
import { LoggerModule } from '../../shared/logger/logger.module';
import { NavigationSidebarModule } from '../navigation-sidebar/navigation-sidebar.module';
import { CardModule } from '../card/card.module';
import { WelcomeComponent } from './welcome.component';
import { FormModule } from '../../form/form.module';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/logger/logger.module";
export class WelcomeModule {
}
WelcomeModule.ɵfac = function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); };
WelcomeModule.ɵmod = i0.ɵɵdefineNgModule({ type: WelcomeModule });
WelcomeModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
    // NanospaceRequestService,
    // NanospaceService,
    ], imports: [[
            CommonModule,
            ReactiveFormsModule,
            FontAwesomeModule,
            LoggerModule.forRoot(),
            FormModule,
            CardModule,
            NavigationSidebarModule,
            NgxNanospaceClientLibModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WelcomeModule, { declarations: [WelcomeComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule, i1.LoggerModule, FormModule,
        CardModule,
        NavigationSidebarModule,
        NgxNanospaceClientLibModule], exports: [WelcomeComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WelcomeModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    WelcomeComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FontAwesomeModule,
                    LoggerModule.forRoot(),
                    FormModule,
                    CardModule,
                    NavigationSidebarModule,
                    NgxNanospaceClientLibModule,
                ],
                exports: [
                    WelcomeComponent,
                ],
                providers: [
                // NanospaceRequestService,
                // NanospaceService,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsT0FBTyxFQUE2QywyQkFBMkIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUF3QnBELE1BQU0sT0FBTyxhQUFhOzswRUFBYixhQUFhO2lEQUFiLGFBQWE7c0RBTGI7SUFDVCwyQkFBMkI7SUFDM0Isb0JBQW9CO0tBQ3JCLFlBaEJRO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0QixVQUFVO1lBQ1YsVUFBVTtZQUNWLHVCQUF1QjtZQUN2QiwyQkFBMkI7U0FDNUI7d0ZBU1UsYUFBYSxtQkFwQnRCLGdCQUFnQixhQUdoQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGlCQUFpQixtQkFFakIsVUFBVTtRQUNWLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsMkJBQTJCLGFBRzNCLGdCQUFnQjt1RkFPUCxhQUFhO2NBdEJ6QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVix1QkFBdUI7b0JBQ3ZCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFO2dCQUNULDJCQUEyQjtnQkFDM0Isb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hbm9zcGFjZVJlcXVlc3RTZXJ2aWNlLCBOYW5vc3BhY2VTZXJ2aWNlLCBOZ3hOYW5vc3BhY2VDbGllbnRMaWJNb2R1bGUgfSBmcm9tICduZ3gtbmFub3NwYWNlLWNsaWVudC1saWInO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mb3JtL2Zvcm0uc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3ludGhldGljRHJhd2luZ01vZHVsZSB9IGZyb20gJy4uL3N5bnRoZXRpYy1kcmF3aW5nL3N5bnRoZXRpYy1kcmF3aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2lkZWJhck1vZHVsZSB9IGZyb20gJy4uL25hdmlnYXRpb24tc2lkZWJhci9uYXZpZ2F0aW9uLXNpZGViYXIubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tICcuL3dlbGNvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Nb2R1bGUgfSBmcm9tICcuLi8uLi9mb3JtL2Zvcm0ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV2VsY29tZUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIExvZ2dlck1vZHVsZS5mb3JSb290KCksXG4gICAgRm9ybU1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIE5hdmlnYXRpb25TaWRlYmFyTW9kdWxlLFxuICAgIE5neE5hbm9zcGFjZUNsaWVudExpYk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFdlbGNvbWVDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIE5hbm9zcGFjZVJlcXVlc3RTZXJ2aWNlLFxuICAgIC8vIE5hbm9zcGFjZVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFdlbGNvbWVNb2R1bGUgeyB9XG4iXX0=