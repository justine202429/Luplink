import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger/logger.service';
import { FormService } from '../../form/form.service';
import * as i0 from "@angular/core";
export declare class SimpleDocumentationComponent implements AfterViewInit, OnInit {
    formService: FormService;
    private logger;
    private changeDetector;
    component: string;
    formulas: {
        [id: string]: string;
    };
    form: any;
    hasGeometryBeenDrawn: boolean;
    lineLosses: number;
    eirp: number;
    geometry: string;
    systemTemperature: string;
    constructor(formService: FormService, logger: LoggerService, changeDetector: ChangeDetectorRef);
    svg: any;
    delta: any;
    alt: any;
    sr: any;
    drawGeometry(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    getFormData(component: string): any;
    updateDiagram(geo: any, precision?: number): void;
    static ɵfac: i0.ɵɵFactoryDef<SimpleDocumentationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SimpleDocumentationComponent, "lib-simple-documentation", never, { "component": "component"; }, {}, never, never>;
}
//# sourceMappingURL=simple-documentation.component.d.ts.map