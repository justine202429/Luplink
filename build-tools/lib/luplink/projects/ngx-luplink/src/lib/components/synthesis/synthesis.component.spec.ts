import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import { MockupLoggerService } from 'projects/ngx-luplink/src/lib/shared/testing/mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { SyntheticDrawingComponent } from '../synthetic-drawing/synthetic-drawing-display/synthetic-drawing.component';
import { SyntheticDrawingFormComponent } from '../synthetic-drawing/synthetic-drawing-form/synthetic-drawing-form.component';
import { CardComponent } from '../card/card.component';

import { SynthesisComponent } from './synthesis.component';
import { StepbarComponent } from '../stepbar/stepbar.component';
// #TODO: Write tests
describe('SynthesisComponent', () => {
  let component: SynthesisComponent;
  let fixture: ComponentFixture<SynthesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SynthesisComponent,
        MockComponent(CardComponent),
        // MockComponent(SyntheticDrawingComponent),
        SyntheticDrawingComponent,
        MockComponent(SyntheticDrawingFormComponent),
        MockComponent(StepbarComponent),
      ],
      imports: [RouterTestingModule],
      providers: [{ provide: LoggerService, useClass: MockupLoggerService }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display drawing (bug)', () => {
    const diagram = fixture.debugElement.nativeElement.querySelectorAll('#diagram > svg');
    // const svg = diagram.childNodes.;
    expect(diagram.length).toEqual(2);
  });
});
