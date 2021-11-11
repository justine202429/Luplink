import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { FormsTemplate } from 'projects/ngx-luplink/src/lib/shared/testing/mockFormsTemplate';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from 'projects/ngx-luplink/src/lib/shared/dependencies';
import ComputeLinkBudgetService from '../../../../services/compute-link-budget.service';
import { mockEnvironment, ToastrTestingModule } from '../../../../shared/testing/mocks';
import mockResponse from '../../../../shared/testing/mockResponse.json';
import { CardComponent } from '../../../card/card.component';
import { NavigationSidebarComponent } from '../../../navigation-sidebar/navigation-sidebar.component';
import { SyntheticDrawingComponent } from '../../../synthetic-drawing/synthetic-drawing-display/synthetic-drawing.component';
import { APIResult } from '../../../../shared/models/Results.model';
import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let computeService: ComputeLinkBudgetService;
  let spy: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResultsComponent,
        MockComponent(CardComponent),
        MockComponent(NavigationSidebarComponent),
        MockComponent(SyntheticDrawingComponent),
      ],
      providers: [
        ComputeLinkBudgetService,
        FormBuilder,
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
      ],
      imports: [HttpClientTestingModule, ToastrTestingModule, FontAwesomeModule],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    component.minimal = true;
    // Mocking the service in order for this component to fetch the results
    computeService = TestBed.inject(ComputeLinkBudgetService);
    spy = spyOn(computeService, 'getResult$').and.returnValue(new BehaviorSubject(<APIResult>mockResponse));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Kind of an integration test
  it('should display the correct results', () => {
    expect(spy).toHaveBeenCalled();
    expect(fixture.debugElement.queryAll(By.css('tr')).length).toBeGreaterThan(5);
    // console.log(fixture.debugElement.queryAll(By.css('td'))[3]);
    expect(fixture.debugElement.queryAll(By.css('td'))[3].nativeElement.innerText).toEqual('4.99 dB');
  });

  it('should display each field only once when displaying results (bug)', () => {
    const tdArray = fixture.debugElement.queryAll(By.css('.result-label'));
    const elt: string[] = [];
    // These labels are used for both the transmitter and receiver part, they are redundant
    const redundantLabels = ['Pointing Losses', 'Circuit Loss', 'Antenna Gain', 'Depointing Angle'];
    let label;
    tdArray.forEach((value) => {
      label = value.nativeElement.innerText;
      if (!redundantLabels.includes(label)) {
        expect(elt).not.toContain(label);
      }
      elt.push(label);
    });
    expect(elt).toContain(elt[0]);
  });
});
