import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SyntheticDrawingFormComponent } from './synthetic-drawing-form/synthetic-drawing-form.component';
import { SyntheticDrawingComponent } from './synthetic-drawing-display/synthetic-drawing.component';
import { SyntheticDrawingFormService } from './synthetic-drawing-form.service';
import { LoggerModule } from '../../shared/logger/logger.module';
import * as i0 from "@angular/core";
export class SyntheticDrawingModule {
}
SyntheticDrawingModule.ɵfac = function SyntheticDrawingModule_Factory(t) { return new (t || SyntheticDrawingModule)(); };
SyntheticDrawingModule.ɵmod = i0.ɵɵdefineNgModule({ type: SyntheticDrawingModule });
SyntheticDrawingModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        SyntheticDrawingFormService,
    ], imports: [[
            CommonModule,
            ReactiveFormsModule,
            LoggerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SyntheticDrawingModule, { declarations: [SyntheticDrawingFormComponent,
        SyntheticDrawingComponent], imports: [CommonModule,
        ReactiveFormsModule,
        LoggerModule], exports: [SyntheticDrawingFormComponent,
        SyntheticDrawingComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SyntheticDrawingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SyntheticDrawingFormComponent,
                    SyntheticDrawingComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    LoggerModule,
                ],
                exports: [
                    SyntheticDrawingFormComponent,
                    SyntheticDrawingComponent,
                ],
                providers: [
                    SyntheticDrawingFormService,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludGhldGljLWRyYXdpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9jb21wb25lbnRzL3N5bnRoZXRpYy1kcmF3aW5nL3N5bnRoZXRpYy1kcmF3aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBcUJqRSxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCOzBEQUF0QixzQkFBc0I7K0RBTHRCO1FBQ1QsMkJBQTJCO0tBQzVCLFlBWFE7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7U0FDYjt3RkFVVSxzQkFBc0IsbUJBakIvQiw2QkFBNkI7UUFDN0IseUJBQXlCLGFBR3pCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWSxhQUdaLDZCQUE2QjtRQUM3Qix5QkFBeUI7dUZBT2hCLHNCQUFzQjtjQW5CbEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWiw2QkFBNkI7b0JBQzdCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCw2QkFBNkI7b0JBQzdCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULDJCQUEyQjtpQkFDNUI7YUFFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN5bnRoZXRpY0RyYXdpbmdGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zeW50aGV0aWMtZHJhd2luZy1mb3JtL3N5bnRoZXRpYy1kcmF3aW5nLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFN5bnRoZXRpY0RyYXdpbmdDb21wb25lbnQgfSBmcm9tICcuL3N5bnRoZXRpYy1kcmF3aW5nLWRpc3BsYXkvc3ludGhldGljLWRyYXdpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFN5bnRoZXRpY0RyYXdpbmdGb3JtU2VydmljZSB9IGZyb20gJy4vc3ludGhldGljLWRyYXdpbmctZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN5bnRoZXRpY0RyYXdpbmdGb3JtQ29tcG9uZW50LFxuICAgIFN5bnRoZXRpY0RyYXdpbmdDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBMb2dnZXJNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTeW50aGV0aWNEcmF3aW5nRm9ybUNvbXBvbmVudCxcbiAgICBTeW50aGV0aWNEcmF3aW5nQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTeW50aGV0aWNEcmF3aW5nRm9ybVNlcnZpY2UsXG4gIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgU3ludGhldGljRHJhd2luZ01vZHVsZSB7IH1cbiJdfQ==