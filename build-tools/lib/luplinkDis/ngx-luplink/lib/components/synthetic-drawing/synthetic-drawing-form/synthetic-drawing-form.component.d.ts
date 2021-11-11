import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SyntheticDrawingFormService } from '../synthetic-drawing-form.service';
import * as i0 from "@angular/core";
export declare class SyntheticDrawingFormComponent implements OnInit, OnDestroy {
    private formBuilder;
    private drawingService;
    drawingForm: FormGroup;
    currentScenario: any;
    drawingFormSub: any;
    LBScenarioSub: any;
    scenarioId: string;
    constructor(formBuilder: FormBuilder, drawingService: SyntheticDrawingFormService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    randomizeInputs(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SyntheticDrawingFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SyntheticDrawingFormComponent, "lib-synthetic-drawing-form", never, { "scenarioId": "scenarioId"; }, {}, never, never>;
}
//# sourceMappingURL=synthetic-drawing-form.component.d.ts.map