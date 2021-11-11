import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LoggerModule } from '../../shared/logger/logger.module';
import { ResultSidebarComponent } from './components/sidebar/result-sidebar.component';
import { ResultsComponent } from './components/results/results.component';
import { SyntheticDrawingModule } from '../synthetic-drawing/synthetic-drawing.module';
import { NavigationSidebarModule } from '../navigation-sidebar/navigation-sidebar.module';
import { CardModule } from '../card/card.module';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/logger/logger.module";
export class ResultSidebarModule {
}
ResultSidebarModule.ɵfac = function ResultSidebarModule_Factory(t) { return new (t || ResultSidebarModule)(); };
ResultSidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: ResultSidebarModule });
ResultSidebarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FontAwesomeModule,
            RouterModule,
            FormsModule,
            LoggerModule.forRoot(),
            CardModule,
            SyntheticDrawingModule,
            NavigationSidebarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ResultSidebarModule, { declarations: [ResultSidebarComponent,
        ResultsComponent], imports: [CommonModule,
        FontAwesomeModule,
        RouterModule,
        FormsModule, i1.LoggerModule, CardModule,
        SyntheticDrawingModule,
        NavigationSidebarModule], exports: [ResultSidebarComponent,
        ResultsComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultSidebarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ResultSidebarComponent,
                    ResultsComponent,
                ],
                imports: [
                    CommonModule,
                    FontAwesomeModule,
                    RouterModule,
                    FormsModule,
                    LoggerModule.forRoot(),
                    CardModule,
                    SyntheticDrawingModule,
                    NavigationSidebarModule,
                ],
                exports: [
                    ResultSidebarComponent,
                    ResultsComponent,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFzQmpELE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7dURBQW5CLG1CQUFtQjsyREFmckI7WUFDUCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0QixVQUFVO1lBQ1Ysc0JBQXNCO1lBQ3RCLHVCQUF1QjtTQUN4Qjt3RkFNVSxtQkFBbUIsbUJBbEI1QixzQkFBc0I7UUFDdEIsZ0JBQWdCLGFBR2hCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFdBQVcsbUJBRVgsVUFBVTtRQUNWLHNCQUFzQjtRQUN0Qix1QkFBdUIsYUFHdkIsc0JBQXNCO1FBQ3RCLGdCQUFnQjt1RkFHUCxtQkFBbUI7Y0FwQi9CLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0QixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLFVBQVU7b0JBQ1Ysc0JBQXNCO29CQUN0Qix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL2Zvcm0vZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXN1bHRTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXIvcmVzdWx0LXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3VsdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTeW50aGV0aWNEcmF3aW5nTW9kdWxlIH0gZnJvbSAnLi4vc3ludGhldGljLWRyYXdpbmcvc3ludGhldGljLWRyYXdpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TaWRlYmFyTW9kdWxlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi1zaWRlYmFyL25hdmlnYXRpb24tc2lkZWJhci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uL2NhcmQvY2FyZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXN1bHRTaWRlYmFyQ29tcG9uZW50LFxuICAgIFJlc3VsdHNDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIExvZ2dlck1vZHVsZS5mb3JSb290KCksXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBTeW50aGV0aWNEcmF3aW5nTW9kdWxlLFxuICAgIE5hdmlnYXRpb25TaWRlYmFyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUmVzdWx0U2lkZWJhckNvbXBvbmVudCxcbiAgICBSZXN1bHRzQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN1bHRTaWRlYmFyTW9kdWxlIHsgfVxuIl19