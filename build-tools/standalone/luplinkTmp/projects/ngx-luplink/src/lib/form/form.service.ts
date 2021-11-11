/* eslint-disable max-classes-per-file */
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
// import { LoggerService } from '../services/logger.service';
import { CustomValidators, FormControlWarn } from '../shared/custom-field';
import { FORM_TEMPLATE_TOKEN } from '../shared/dependencies';
import { LoggerService } from '../shared/logger/logger.service';
import { Form, Field } from '../shared/models/Form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public FormsTemplate: any;
  /**
   * This service keeps tracks of everything form-related.
   * It listens for forms changes and returns the form Data to the computeLinkBudget service
   */
  // This contains the concatenation of all subforms

  public globalForm: FormGroup = new FormGroup({}); // A form group can easily be observed
  public erroneousSection: BehaviorSubject<string> = new BehaviorSubject('');
  public title: string = 'Untitled_Link_Budget';
  public isInterlink: boolean = false;
  public isCurrentFormSaved: boolean = true;

  // Has forms already been initialized ?
  private _isInitialized: boolean = false;
  get isInitialized(): boolean {
    return this._isInitialized;
  }
  set isInitialized(value: boolean) {
    this._isInitialized = value;
  }

  constructor(
    @Inject(FORM_TEMPLATE_TOKEN) private template: any,
    private fb: FormBuilder,
    private customValidators: CustomValidators,
    private logger: LoggerService
  ) {}

  public addForm(formGroup: FormGroup, name: string, parent: string = '') {
    /**
     * This allow adding a form to our globalform. This function is usually called by a form component
     */
    if (parent && parent !== '') {
      const group = this.globalForm.get(parent) as FormGroup;
      if (group) {
        group.setControl(name, formGroup);
        this.globalForm.setControl(parent, group);
      } else {
        this.globalForm.setControl(parent, this.fb.group({ [name]: formGroup }));
      }
    } else if (name !== '') {
      this.globalForm.setControl(name, formGroup);
    }
  }

  public getComponentValues(componentId: string, link: string = '', parentId?: string): any | undefined {
    /**
     * Returns the value of a component by its id and its parentId
     */
    if (!parentId) return this.getFormData()[componentId];
    return this.getFormData()?.[link]?.[parentId]?.[componentId];
  }

  public patchForm(parentName: string, groupName: string, formGroup: FormGroup) {
    /**
     *  A wrapper for the method from FormGroup. This allows us to have a globalForm with more depth.
     */
    const group = <FormGroup>this.globalForm.get(parentName);
    if (group !== null) {
      group.addControl(groupName, formGroup);
      return;
    }
    this.logger.warn(`${parentName} does not exist! Cannot attach antenna to it.`);
  }

  public importForm(results: any): void {
    /**
     * This function is called when importing a .json file.
     * It updates the fields values.
     */

    // #TODO: check file sanity (eg. sanitization)
    // #TODO: Test
    // Changing global form
    console.log('import form');
    console.log(results.data);
    this.globalForm.patchValue(results.data, { emitEvent: false });
    this.title = results.metadata.title;
  }

  public getFormData$(): Observable<any> {
    return this.globalForm.valueChanges;
  }

  public getFormData(): any {
    return this.globalForm.value; // The form updated at all times is used for the calculation
  }

  public initForms(): void {
    // This function automatically generates the form to be sent to API even if some components haven't yet been instantiated
    this.template.template.components.forEach((componentTemplate: Form) => {
      if (componentTemplate.componentId !== '') {
        const fg = this.createFormGroup(componentTemplate);
        if (componentTemplate.parentComponent) {
          this.addForm(fg, componentTemplate.componentId, componentTemplate.parentComponent);
        } else {
          this.addForm(fg, componentTemplate.componentId);
        }
      }
    });
    this._isInitialized = true;
  }

  public createFormGroup(componentTemplate: Form): FormGroup {
    /**
     * This function takes in a Form template and return a FormGroup of the corresponding component.
     * This makes the conversion between angular reactive forms and our custom JSON templates for transmission chain parts.
     */
    const group: any = {};

    componentTemplate.params.forEach((element: Field) => {
      // The default value is 'undefined' if key not found in map
      // Here we create FormControls for both the input and its unit
      const inputControl = new FormControlWarn(element.default, {
        validators: [Validators.pattern('^[+-]?[0-9]+([,][0-9]+)*([.][0-9]+)?$')],
        updateOn: 'change', // Removed because of data loss when switching page without blurring first
      }); // , [Validators.required, Validators.maxLength(6)]); //For testing purposes
      // Updating on blur is less distracting, a good compromise however, values are not updated when changing tabs and therefore are lost
      const unitControl =
        element.units.length === 0
          ? new FormControl('', Validators.nullValidator)
          : new FormControl(element.units[0], Validators.required);
      // For units, we can assume they will be valid since the user is constrained in his choices
      group[element.id] = new FormGroup(
        {
          // A group composed of both the field and its unit
          value: inputControl,
          unit: unitControl,
        },
        [
          this.customValidators.fieldValidator,
          element.type === 'loss' ? this.customValidators.positiveLossWarningValidator : Validators.nullValidator,
        ]
      );

      if (element.alternative !== undefined) {
        const subGroup = this.createFormGroup(element.alternative);
        group[element.alternative.componentId] = subGroup;
      }
    });

    return this.fb.group(group);
  }
}
