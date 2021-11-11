import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { KatexModule } from 'ng-katex';
import { MockComponent } from 'ng-mocks';
import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import {
  mockEnvironment, MockFormService, MockupLoggerService, ToastrTestingModule,
} from 'projects/ngx-luplink/src/lib/shared/testing/mocks';
import { FormService } from 'projects/ngx-luplink/src/lib/form/form.service';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from 'projects/ngx-luplink/src/lib/shared/dependencies';
import { CardComponent } from '../card/card.component';

import { SimpleDocumentationComponent } from './simple-documentation.component';
import { FormsTemplate } from '../../shared/testing/mockFormsTemplate';

describe('SimpleDocumentationComponent', () => {
  let component: SimpleDocumentationComponent;
  let fixture: ComponentFixture<SimpleDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleDocumentationComponent,
        MockComponent(CardComponent)],
      providers: [
        { provide: FormService, use: MockFormService },
        { provide: LoggerService, use: MockupLoggerService },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
        FormBuilder],
      imports: [ReactiveFormsModule, ToastrTestingModule, KatexModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add text indications to the geometry drawing', () => {
    component.component = 'geometry';
    fixture.whenStable();
    const texts = fixture.debugElement.query(By.css('#sr')).queryAll(By.css('text'));

    expect(texts.length).toBeGreaterThan(1);
    // console.log(texts[0]);
    // console.log(texts[0].query(By.css('tspan')));
  });
});
