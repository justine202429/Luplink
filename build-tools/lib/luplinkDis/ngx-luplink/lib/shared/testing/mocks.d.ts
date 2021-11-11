import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export declare class MockFormService {
    result: BehaviorSubject<any>;
    fb: FormBuilder;
    getFormData(): FormGroup;
    initForms(): void;
    getFormData$(): Observable<FormGroup>;
}
export declare class MockComputeService {
}
export declare class MockupLoggerService {
    log(): void;
    debug(): void;
    error(): void;
    info(): void;
    warn(): void;
}
export declare class ToastrTestingModule {
    static ɵfac: i0.ɵɵFactoryDef<ToastrTestingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ToastrTestingModule, never, [typeof i1.ToastrModule], [typeof i1.ToastrModule]>;
    static ɵinj: i0.ɵɵInjectorDef<ToastrTestingModule>;
}
export declare const mockEnvironment: {
    production: boolean;
    debugMode: boolean;
    enableNanospace: boolean;
    luplinkEndpoint: string;
    version: number;
};
//# sourceMappingURL=mocks.d.ts.map