import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../../form/form.service';
import { Form } from '../../shared/models/Form.model';
import { LoggerService } from '../../shared/logger/logger.service';
import * as i0 from "@angular/core";
export declare class LayoutComponent implements OnInit {
    private environment;
    private FormsTemplate;
    formService: FormService;
    private route;
    logger: LoggerService;
    isStandalone: boolean;
    constructor(environment: any, FormsTemplate: any, formService: FormService, route: ActivatedRoute, logger: LoggerService);
    private inventory;
    validity: any;
    formValidity: any;
    pageValidity: any;
    componentName: string;
    componentId: string;
    currentStep: string;
    currentTemplate: Form;
    currentAntenna: Form;
    atmosphere: Form;
    antennaName: string;
    hasAntennaCard: boolean;
    hasAtmCard: boolean;
    templates: {
        [key: string]: {
            name: string;
            step: string;
            form: Form;
            atm?: Form;
            antenna?: Form;
        };
    };
    ngOnInit(): void;
    handleError(event: {
        id: string;
        validity: 'valid' | 'invalid' | 'none';
    }): void;
    refreshPageValidity(pageId: string): void;
    updateStepsValidity(id: string): void;
    static ɵfac: i0.ɵɵFactoryDef<LayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayoutComponent, "lib-layout", never, {}, {}, never, never>;
}
//# sourceMappingURL=layout.component.d.ts.map