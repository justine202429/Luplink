import { ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import { MockupLoggerService } from 'projects/ngx-luplink/src/lib/shared/testing/mocks';
import { Form } from 'projects/ngx-luplink/src/lib/shared/models/Form.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsTemplate } from '../../shared/testing/mockFormsTemplate';
import { FormService } from '../form.service';
import { FormComponent } from './form.component';
import { FORM_TEMPLATE_TOKEN } from '../../shared/dependencies';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('FormComponent', () => {
  const template: Form = FormsTemplate.UL_transmitter_GS;
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule, FontAwesomeModule],
      providers: [
        FormService,
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
        { provide: LoggerService, useClass: MockupLoggerService },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.formTemplate = template;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.queryAll(By.css('input')).length).toBeGreaterThan(1); //We should have at least some fields
  });

  it('should display all the labels provided by parent', () => {
    const labels = fixture.debugElement.queryAll(By.css('label'));
    labels.forEach((element, index) => {
      expect(element.nativeElement.innerText).toContain(template.params[index].desc);
    });
  });

  it('should not be valid if input is not correct', () => {
    // #FIXME This doesn't change what Karma is displaying but we still get the correct valid or invalid form
    const valid = ['12', '1.9', '-51.5', '12,3', '00,1', '1.00'];
    valid.forEach((value) => {
      component.localForm.controls[template.params[0].id].setValue({ value, unit: 'W' });
      expect(component.localForm.valid).toBeTruthy(`for value ${value.toString()}`);
    });
    const invalid = ['', ' ', 'aaaaa', '"', 'null', '.'];
    invalid.forEach((value) => {
      component.localForm.controls[template.params[0].id].setValue({ value, unit: 'W' });
      expect(component.localForm.valid).toBeFalsy(`for value ${value.toString()}`);
    });
  });

  it('should display custom error messages', () => {
    const firstField: HTMLInputElement = fixture.debugElement.queryAll(By.css('.input'))[0].nativeElement;
    // Error message is hidden when there is no error
    let helpers = fixture.debugElement.queryAll(By.css('.help'));
    helpers.forEach((helper) => {
      expect(helper.nativeElement.text).toBeFalsy();
    });

    // An error message is displayed for non-numerical and empty values
    firstField.value = 'aaa';
    firstField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    helpers = fixture.debugElement.queryAll(By.css('.help'));
    expect(helpers.length).not.toBe(0);
    expect(fixture.debugElement.queryAll(By.css('.help'))[0].nativeElement.innerText).toContain('numerical value');

    //Checking for empty value
    firstField.value = '';
    firstField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    helpers = fixture.debugElement.queryAll(By.css('.help'));
    expect(helpers.length).not.toBe(0);
    expect(fixture.debugElement.queryAll(By.css('.help'))[0].nativeElement.innerText).toContain('Please enter');
  });

  it('should display warnings', () => {
    // Second field here is 'Line Losses' so should display warning for > 0 losses
    const lossField: HTMLInputElement = fixture.debugElement.queryAll(By.css('.input'))[1].nativeElement;
    let helpers = fixture.debugElement.queryAll(By.css('.is-warning'));
    expect(helpers[0].nativeElement.innerText).toBeFalsy();

    // An error message is displayed for non-numerical and empty values
    lossField.value = '15';
    lossField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    helpers = fixture.debugElement.queryAll(By.css('.is-warning'));
    expect(helpers.length).not.toBe(0);
    expect(fixture.debugElement.queryAll(By.css('.is-warning'))[1].nativeElement.innerText).toContain('< 0');
  });
  it('should display default values', () => {
    const arr = fixture.debugElement.queryAll(By.css('.input')); // We get all inputs
    // If arr is empty, we are not testing anything. Please check that the class used for selection is still up to date
    arr.forEach((element, index) => {
      expect((<HTMLInputElement>element.nativeElement).value).toEqual(
        FormsTemplate.UL_transmitter_GS.params[index].default.toString()
      );
    });
  });
});

describe('multiple forms components on the same page', () => {});
