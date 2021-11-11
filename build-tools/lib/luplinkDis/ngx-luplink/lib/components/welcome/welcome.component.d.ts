import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoggerService } from '../../shared/logger/logger.service';
import { SaveLoadService } from '../../services/save-load.service';
import { FormService } from '../../form/form.service';
import * as i0 from "@angular/core";
export declare class WelcomeComponent implements OnInit {
    environment: any;
    private logger;
    private saveLoadService;
    private formService;
    private fb;
    /**
     * Import Data from JSatOrb, select satellites and groundstations to study. Maybe also import from nanospace.
     */
    constructor(environment: any, logger: LoggerService, saveLoadService: SaveLoadService, formService: FormService, fb: FormBuilder);
    selectedSatellite: any;
    selectedStation: any;
    jsoData: {
        title: string;
        satellites: any;
        groundStations: any;
    };
    debugMode: any;
    jsoForm: FormGroup;
    ngOnInit(): void;
    importJSatOrbData(files: FileList | null): void;
    buildForm(data?: any): FormGroup;
    useSelectedData(): void;
    static ɵfac: i0.ɵɵFactoryDef<WelcomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<WelcomeComponent, "lib-welcome", never, {}, {}, never, never>;
}
//# sourceMappingURL=welcome.component.d.ts.map