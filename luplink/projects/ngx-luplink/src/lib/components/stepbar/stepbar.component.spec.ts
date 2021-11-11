import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StepbarComponent } from './stepbar.component';

describe('StepbarComponent', () => {
  let component: StepbarComponent;
  let fixture: ComponentFixture<StepbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepbarComponent],
      imports: [RouterTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepbarComponent);
    component = fixture.componentInstance;

    component.step = 'geometry';
    component.validity = { form: {}, steps: {} };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
