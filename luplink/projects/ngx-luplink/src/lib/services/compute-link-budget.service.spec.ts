import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { LoggerService } from 'projects/ngx-luplink/src/lib/shared/logger/logger.service';
import { FormsTemplate } from 'projects/luplink-app/src/app/models/FormsTemplate';
import ComputeLinkBudgetService from './compute-link-budget.service';
import { mockEnvironment, MockupLoggerService } from '../shared/testing/mocks';
import mockPOSTData from '../shared/testing/mockPOSTData.json';
import { LoggerModule } from '../shared/logger/logger.module';
import { ENVIRONMENT_TOKEN, FORM_TEMPLATE_TOKEN } from '../shared/dependencies';

describe('ComputeLinkBudgetService', () => {
  let service: ComputeLinkBudgetService;
  let httpTestingController: HttpTestingController;
  let logger: LoggerService;
  let spy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LoggerModule],
      providers: [
        ComputeLinkBudgetService,
        FormBuilder,
        // HttpClient,
        { provide: LoggerService, useClass: MockupLoggerService },
        { provide: ENVIRONMENT_TOKEN, useValue: mockEnvironment },
        { provide: FORM_TEMPLATE_TOKEN, useValue: FormsTemplate },
      ],
    });
    service = TestBed.inject(ComputeLinkBudgetService);

    // These are more-or-less mocks
    // httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    logger = TestBed.inject(LoggerService);
  });

  // #BUG: error with seed 54854, 15438

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should handle various errors (404, 500 & Network Error)', () => {
    // This fails because of the throw error inside ErrorHandler
    // https://oraclefrontovik.com/2020/11/14/angular-unit-testing-error-expected-one-matching-request-for-criteria-found-none/
    // https://www.mobiquity.com/insights/testing-angular-http-communication

    // Testing for 404 error, we called the wrong hook
    const emsg = 'deliberate 404 error';
    spy = spyOn(logger, 'error');
    // Don't ever forget to subscribe if you want the request to happen, as usual
    service.computeLinkBudget(mockPOSTData, 'http://localhost:8001/wrongURL')?.subscribe(
      () => {
        fail('should have failed with 404 error');
      },
      (error) => {
        expect(error.status).toEqual(404);
      } // we are putting the error aside to avoid our test failing because of thrown error
    );
    const req1 = httpTestingController.expectOne({ method: 'POST' });
    req1.flush(emsg, { status: 404, statusText: '404: Not Found' });
    expect(logger.error).toHaveBeenCalled(); // We make sure the error is logged
    spy.calls.reset();

    expect(logger.error).not.toHaveBeenCalled(); // Testing that the reset works fine

    // Testing for 500 error, internal server error, e.g. we sent erroneous data.
    // (We should switch to another error code : "500 is never the client's fault")
    service.computeLinkBudget({ data: 'erroneous data' }, 'http://localhost:8001/LinkBudget/static')?.subscribe(
      () => {},
      (error) => {
        expect(error.status).toEqual(500);
      }
    );
    const req2 = httpTestingController.expectOne({ method: 'POST' });
    req2.flush('500 Server error', { status: 500, statusText: 'Internal Server Error' });
    expect(logger.error).toHaveBeenCalled();

    spy.calls.reset();
  });
});
