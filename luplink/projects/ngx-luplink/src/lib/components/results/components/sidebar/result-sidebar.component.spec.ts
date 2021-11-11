import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { mockEnvironment, MockFormService, ToastrTestingModule } from 'projects/ngx-luplink/src/lib/shared/testing/mocks';
import { FormService } from 'projects/ngx-luplink/src/lib/form/form.service';
import { FormsTemplate } from 'projects/luplink-app/src/app/models/FormsTemplate';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from 'projects/ngx-luplink/src/lib/shared/dependencies';
import { ResultsComponent } from '../results/results.component';

import { ResultSidebarComponent } from './result-sidebar.component';

describe('ResultSidebarComponent', () => {
  let component: ResultSidebarComponent;
  let fixture: ComponentFixture<ResultSidebarComponent>;

  // Not much to test here, should this component be moved directly to the layout?

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultSidebarComponent,
        MockComponent(ResultsComponent)],
      providers: [
        FormBuilder,
        { provide: FormService, use: MockFormService },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
      ],
      imports: [ToastrTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
