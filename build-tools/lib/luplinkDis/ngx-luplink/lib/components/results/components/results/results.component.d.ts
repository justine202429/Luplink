import { OnInit } from '@angular/core';
import { APIResult, Result, Element } from '../../../../shared/models/Results.model';
import ComputeLinkBudgetService from '../../../../services/compute-link-budget.service';
import { LoggerService } from '../../../../shared/logger/logger.service';
import { FormService } from '../../../../form/form.service';
import { SyntheticDrawingFormService } from '../../../synthetic-drawing/synthetic-drawing-form.service';
import * as i0 from "@angular/core";
export declare class ResultsComponent implements OnInit {
    private computeLinkBudget;
    private logger;
    private formService;
    private drawingService;
    fullResult2: Result;
    faCheck: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faWarn: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faError: import("@fortawesome/fontawesome-common-types").IconDefinition;
    download: import("@fortawesome/fontawesome-common-types").IconDefinition;
    linkStatus?: {
        uplink: {
            margin: number;
            status: string;
            message: string;
        };
        downlink: {
            margin: number;
            status: string;
            message: string;
        };
    };
    statusStyle: string;
    private previousCalculationResults;
    deltaUL: string[];
    deltaDL: string[];
    diagramParamsUplink: {
        powerIn: number;
        diagramComponents: any;
    };
    diagramParamsDownlink: {
        powerIn: number;
        diagramComponents: any;
    };
    showUplink: boolean;
    faAngleDown: import("@fortawesome/fontawesome-common-types").IconDefinition;
    collapsed: {
        uplink: {
            [section: string]: boolean;
        };
        downlink: {
            [section: string]: boolean;
        };
    };
    minimal: boolean;
    fullKeys2: {
        key: string;
        value: string[];
    }[];
    fullKeys: string[];
    params: {
        [key: string]: {
            label: string;
            section: string;
        };
    };
    constructor(computeLinkBudget: ComputeLinkBudgetService, logger: LoggerService, formService: FormService, drawingService: SyntheticDrawingFormService);
    ngOnInit(): void;
    computeDelta(current: Element[], previous: Element[]): string[];
    exportResults(format: string): void;
    resultsToMD(): string;
    formatResults(newResults: APIResult, params?: {
        [key: string]: {
            label: string;
            section: string;
        };
    }): Result;
    calculateLinkSummary(resultUL: any, resultDL: any): void;
    refreshDiagramComponents(results: any): {
        powerIn: number;
        diagramComponents: {
            id: string;
            component: {
                label: string;
                gain: any;
                linear: boolean;
                position: number;
                width: number;
            };
        }[];
    };
    static ɵfac: i0.ɵɵFactoryDef<ResultsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ResultsComponent, "lib-results", never, { "minimal": "minimal"; }, {}, never, never>;
}
//# sourceMappingURL=results.component.d.ts.map