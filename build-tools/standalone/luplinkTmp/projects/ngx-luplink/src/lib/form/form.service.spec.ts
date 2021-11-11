import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MockupLoggerService } from 'projects/ngx-luplink/src/lib/shared/testing/mocks';
import { Form, Field } from 'projects/ngx-luplink/src/lib/shared/models/Form.model';

import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import { FormService } from './form.service';
import { FormsTemplate } from '../shared/testing/mockFormsTemplate';
import { FORM_TEMPLATE_TOKEN } from '../shared/dependencies';

describe('FormService', () => {
  let service: FormService;
  let fb: FormBuilder;
  const GS_transmitter: Form = {
    // componentType: "Transmitter",
    componentId: 'GS_transmitter',
    params: [
      {
        id: 'power',
        desc: 'Power In',
        units: ['W', 'dBW'],
        // dimension:"power",
        default: 10,
      },
      {
        id: 'txCableLoss',
        desc: 'Ltx',
        units: ['dB', ''],
        // dimension: "loss",
        default: 5,
      },
      {
        id: 'test',
        desc: 'Test',
        units: [],
        // dimension:'adimensional',
        default: 78,
      },
    ],
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [ ReactiveFormsModule, FormsModule ],
      // declarations: [FormBuilder],
      providers: [
        FormBuilder,
        // FormsTemplate,
        { provide: LoggerService, useClass: MockupLoggerService },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
      ],
    });
    service = TestBed.inject(FormService);
    fb = new FormBuilder();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('adding form, and testing some of the functions', () => {
    const group: any = {};

    GS_transmitter.params.forEach((element: Field) => {
      // The default value is 'undefined' if key not found in map
      // Here we create FormControls for both the input and its unit
      const inputControl = new FormControl(element.default, {
        validators: [Validators.required, Validators.pattern('^[+-]?[0-9]+([,][0-9]+)*([.][0-9]+)?$')],
        updateOn: 'blur',
      }); // , [Validators.required, Validators.maxLength(6)]);
      // Updating on blur is less distracting, a good compromise
      const unitControl = new FormControl(
        element.units[0],
        element.units.length === 0 ? Validators.nullValidator : Validators.required
      );

      // const customValidators = new CustomValidators(MockupLoggerService);
      // This one will be required at all times (DOM manipulations by end user). Still API shouldn't expect to get a unit
      group[element.id] = new FormGroup({
        // A group composed of both the field and its unit
        value: inputControl,
        unit: unitControl,
      }); // { validators: customValidators.fieldValidator });
    });

    service.addForm(fb.group(group), GS_transmitter.componentId);

    // Checking if the data has been added
    // console.log(service.getFormData().Transmitter.txCableLoss.value)
    expect(service.getFormData().GS_transmitter.txCableLoss.value).toEqual(5);
  });
  // #TODO:TEST Try replacing a field, try importing a file
});
