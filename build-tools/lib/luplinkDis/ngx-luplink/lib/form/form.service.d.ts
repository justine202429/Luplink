import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomValidators } from '../shared/custom-field';
import { LoggerService } from '../shared/logger/logger.service';
import { Form } from '../shared/models/Form.model';
import * as i0 from "@angular/core";
export declare class FormService {
    private template;
    private fb;
    private customValidators;
    private logger;
    FormsTemplate: any;
    /**
     * This service keeps tracks of everything form-related.
     * It listens for forms changes and returns the form Data to the computeLinkBudget service
     */
    globalForm: FormGroup;
    erroneousSection: BehaviorSubject<string>;
    title: string;
    isInterlink: boolean;
    isCurrentFormSaved: boolean;
    private _isInitialized;
    get isInitialized(): boolean;
    set isInitialized(value: boolean);
    constructor(template: any, fb: FormBuilder, customValidators: CustomValidators, logger: LoggerService);
    addForm(formGroup: FormGroup, name: string, parent?: string): void;
    getComponentValues(componentId: string, link?: string, parentId?: string): any | undefined;
    patchForm(parentName: string, groupName: string, formGroup: FormGroup): void;
    importForm(results: any): void;
    getFormData$(): Observable<any>;
    getFormData(): any;
    initForms(): void;
    createFormGroup(componentTemplate: Form): FormGroup;
    static ɵfac: i0.ɵɵFactoryDef<FormService, never>;
    static ɵprov: i0.ɵɵInjectableDef<FormService>;
}
//# sourceMappingURL=form.service.d.ts.map