import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SyntheticDrawingFormService } from '../synthetic-drawing-form.service';

import { SyntheticDrawingFormComponent } from './synthetic-drawing-form.component';

describe('SyntheticDrawingFormComponent', () => {
  let component: SyntheticDrawingFormComponent;
  let fixture: ComponentFixture<SyntheticDrawingFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyntheticDrawingFormComponent],
      providers: [FormBuilder, SyntheticDrawingFormService],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule], // These two imports solve the 'can't bind to 'formGroup'' & NG0201:'No provider for ngModule' errors
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheticDrawingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('randomize should change some values', () => {
    const spy = spyOn(Math, 'random').and.returnValues(0.1, 0.75, 0.33, 3.14159265358979323846, 12, 1, 1); // We mock the random function for predictability
    const oldGains = component.drawingForm.value.gains; // component.form.value.gains;
    fixture.debugElement.nativeElement.querySelector('#randomize').click();
    // spy = spyOn(service, 'updateLBScenario');
    const newGains = component.drawingForm.value.gains;
    let identical = true;
    // eslint-disable-next-line no-restricted-syntax
    for (const id in oldGains) {
      if (oldGains[id] !== newGains[id]) {
        identical = false;
        break;
      }
    }
    expect(spy).toHaveBeenCalled(); // If this fails, we have lost predictability of the test
    expect(identical).toBeFalsy();
  });
});
