import { FormControl, ValidatorFn } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FormControlWarn extends FormControl {
    warnings: any;
}
export interface WarnFn extends ValidatorFn {
}
export declare class CustomValidators {
    constructor();
    positiveLossWarningValidator: ValidatorFn;
    requiredValidator: ValidatorFn;
    validValidator: ValidatorFn;
    fieldValidator: ValidatorFn;
    static ɵfac: i0.ɵɵFactoryDef<CustomValidators, never>;
    static ɵprov: i0.ɵɵInjectableDef<CustomValidators>;
}
//# sourceMappingURL=custom-field.d.ts.map