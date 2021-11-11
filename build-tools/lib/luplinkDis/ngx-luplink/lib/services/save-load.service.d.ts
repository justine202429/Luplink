import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../form/form.service';
import { LoggerService } from '../shared/logger/logger.service';
import * as i0 from "@angular/core";
export declare class SaveLoadService {
    private environment;
    private logger;
    private formService;
    private fb;
    /**
     * This service handles both saving and loading of configuration files, JSatOrb config files.
     * Note: Using promises here might not be the best choice considering we have used only observable so far. At least, it is independant from the rest so we don't mix both.
     */
    constructor(environment: any, logger: LoggerService, formService: FormService, fb: FormBuilder);
    parseJSOData: (results: any) => {
        title: any;
        satellites: any;
        groundStations: any;
    } | null;
    importJSatOrbConfigFile(files: FileList | null): Observable<{
        title: string;
        satellites: any;
        groundStations: any;
    } | null>;
    formatJSOData(satellites: any): any;
    importJSOData(title: string, satellite: any, station: any): void;
    importConfigFile(files: FileList | null): void;
    generateConfig(data: any): {
        metadata: any;
        data: any;
    };
    exportConfigFile(data: any): void;
    static ɵfac: i0.ɵɵFactoryDef<SaveLoadService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SaveLoadService>;
}
//# sourceMappingURL=save-load.service.d.ts.map