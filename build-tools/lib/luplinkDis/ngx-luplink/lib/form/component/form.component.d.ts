import { EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { LoggerService } from '../../shared/logger/logger.service';
import { AntennaField, Field, Form } from '../../shared/models/Form.model';
import { FormService } from '../form.service';
import { FormControlWarn } from '../../shared/custom-field';
import * as i0 from "@angular/core";
export declare class FormComponent {
    private formService;
    logger: LoggerService;
    set formTemplate(value: Form);
    get formTemplate(): Form;
    private _formTemplate;
    groupId?: string;
    isSubform?: boolean;
    isStandalone?: boolean;
    formStatus: EventEmitter<{
        id: string;
        validity: 'valid' | 'invalid' | 'none';
    }>;
    FormsTemplate: any;
    localForm: FormGroup;
    faInterrogation: import("@fortawesome/fontawesome-common-types").IconDefinition;
    componentName: string;
    parentName: string;
    displayedImage: string;
    hasImage: boolean;
    validity: 'valid' | 'invalid' | 'none';
    private localSubscription;
    private globalSubscription;
    constructor(formService: FormService, logger: LoggerService);
    asField(field: Field | AntennaField): Field;
    asFormWarn(control: AbstractControl | null): FormControlWarn;
    subscribeToChanges(): void;
    unsubscribeToChanges(): void;
    geometrySubscribe(): void;
    changeComponent(componentTemplate: Form): void;
    getWarningMessage(control: FormControlWarn | null): string;
    getErrorMessage(control: AbstractControl | null): {
        error: string;
        warning: string;
    };
    static ɵfac: i0.ɵɵFactoryDef<FormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormComponent, "lib-form", never, { "formTemplate": "formTemplate"; "groupId": "groupId"; "isSubform": "isSubform"; "isStandalone": "isStandalone"; }, { "formStatus": "formStatus"; }, never, never>;
}
//# sourceMappingURL=form.component.d.ts.map