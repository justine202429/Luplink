import { FormService } from '../form/form.service';
import { SaveLoadService } from '../services/save-load.service';
import { LoggerService } from '../shared/logger/logger.service';
import * as i0 from "@angular/core";
export declare class JSatOrbLinkService {
    private formService;
    private logger;
    private loadService;
    private environment;
    private jsoData;
    private jsoData$;
    private jsoMockData;
    private luplinkFormSave;
    constructor(formService: FormService, logger: LoggerService, loadService: SaveLoadService, environment: any);
    updateEndpoint(newEndpoint: string): void;
    updateJSOData(data: any): void;
    getJSOData(): any;
    getJSOData$(): any;
    initService(): void;
    refreshLuplink(): void;
    static ɵfac: i0.ɵɵFactoryDef<JSatOrbLinkService, never>;
    static ɵprov: i0.ɵɵInjectableDef<JSatOrbLinkService>;
}
//# sourceMappingURL=jsatorb-link.service.d.ts.map