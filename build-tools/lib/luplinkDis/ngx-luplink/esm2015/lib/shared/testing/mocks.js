/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
// Mocking the Toastr module thanks to https://github.com/scttcper/ngx-toastr/issues/339#issuecomment-508750488
import { Injectable, NgModule } from '@angular/core';
import { ToastPackage, ToastRef, ToastrModule } from 'ngx-toastr';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
// import mockPOSTData from './mockPOSTData.json';
// Mocking  FormService
export class MockFormService {
    constructor() {
        this.result = new BehaviorSubject('');
        this.fb = new FormBuilder();
    }
    getFormData() {
        // Objects.mockPOSTData.geometry
        // const geo = this.fb.group(mockPOSTData.geometry);
        return new FormBuilder().group({ test: 5, u: 3.14159265358979323846 });
    }
    initForms() { }
    getFormData$() {
        return of(new FormBuilder().group({ test: 5, u: 3.14159265358979323846 }));
    }
}
// Mocking ComputeLinkBudgetService
export class MockComputeService {
}
// Mocking LoggerService
export class MockupLoggerService {
    log() { }
    debug() { }
    error() { }
    info() { }
    warn() { }
}
class MockToastPackage extends ToastPackage {
    constructor() {
        const toastConfig = { toastClass: 'custom-toast' };
        super(1, toastConfig, 'test message', 'test title', 'show', new ToastRef(null));
    }
}
MockToastPackage.ɵfac = function MockToastPackage_Factory(t) { return new (t || MockToastPackage)(); };
MockToastPackage.ɵprov = i0.ɵɵdefineInjectable({ token: MockToastPackage, factory: MockToastPackage.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MockToastPackage, [{
        type: Injectable
    }], function () { return []; }, null); })();
export class ToastrTestingModule {
}
ToastrTestingModule.ɵfac = function ToastrTestingModule_Factory(t) { return new (t || ToastrTestingModule)(); };
ToastrTestingModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToastrTestingModule });
ToastrTestingModule.ɵinj = i0.ɵɵdefineInjector({ providers: [{ provide: ToastPackage, useClass: MockToastPackage }], imports: [[ToastrModule.forRoot()], ToastrModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToastrTestingModule, { imports: [i1.ToastrModule], exports: [ToastrModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastrTestingModule, [{
        type: NgModule,
        args: [{
                providers: [{ provide: ToastPackage, useClass: MockToastPackage }],
                imports: [ToastrModule.forRoot()],
                exports: [ToastrModule],
            }]
    }], null, null); })();
// INJECTION TOKENS
export const mockEnvironment = {
    production: false,
    debugMode: true,
    enableNanospace: true,
    luplinkEndpoint: 'http://localhost:8001',
    version: 0.0,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbHVwbGluay9zcmMvbGliL3NoYXJlZC90ZXN0aW5nL21vY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QywyQ0FBMkM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELCtHQUErRztBQUMvRyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQW9CLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFDcEYsa0RBQWtEO0FBQ2xELHVCQUF1QjtBQUN2QixNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNTLFdBQU0sR0FBeUIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsT0FBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFXekIsQ0FBQztJQVZRLFdBQVc7UUFDaEIsZ0NBQWdDO1FBQ2hDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDTSxTQUFTLEtBQVUsQ0FBQztJQUVwQixZQUFZO1FBQ2pCLE9BQU8sRUFBRSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztDQUNGO0FBQ0QsbUNBQW1DO0FBQ25DLE1BQU0sT0FBTyxrQkFBa0I7Q0FBRztBQUNsQyx3QkFBd0I7QUFDeEIsTUFBTSxPQUFPLG1CQUFtQjtJQUN2QixHQUFHLEtBQUksQ0FBQztJQUNSLEtBQUssS0FBSSxDQUFDO0lBQ1YsS0FBSyxLQUFJLENBQUM7SUFDVixJQUFJLEtBQUksQ0FBQztJQUNULElBQUksS0FBSSxDQUFDO0NBQ2pCO0FBRUQsTUFDTSxnQkFBaUIsU0FBUSxZQUFZO0lBQ3pDO1FBQ0UsTUFBTSxXQUFXLEdBQUcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLENBQUM7UUFDbkQsS0FBSyxDQUFDLENBQUMsRUFBb0IsV0FBVyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksUUFBUSxDQUFDLElBQUssQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQzs7Z0ZBSkcsZ0JBQWdCO3dEQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FEckIsVUFBVTs7QUFhWCxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3VEQUFuQixtQkFBbUI7NERBSm5CLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLFlBQ3pELENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQ3ZCLFlBQVk7d0ZBRVgsbUJBQW1CLDBDQUZwQixZQUFZO3VGQUVYLG1CQUFtQjtjQUwvQixRQUFRO2VBQUM7Z0JBQ1IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNsRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4Qjs7QUFHRCxtQkFBbUI7QUFDbkIsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsZUFBZSxFQUFFLElBQUk7SUFDckIsZUFBZSxFQUFFLHVCQUF1QjtJQUN4QyxPQUFPLEVBQUUsR0FBRztDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuLy8gTW9ja2luZyB0aGUgVG9hc3RyIG1vZHVsZSB0aGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NjdHRjcGVyL25neC10b2FzdHIvaXNzdWVzLzMzOSNpc3N1ZWNvbW1lbnQtNTA4NzUwNDg4XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RQYWNrYWdlLCBUb2FzdFJlZiwgVG9hc3RyTW9kdWxlIH0gZnJvbSAnbmd4LXRvYXN0cic7XG4vLyBpbXBvcnQgbW9ja1BPU1REYXRhIGZyb20gJy4vbW9ja1BPU1REYXRhLmpzb24nO1xuLy8gTW9ja2luZyAgRm9ybVNlcnZpY2VcbmV4cG9ydCBjbGFzcyBNb2NrRm9ybVNlcnZpY2Uge1xuICBwdWJsaWMgcmVzdWx0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBmYiA9IG5ldyBGb3JtQnVpbGRlcigpO1xuICBwdWJsaWMgZ2V0Rm9ybURhdGEoKTogRm9ybUdyb3VwIHtcbiAgICAvLyBPYmplY3RzLm1vY2tQT1NURGF0YS5nZW9tZXRyeVxuICAgIC8vIGNvbnN0IGdlbyA9IHRoaXMuZmIuZ3JvdXAobW9ja1BPU1REYXRhLmdlb21ldHJ5KTtcbiAgICByZXR1cm4gbmV3IEZvcm1CdWlsZGVyKCkuZ3JvdXAoeyB0ZXN0OiA1LCB1OiAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2IH0pO1xuICB9XG4gIHB1YmxpYyBpbml0Rm9ybXMoKTogdm9pZCB7fVxuXG4gIHB1YmxpYyBnZXRGb3JtRGF0YSQoKTogT2JzZXJ2YWJsZTxGb3JtR3JvdXA+IHtcbiAgICByZXR1cm4gb2YobmV3IEZvcm1CdWlsZGVyKCkuZ3JvdXAoeyB0ZXN0OiA1LCB1OiAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2IH0pKTtcbiAgfVxufVxuLy8gTW9ja2luZyBDb21wdXRlTGlua0J1ZGdldFNlcnZpY2VcbmV4cG9ydCBjbGFzcyBNb2NrQ29tcHV0ZVNlcnZpY2Uge31cbi8vIE1vY2tpbmcgTG9nZ2VyU2VydmljZVxuZXhwb3J0IGNsYXNzIE1vY2t1cExvZ2dlclNlcnZpY2Uge1xuICBwdWJsaWMgbG9nKCkge31cbiAgcHVibGljIGRlYnVnKCkge31cbiAgcHVibGljIGVycm9yKCkge31cbiAgcHVibGljIGluZm8oKSB7fVxuICBwdWJsaWMgd2FybigpIHt9XG59XG5cbkBJbmplY3RhYmxlKClcbmNsYXNzIE1vY2tUb2FzdFBhY2thZ2UgZXh0ZW5kcyBUb2FzdFBhY2thZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0b2FzdENvbmZpZyA9IHsgdG9hc3RDbGFzczogJ2N1c3RvbS10b2FzdCcgfTtcbiAgICBzdXBlcigxLCA8SW5kaXZpZHVhbENvbmZpZz50b2FzdENvbmZpZywgJ3Rlc3QgbWVzc2FnZScsICd0ZXN0IHRpdGxlJywgJ3Nob3cnLCBuZXcgVG9hc3RSZWYobnVsbCEpKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFRvYXN0UGFja2FnZSwgdXNlQ2xhc3M6IE1vY2tUb2FzdFBhY2thZ2UgfV0sXG4gIGltcG9ydHM6IFtUb2FzdHJNb2R1bGUuZm9yUm9vdCgpXSxcbiAgZXhwb3J0czogW1RvYXN0ck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0clRlc3RpbmdNb2R1bGUge31cblxuLy8gSU5KRUNUSU9OIFRPS0VOU1xuZXhwb3J0IGNvbnN0IG1vY2tFbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2UsXG4gIGRlYnVnTW9kZTogdHJ1ZSxcbiAgZW5hYmxlTmFub3NwYWNlOiB0cnVlLFxuICBsdXBsaW5rRW5kcG9pbnQ6ICdodHRwOi8vbG9jYWxob3N0OjgwMDEnLFxuICB2ZXJzaW9uOiAwLjAsXG59O1xuIl19