import * as i0 from "@angular/core";
export declare class StepbarComponent {
    get validity(): any;
    set validity(value: any);
    get step(): string;
    set step(value: string);
    private _validity;
    faCheck: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faExclamation: import("@fortawesome/fontawesome-common-types").IconDefinition;
    private _step;
    constructor();
    updateValidity(): void;
    isActive(step: string): boolean;
    static ɵfac: i0.ɵɵFactoryDef<StepbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StepbarComponent, "lib-stepbar", never, { "validity": "validity"; "step": "step"; }, {}, never, never>;
}
//# sourceMappingURL=stepbar.component.d.ts.map