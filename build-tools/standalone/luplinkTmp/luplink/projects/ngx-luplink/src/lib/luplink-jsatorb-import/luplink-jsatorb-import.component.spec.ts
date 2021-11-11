import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveLoadService } from '../services/save-load.service';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../shared/dependencies';
import { LoggerService } from '../shared/logger/logger.service';
import { FormsTemplate } from '../shared/testing/mockFormsTemplate';
import { mockEnvironment, MockupLoggerService } from '../shared/testing/mocks';

import { JSatOrbLinkComponent } from './luplink-jsatorb-import.component';

describe('JSatOrbLinkComponent', () => {
  let component: JSatOrbLinkComponent;
  let fixture: ComponentFixture<JSatOrbLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JSatOrbLinkComponent],
      imports: [ReactiveFormsModule],
      providers: [
        SaveLoadService,
        { provide: LoggerService, useClass: MockupLoggerService },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JSatOrbLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
