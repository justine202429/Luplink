import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoggerService } from '../shared/logger/logger.service';
import { FormService } from '../form/form.service';
import { ENVIRONMENT_TOKEN } from '../shared/dependencies';
import { APIResult } from '../shared/models/Results.model';

@Injectable({
  providedIn: 'root',
})
export default class ComputeLinkBudgetService {
  displayFooter: boolean = false;
  displayingResults: boolean = true;
  computeLayout: 'sidebar' | '' | 'footer' = 'sidebar';

  // TODO: Should check that API is reachable with a ping and send a toastr

  public result: BehaviorSubject<any> = new BehaviorSubject([]);

  public linkBudgetSynthesis: Observable<Object> = new Observable();

  constructor(
    @Inject(ENVIRONMENT_TOKEN) private environment: any,
    private httpClient: HttpClient,
    private formService: FormService,
    private logger: LoggerService
  ) {}

  public computeLinkBudget(dataIn?: any, urlIn?: string): Observable<Object> | undefined {
    let data = dataIn;
    let url = urlIn;

    if (data === undefined) {
      // this.logger.warn('Form validity', this.formService.globalForm.valid);

      if (!this.formService.globalForm.valid) {
        // In case the form is invalid
        this.logger.warn('Errors in the inputed data', 'Please check the validity of entered data');
        return;
      }
      data = this.formService.getFormData();
      if (data === {}) {
        this.logger.warn('No data to process', 'Please check the inputed data');
      }
    }

    const POSTData = {
      data,
      options: {
        calculation: 'linkpredict', // #TODO: Hardcoded, to implement
        type: 'static',
        // debug: true, // This adds delay to the request
      },
    };

    if (url === undefined) {
      url = `${this.environment.luplinkEndpoint}/linkBudget/${POSTData.options.type}`;
    }

    // this.logger.debug('Sending POST request!', data);

    this.linkBudgetSynthesis = this.httpClient.post(url, POSTData, { responseType: 'json' }).pipe(
      catchError(this.handleError.bind(this)) // Binding the context of the call in order to still have access to logger
    );

    this.displayingResults = true;
    // this.result.next(this.linkBudgetSynthesis)

    // TODO: Check data validity before making it available and test this

    // eslint-disable-next-line consistent-return
    return this.linkBudgetSynthesis;
  }

  public toggleResults() {
    this.displayingResults = !this.displayingResults;
  }

  updateResult(value: any) {
    this.result.next(value);
  }

  getResult$(): BehaviorSubject<APIResult> {
    return this.result;
  }

  private handleError(error: HttpErrorResponse) {
    // This handles HTTP errors
    // this.logger.error("POST request error!")
    if (error.error instanceof Error) {
      // A client-side or network error occured.
      this.logger.error('Client-side / Network error', [error.message, error.error.stack]);
      // Displaying as much information as possible in order to choose the best to display later.
      this.logger.debug('full error (pick pertinent information to display to user & developper', error.error);
    } else {
      // The backend returned an error code
      this.logger.error('Backend Error', error.message);
    }
    return throwError(error);
    // 'An error occured in Custom ErrorHandler'
  }
}
