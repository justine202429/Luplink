import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './component/form.component';
import { LoggerModule } from '../shared/logger/logger.module';
import { LoggerService } from '../shared/logger/logger.service';
import { FormService } from './form.service';
import * as i0 from "@angular/core";
import * as i1 from "../shared/logger/logger.module";
export class FormModule {
}
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormModule });
FormModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        FormService,
        LoggerService,
    ], imports: [[
            CommonModule,
            ReactiveFormsModule,
            FontAwesomeModule,
            LoggerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormModule, { declarations: [FormComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule, i1.LoggerModule], exports: [FormComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FormComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FontAwesomeModule,
                    LoggerModule.forRoot(),
                ],
                exports: [
                    FormComponent,
                ],
                providers: [
                    FormService,
                    LoggerService,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2Zvcm0vZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFvQjdDLE1BQU0sT0FBTyxVQUFVOztvRUFBVixVQUFVOzhDQUFWLFVBQVU7bURBTFY7UUFDVCxXQUFXO1FBQ1gsYUFBYTtLQUNkLFlBWlE7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixZQUFZLENBQUMsT0FBTyxFQUFFO1NBQ3ZCO3dGQVNVLFVBQVUsbUJBaEJuQixhQUFhLGFBR2IsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixpQkFBaUIsOEJBSWpCLGFBQWE7dUZBT0osVUFBVTtjQWxCdEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixZQUFZLENBQUMsT0FBTyxFQUFFO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsV0FBVztvQkFDWCxhQUFhO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbG9nZ2VyL2xvZ2dlci5tb2R1bGUnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL2Zvcm0uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZvcm1Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBMb2dnZXJNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRm9ybVNlcnZpY2UsXG4gICAgTG9nZ2VyU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybU1vZHVsZSB7XG5cbn1cbiJdfQ==