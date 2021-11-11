import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SaveLoadService } from '../services/save-load.service';
import { LoggerService } from '../shared/logger/logger.service';
import { JSatOrbLinkService } from './jsatorb-link.service';
import * as i0 from "@angular/core";
export declare class JSatOrbLinkComponent implements OnInit {
    linkService: JSatOrbLinkService;
    private logger;
    private loadService;
    constructor(linkService: JSatOrbLinkService, logger: LoggerService, loadService: SaveLoadService);
    jsoData: any;
    isEmpty: boolean;
    importForm: FormGroup;
    ngOnInit(): void;
    isJSOValid(jsoData: any): boolean;
    importJSO(): void;
    static ɵfac: i0.ɵɵFactoryDef<JSatOrbLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<JSatOrbLinkComponent, "lib-luplink-jsatorb-import", never, {}, {}, never, never>;
}
//# sourceMappingURL=luplink-jsatorb-import.component.d.ts.map