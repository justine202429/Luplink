import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggerModule } from '../../shared/logger/logger.module';
import { SyntheticDrawingModule } from '../synthetic-drawing/synthetic-drawing.module';
import { CardModule } from '../card/card.module';
import { SynthesisComponent } from './synthesis.component';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/logger/logger.module";
export class SynthesisModule {
}
SynthesisModule.ɵfac = function SynthesisModule_Factory(t) { return new (t || SynthesisModule)(); };
SynthesisModule.ɵmod = i0.ɵɵdefineNgModule({ type: SynthesisModule });
SynthesisModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FontAwesomeModule,
            CardModule,
            SyntheticDrawingModule,
            LoggerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SynthesisModule, { declarations: [SynthesisComponent], imports: [CommonModule,
        FontAwesomeModule,
        CardModule,
        SyntheticDrawingModule, i1.LoggerModule], exports: [SynthesisComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SynthesisModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SynthesisComponent,
                ],
                imports: [
                    CommonModule,
                    FontAwesomeModule,
                    CardModule,
                    SyntheticDrawingModule,
                    LoggerModule.forRoot(),
                ],
                exports: [
                    SynthesisComponent,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludGhlc2lzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9zeW50aGVzaXMvc3ludGhlc2lzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBaUIzRCxNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTttREFBZixlQUFlO3VEQVhqQjtZQUNQLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsVUFBVTtZQUNWLHNCQUFzQjtZQUN0QixZQUFZLENBQUMsT0FBTyxFQUFFO1NBQ3ZCO3dGQUtVLGVBQWUsbUJBYnhCLGtCQUFrQixhQUdsQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixzQkFBc0IsOEJBSXRCLGtCQUFrQjt1RkFHVCxlQUFlO2NBZjNCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFVBQVU7b0JBQ1Ysc0JBQXNCO29CQUN0QixZQUFZLENBQUMsT0FBTyxFQUFFO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO2lCQUNuQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZm9ybS9mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2xvZ2dlci9sb2dnZXIubW9kdWxlJztcbmltcG9ydCB7IFN5bnRoZXRpY0RyYXdpbmdNb2R1bGUgfSBmcm9tICcuLi9zeW50aGV0aWMtZHJhd2luZy9zeW50aGV0aWMtZHJhd2luZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNpZGViYXJNb2R1bGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uLXNpZGViYXIvbmF2aWdhdGlvbi1zaWRlYmFyLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTeW50aGVzaXNDb21wb25lbnQgfSBmcm9tICcuL3N5bnRoZXNpcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTeW50aGVzaXNDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBTeW50aGV0aWNEcmF3aW5nTW9kdWxlLFxuICAgIExvZ2dlck1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTeW50aGVzaXNDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN5bnRoZXNpc01vZHVsZSB7IH1cbiJdfQ==