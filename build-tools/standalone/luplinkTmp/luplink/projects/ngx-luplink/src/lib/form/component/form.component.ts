import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { LoggerService } from '../../shared/logger/logger.service';
import { HelperFunctions } from '../../shared/helper-functions';
import { AntennaField, EmptyForm, Field, Form } from '../../shared/models/Form.model';
import { FormService } from '../form.service';
import { FormControlWarn } from '../../shared/custom-field';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input()
  set formTemplate(value: Form) {
    if (value) {
      this._formTemplate = value;
      this.changeComponent(this._formTemplate); // Supplied by datainput template
      this.validity = this.localForm.valid ? 'valid' : 'invalid';
      this.unsubscribeToChanges();
      this.subscribeToChanges();
      if (this.formTemplate.componentId === 'geometry') {
        // We want to link slant range to altitude & elevation
        this.geometrySubscribe();
      }
      // Checking validity
      this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
    } else {
      this.logger.debug('Got an undefined formTemplate');
    }
  }
  get formTemplate(): Form {
    return this._formTemplate;
  }
  private _formTemplate = new EmptyForm();

  @Input() groupId?: string;
  @Input() isSubform?: boolean = true;
  @Input() isStandalone?: boolean = true;

  @Output() formStatus: EventEmitter<{ id: string; validity: 'valid' | 'invalid' | 'none' }> = new EventEmitter();

  public FormsTemplate: any;
  // We create a subform corresponding to one of the component involved in the link
  public localForm: FormGroup = new FormGroup({});

  faInterrogation = faQuestionCircle;
  componentName: string = '';
  parentName: string = '';
  displayedImage: string = '';
  hasImage: boolean = false;
  validity: 'valid' | 'invalid' | 'none' = 'none';

  private localSubscription: Subscription = new Subscription();
  private globalSubscription: Subscription = new Subscription();

  constructor(private formService: FormService, public logger: LoggerService) {
    // If this is the first component constructed, initialize formService
    if (!this.formService.isInitialized) this.formService.initForms();
    this.subscribeToChanges();
  }

  public asField(field: Field | AntennaField): Field {
    /**
     * Quick helper function for types conversion in the template
     */
    return field as Field;
  }
  public asFormWarn(control: AbstractControl | null): FormControlWarn {
    /**
     * Casts an AbstractControl into a FormControlWarn
     * (This is useful for doing type casting inside the template)
     */
    return control as FormControlWarn;
  }

  subscribeToChanges(): void {
    this.localSubscription = this.localForm.valueChanges.subscribe(() => {
      // Handle saved state
      this.formService.isCurrentFormSaved = false;
      // Handle validity
      const currentFormValidity: boolean = this.localForm.valid;
      if (!currentFormValidity && this.validity !== 'invalid') {
        this.validity = 'invalid';
        // console.log(this.step);
        this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
      } else if (currentFormValidity && this.validity !== 'valid') {
        this.validity = 'valid';
        this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
      } else if (this.validity === 'none') {
        this.validity = currentFormValidity ? 'valid' : 'invalid';
        this.formStatus.emit({ id: this.formTemplate.componentId, validity: this.validity });
      }
      this.formService.addForm(this.localForm, this.componentName, this.parentName);
    });
    // Subscription to geometry global changes caused by JSatOrb imports
    if (this.formTemplate.componentId === 'geometry') {
      this.globalSubscription.unsubscribe();
      this.globalSubscription = this.formService.globalForm.valueChanges.subscribe((newValue: any) => {
        if (this.componentName === 'geometry' && this.formTemplate.componentId === 'geometry') {
          // Here we pass value from global to local, so we do not want to emit a valueChange event
          // This way we avoid an infinite event loop
          this.localForm.patchValue(newValue.geometry, { emitEvent: false });
        }
      });
    }
  }
  unsubscribeToChanges(): void {
    this.localSubscription.unsubscribe();
    this.globalSubscription.unsubscribe();
  }
  geometrySubscribe(): void {
    /**
     * Handles the link between slant range and altitude/elevation
     * This function is a bit specific but could be generalized when used for other fields.
     * Only call this function when used with geometry templates.
     */
    if (this.formTemplate.componentId !== 'geometry') {
      return; // If our component isn't geometry related, pass the following subscriptions
    }

    this.localForm.get('altitude')?.valueChanges.subscribe((value) => {
      // Altitude edited => calculate SR
      const elevation = this.localForm.get('elevation')?.value;
      // Convert to radians if required
      elevation.value = elevation.unit === '°' ? elevation.value : elevation.value * (180 / Math.PI);
      // Convert altitue to km
      const altitude = HelperFunctions.convertDistance(parseFloat(value.value), value.unit, 'km');
      this.localForm.get('slantRange')?.setValue({
        value: HelperFunctions.slantRangeFromAltElev(altitude, parseFloat(elevation.value)).toFixed(1),
        unit: 'km',
      });
    });
    this.localForm.get('elevation')?.valueChanges.subscribe((value) => {
      // elevation changed => calculate SR again
      const altitude = this.localForm.get('altitude')?.value;
      // Convert to radians if required
      altitude.value = HelperFunctions.convertDistance(parseFloat(altitude.value), altitude.unit, 'km');
      // Convert altitue to km
      const elev = value.unit === '°' ? value.value : value.value * (180 / Math.PI);
      this.localForm.get('slantRange')?.setValue({
        value: HelperFunctions.slantRangeFromAltElev(altitude.value, parseFloat(elev)).toFixed(1),
        unit: 'km',
      });
    });
  }

  changeComponent(componentTemplate: Form): void {
    /**
     * Handles the reuse of the form components by allowing to change inner template
     * @Input <Form>componentTemplate, the new template to use
     */

    // Setting up new Template involves a lot a casting and checking if templates fields aren't null or undefined
    this.parentName = componentTemplate.parentComponent ?? '';
    this.componentName = componentTemplate.componentId;
    this.hasImage = !!componentTemplate.image; // Casts our componentTemplate.image to a boolean
    this.displayedImage = componentTemplate.image ?? '';

    let previousForm;
    if (!this.parentName) {
      previousForm = this.formService.globalForm.value[this.componentName];
    } else {
      previousForm = this.formService.globalForm.value[this.parentName][this.componentName];
    }

    // We use default values here but since they have already been used to generate globalForm, we shouldn't use them once again
    // Here we want to regenerate the localFrom from archived form
    const newForm = this.formService.createFormGroup(componentTemplate);
    if (previousForm) {
      // Previous from already exists, we overwrite the localForm
      newForm.setValue(previousForm);
      this.localForm = newForm;

      // Now we want to add this localForm to the globalForm
      if (componentTemplate.parentComponent) {
        // Component is stored in a group
        const group = this.formService.globalForm.get(this.parentName) as FormGroup;
        if (group) {
          // The group already existed
          group.setControl(this.componentName, this.localForm);
          this.formService.globalForm.setControl(this.parentName, group);
        } else {
          this.formService.addForm(this.localForm, this.componentName, this.parentName);
        }
      } else {
        // Component is not stored in a group (cf geometry)
        this.formService.globalForm.setControl(this.componentName, this.localForm);
      }
    } else {
      // This form doesn't exist in the archives
      // We will use the values from globalForm
      this.localForm = newForm;
      this.formService.addForm(this.localForm, this.componentName, this.parentName);
    }
  }
  getWarningMessage(control: FormControlWarn | null): string {
    /**
     * Returns the warning message if there is one
     */
    if (control && control.warnings) return control.warnings;
    return '';
  }
  getErrorMessage(control: AbstractControl | null): { error: string; warning: string } {
    /**
     * This function gathers result from validators.
     * The custom validator are defined in custom-fields.ts
     */
    let error;
    const warning = '';
    // Internal error, the control does not exist
    if (control === null) {
      error = 'Unknown error (-1)';
      return { error, warning };
    }
    const { errors } = control;

    if (errors === null) {
      if (control.get('value')?.errors?.pattern) {
        // Here we intercept the case where regexp is wrong.
        error = 'Please choose a numerical value';
      } else {
        // No error
      }
    } else {
      // array destructuring (same as error = errors.error;)
      ({ error } = errors);
    }

    return { error, warning };
  }
}
