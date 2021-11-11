import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NavigationSidebarComponent } from './navigation-sidebar.component';
import * as i0 from "@angular/core";
export class NavigationSidebarModule {
}
NavigationSidebarModule.ɵfac = function NavigationSidebarModule_Factory(t) { return new (t || NavigationSidebarModule)(); };
NavigationSidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NavigationSidebarModule });
NavigationSidebarModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule, FontAwesomeModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavigationSidebarModule, { declarations: [NavigationSidebarComponent], imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule], exports: [NavigationSidebarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationSidebarModule, [{
        type: NgModule,
        args: [{
                declarations: [NavigationSidebarComponent],
                imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
                exports: [NavigationSidebarComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1zaWRlYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uLXNpZGViYXIvbmF2aWdhdGlvbi1zaWRlYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU81RSxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCOzJEQUF2Qix1QkFBdUI7K0RBSHpCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLENBQUM7d0ZBRzFELHVCQUF1QixtQkFKbkIsMEJBQTBCLGFBQy9CLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxhQUMxRCwwQkFBMEI7dUZBRXpCLHVCQUF1QjtjQUxuQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO2dCQUNyRSxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi1zaWRlYmFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05hdmlnYXRpb25TaWRlYmFyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICBleHBvcnRzOiBbTmF2aWdhdGlvblNpZGViYXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2lkZWJhck1vZHVsZSB7fVxuIl19