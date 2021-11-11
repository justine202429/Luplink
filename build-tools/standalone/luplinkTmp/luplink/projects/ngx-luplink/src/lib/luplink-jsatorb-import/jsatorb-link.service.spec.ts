import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../shared/dependencies';
import { LoggerService } from '../shared/logger/logger.service';
import { FormsTemplate } from '../shared/testing/mockFormsTemplate';
import { mockEnvironment, MockupLoggerService } from '../shared/testing/mocks';

import { JSatOrbLinkService } from './jsatorb-link.service';

describe('JSatOrbLinkService', () => {
  let service: JSatOrbLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        { provide: LoggerService, useClass: MockupLoggerService },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
      ],
    });
    service = TestBed.inject(JSatOrbLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
