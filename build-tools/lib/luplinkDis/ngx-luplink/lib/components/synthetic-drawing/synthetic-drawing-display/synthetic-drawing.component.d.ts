import { AfterViewInit } from '@angular/core';
import { Point } from '../../../shared/models/LinkBudgetScenario.model';
import { LoggerService } from '../../../shared/logger/logger.service';
import { SyntheticDrawingFormService } from '../synthetic-drawing-form.service';
import * as i0 from "@angular/core";
export declare class SyntheticDrawingComponent implements AfterViewInit {
    private drawingService;
    private logger;
    private height;
    private width;
    private margin;
    private x;
    private y;
    diagram: any;
    graphPoints: Point[];
    private budgetText;
    private mainSVG;
    private labels;
    private verticalLinesGroup;
    linkType: 'uplink' | 'downlink';
    scenarioId: string;
    displayGraph: boolean;
    get powerIn(): number;
    set powerIn(value: number);
    private _powerIn;
    get components(): any;
    set components(value: any);
    private _components;
    constructor(drawingService: SyntheticDrawingFormService, logger: LoggerService);
    private updateLBScenario;
    ngAfterViewInit(): void;
    private updateLabels;
    private initGraph;
    private updateGraphData;
    static ɵfac: i0.ɵɵFactoryDef<SyntheticDrawingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SyntheticDrawingComponent, "lib-synthetic-drawing", never, { "linkType": "linkType"; "scenarioId": "scenarioId"; "displayGraph": "displayGraph"; "powerIn": "powerIn"; "components": "components"; }, {}, never, never>;
}
//# sourceMappingURL=synthetic-drawing.component.d.ts.map