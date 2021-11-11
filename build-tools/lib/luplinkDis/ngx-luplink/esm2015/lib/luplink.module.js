import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NanospaceRequestService, NanospaceService, NgxNanospaceClientLibModule } from 'ngx-nanospace-client-lib';
import { CardModule } from './components/card/card.module';
import ComputeLinkBudgetService from './services/compute-link-budget.service';
import { SaveLoadService } from './services/save-load.service';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from './shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "ngx-nanospace-client-lib";
const NanospaceConfig = {
    endpoint: 'https://dcas-nanostar.isae.fr/api/',
};
// This is a workaround to avoid forRoot being called twice (see: https://github.com/angular/angular/issues/38376#issuecomment-670551280)
const NgxNanospace = NgxNanospaceClientLibModule.forRoot(NanospaceConfig);
export class LuplinkModule {
    static forRoot(config) {
        console.log(config);
        return {
            ngModule: LuplinkModule,
            providers: [
                {
                    provide: FORM_TEMPLATE_TOKEN,
                    useValue: config.defaultForm,
                },
                {
                    provide: ENVIRONMENT_TOKEN,
                    useValue: Object.assign(Object.assign({}, config.environment), { isStandalone: config.isStandalone, version: '0.2.1' }),
                },
            ],
        };
    }
}
LuplinkModule.ɵfac = function LuplinkModule_Factory(t) { return new (t || LuplinkModule)(); };
LuplinkModule.ɵmod = i0.ɵɵdefineNgModule({ type: LuplinkModule });
LuplinkModule.ɵinj = i0.ɵɵdefineInjector({ providers: [ComputeLinkBudgetService, SaveLoadService, NanospaceService, NanospaceRequestService], imports: [[CommonModule, FormsModule, CardModule, HttpClientModule, NgxNanospace]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LuplinkModule, { imports: [CommonModule, FormsModule, CardModule, HttpClientModule, i1.NgxNanospaceClientLibModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LuplinkModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule, FormsModule, CardModule, HttpClientModule, NgxNanospace],
                providers: [ComputeLinkBudgetService, SaveLoadService, NanospaceService, NanospaceRequestService],
                exports: [],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVwbGluay5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL2x1cGxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sd0JBQXdCLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFPL0UsTUFBTSxlQUFlLEdBQUc7SUFDdEIsUUFBUSxFQUFFLG9DQUFvQztDQUMvQyxDQUFDO0FBRUYseUlBQXlJO0FBQ3pJLE1BQU0sWUFBWSxHQUFHLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQVExRSxNQUFNLE9BQU8sYUFBYTtJQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXFCO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVc7aUJBQzdCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsa0NBQU8sTUFBTSxDQUFDLFdBQVcsS0FBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFFO2lCQUN6RjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzBFQWhCVSxhQUFhO2lEQUFiLGFBQWE7c0RBSGIsQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsWUFEeEYsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7d0ZBSXJFLGFBQWEsY0FKZCxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0I7dUZBSXRELGFBQWE7Y0FOekIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7Z0JBQ2hGLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsQ0FBQztnQkFDakcsT0FBTyxFQUFFLEVBQUU7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmFub3NwYWNlUmVxdWVzdFNlcnZpY2UsIE5hbm9zcGFjZVNlcnZpY2UsIE5neE5hbm9zcGFjZUNsaWVudExpYk1vZHVsZSB9IGZyb20gJ25neC1uYW5vc3BhY2UtY2xpZW50LWxpYic7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IENvbXB1dGVMaW5rQnVkZ2V0U2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2NvbXB1dGUtbGluay1idWRnZXQuc2VydmljZSc7XG5pbXBvcnQgeyBTYXZlTG9hZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NhdmUtbG9hZC5zZXJ2aWNlJztcbmltcG9ydCB7IEVOVklST05NRU5UX1RPS0VOLCBGT1JNX1RFTVBMQVRFX1RPS0VOIH0gZnJvbSAnLi9zaGFyZWQvZGVwZW5kZW5jaWVzJztcblxuaW50ZXJmYWNlIEx1cGxpbmtDb25maWcge1xuICBkZWZhdWx0Rm9ybTogYW55O1xuICBlbnZpcm9ubWVudDogYW55O1xuICBpc1N0YW5kYWxvbmU/OiBib29sZWFuO1xufVxuY29uc3QgTmFub3NwYWNlQ29uZmlnID0ge1xuICBlbmRwb2ludDogJ2h0dHBzOi8vZGNhcy1uYW5vc3Rhci5pc2FlLmZyL2FwaS8nLFxufTtcblxuLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gYXZvaWQgZm9yUm9vdCBiZWluZyBjYWxsZWQgdHdpY2UgKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzgzNzYjaXNzdWVjb21tZW50LTY3MDU1MTI4MClcbmNvbnN0IE5neE5hbm9zcGFjZSA9IE5neE5hbm9zcGFjZUNsaWVudExpYk1vZHVsZS5mb3JSb290KE5hbm9zcGFjZUNvbmZpZyk7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBDYXJkTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBOZ3hOYW5vc3BhY2VdLFxuICBwcm92aWRlcnM6IFtDb21wdXRlTGlua0J1ZGdldFNlcnZpY2UsIFNhdmVMb2FkU2VydmljZSwgTmFub3NwYWNlU2VydmljZSwgTmFub3NwYWNlUmVxdWVzdFNlcnZpY2VdLFxuICBleHBvcnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTHVwbGlua01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTHVwbGlua0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8THVwbGlua01vZHVsZT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMdXBsaW5rTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGT1JNX1RFTVBMQVRFX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcuZGVmYXVsdEZvcm0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFTlZJUk9OTUVOVF9UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogeyAuLi5jb25maWcuZW52aXJvbm1lbnQsIGlzU3RhbmRhbG9uZTogY29uZmlnLmlzU3RhbmRhbG9uZSwgdmVyc2lvbjogJzAuMi4xJyB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=