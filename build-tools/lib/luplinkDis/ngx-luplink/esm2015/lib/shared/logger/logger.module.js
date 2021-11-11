import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoggerService } from './logger.service';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class LoggerModule {
    static forRoot() {
        return {
            ngModule: LoggerModule,
            providers: [
                { provide: LoggerService },
            ],
        };
    }
}
LoggerModule.ɵfac = function LoggerModule_Factory(t) { return new (t || LoggerModule)(); };
LoggerModule.ɵmod = i0.ɵɵdefineNgModule({ type: LoggerModule });
LoggerModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        LoggerService,
    ], imports: [[
            CommonModule,
            BrowserAnimationsModule,
            ToastrModule.forRoot({
                positionClass: 'toast-bottom-right',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoggerModule, { imports: [CommonModule,
        BrowserAnimationsModule, i1.ToastrModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoggerModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    ToastrModule.forRoot({
                        positionClass: 'toast-bottom-right',
                    }),
                ],
                providers: [
                    LoggerService,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvc2hhcmVkL2xvZ2dlci9sb2dnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBZ0JqRCxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFO2FBQzNCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3dFQVJVLFlBQVk7Z0RBQVosWUFBWTtxREFKWjtRQUNULGFBQWE7S0FDZCxZQVRRO1lBQ1AsWUFBWTtZQUNaLHVCQUF1QjtZQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDO2dCQUNuQixhQUFhLEVBQUUsb0JBQW9CO2FBQ3BDLENBQUM7U0FDSDt3RkFLVSxZQUFZLGNBVnJCLFlBQVk7UUFDWix1QkFBdUI7dUZBU2QsWUFBWTtjQWR4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osdUJBQXVCO29CQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDO3dCQUNuQixhQUFhLEVBQUUsb0JBQW9CO3FCQUNwQyxDQUFDO2lCQUNIO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxhQUFhO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVG9hc3RyTW9kdWxlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCAvLyBSZXF1aXJlZCBieSBUb2FzdHJcbiAgICBUb2FzdHJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBwb3NpdGlvbkNsYXNzOiAndG9hc3QtYm90dG9tLXJpZ2h0JyxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTG9nZ2VyU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMb2dnZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExvZ2dlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IExvZ2dlclNlcnZpY2UgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19