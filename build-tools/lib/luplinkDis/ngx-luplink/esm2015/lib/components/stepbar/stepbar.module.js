import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggerModule } from '../../shared/logger/logger.module';
import { StepbarComponent } from './stepbar.component';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/logger/logger.module";
export class StepbarModule {
}
StepbarModule.ɵfac = function StepbarModule_Factory(t) { return new (t || StepbarModule)(); };
StepbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: StepbarModule });
StepbarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FontAwesomeModule,
            LoggerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepbarModule, { declarations: [StepbarComponent], imports: [CommonModule,
        FontAwesomeModule, i1.LoggerModule], exports: [StepbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepbarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    StepbarComponent,
                ],
                imports: [
                    CommonModule,
                    FontAwesomeModule,
                    LoggerModule.forRoot(),
                ],
                exports: [
                    StepbarComponent,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcGJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2NvbXBvbmVudHMvc3RlcGJhci9zdGVwYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSWpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFldkQsTUFBTSxPQUFPLGFBQWE7OzBFQUFiLGFBQWE7aURBQWIsYUFBYTtxREFUZjtZQUNQLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsWUFBWSxDQUFDLE9BQU8sRUFBRTtTQUN2Qjt3RkFLVSxhQUFhLG1CQVh0QixnQkFBZ0IsYUFHaEIsWUFBWTtRQUNaLGlCQUFpQiw4QkFJakIsZ0JBQWdCO3VGQUdQLGFBQWE7Y0FiekIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsWUFBWSxDQUFDLE9BQU8sRUFBRTtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL2Zvcm0vZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTeW50aGV0aWNEcmF3aW5nTW9kdWxlIH0gZnJvbSAnLi4vc3ludGhldGljLWRyYXdpbmcvc3ludGhldGljLWRyYXdpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TaWRlYmFyTW9kdWxlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi1zaWRlYmFyL25hdmlnYXRpb24tc2lkZWJhci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RlcGJhckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcGJhci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdGVwYmFyQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIExvZ2dlck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTdGVwYmFyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwYmFyTW9kdWxlIHsgfVxuIl19