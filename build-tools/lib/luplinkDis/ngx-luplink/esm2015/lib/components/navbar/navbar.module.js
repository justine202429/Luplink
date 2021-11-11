import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { LoggerModule } from '../../shared/logger/logger.module';
import * as i0 from "@angular/core";
export class NavbarModule {
}
NavbarModule.ɵfac = function NavbarModule_Factory(t) { return new (t || NavbarModule)(); };
NavbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NavbarModule });
NavbarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            FontAwesomeModule,
            RouterModule,
            FormsModule,
            LoggerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavbarModule, { declarations: [NavbarComponent], imports: [CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule,
        FormsModule,
        LoggerModule], exports: [NavbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NavbarComponent,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    FontAwesomeModule,
                    RouterModule,
                    FormsModule,
                    LoggerModule,
                ],
                exports: [
                    NavbarComponent,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQWtCakUsTUFBTSxPQUFPLFlBQVk7O3dFQUFaLFlBQVk7Z0RBQVosWUFBWTtvREFaZDtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWTtTQUNiO3dGQUtVLFlBQVksbUJBZHJCLGVBQWUsYUFHZixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVksYUFHWixlQUFlO3VGQUdOLFlBQVk7Y0FoQnhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO2lCQUNoQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uLy4uL2Zvcm0vZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTG9nZ2VyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJNb2R1bGUgeyB9XG4iXX0=