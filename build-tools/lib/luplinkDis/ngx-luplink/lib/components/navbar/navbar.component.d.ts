import { ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import ComputeLinkBudgetService from '../../services/compute-link-budget.service';
import { SaveLoadService } from '../../services/save-load.service';
import { FormService } from '../../form/form.service';
import { LoggerService } from '../../shared/logger/logger.service';
import * as i0 from "@angular/core";
export declare class NavbarComponent implements OnInit {
    private environment;
    private saveLoadService;
    computeLinkBudget: ComputeLinkBudgetService;
    formService: FormService;
    logger: LoggerService;
    titleInput?: ElementRef;
    title: string;
    debugMode: boolean;
    isMenuBarVisible: boolean;
    private _isNanospaceEnabled;
    get isNanospaceEnabled(): boolean;
    set isNanospaceEnabled(value: boolean);
    angleLeft: import("@fortawesome/fontawesome-common-types").IconDefinition;
    isEditingTitle: boolean;
    pencil: import("@fortawesome/fontawesome-common-types").IconDefinition;
    loading: boolean;
    globalFormValue: FormGroup;
    constructor(environment: any, saveLoadService: SaveLoadService, computeLinkBudget: ComputeLinkBudgetService, formService: FormService, logger: LoggerService);
    onBlur($event: any): void;
    editTitle(): void;
    ngOnInit(): void;
    save(): void;
    load(files: FileList | null): void;
    compute(): void;
    static ɵfac: i0.ɵɵFactoryDef<NavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NavbarComponent, "lib-navbar", never, {}, {}, never, ["*"]>;
}
//# sourceMappingURL=navbar.component.d.ts.map