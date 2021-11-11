import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ENVIRONMENT_TOKEN } from '../shared/dependencies';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../form/form.service";
import * as i3 from "../shared/logger/logger.service";
export default class ComputeLinkBudgetService {
    constructor(environment, httpClient, formService, logger) {
        this.environment = environment;
        this.httpClient = httpClient;
        this.formService = formService;
        this.logger = logger;
        this.displayFooter = false;
        this.displayingResults = true;
        this.computeLayout = 'sidebar';
        // public result: BehaviorSubject<any> = new BehaviorSubject("");
        // TODO: Should check that API is reachable with a ping and send a toastr
        // #FIXME:compute logic can be improved regarding observable, find suitable architecture
        this.result = new BehaviorSubject([]);
        this.linkBudgetSynthesis = new Observable();
    }
    computeLinkBudget(dataIn, urlIn) {
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
                calculation: 'linkpredict',
                type: 'static',
            },
        };
        if (url === undefined) {
            url = `${this.environment.luplinkEndpoint}/linkBudget/${POSTData.options.type}`;
        }
        // this.logger.debug('Sending POST request!', data);
        this.linkBudgetSynthesis = this.httpClient.post(url, POSTData, { responseType: 'json' }).pipe(catchError(this.handleError.bind(this)) // Binding the context of the call in order to still have access to logger
        );
        this.displayingResults = true;
        // this.result.next(this.linkBudgetSynthesis)
        // TODO: Check data validity before making it available and test this
        // eslint-disable-next-line consistent-return
        return this.linkBudgetSynthesis;
    }
    toggleResults() {
        this.displayingResults = !this.displayingResults;
    }
    updateResult(value) {
        this.result.next(value);
    }
    getResult$() {
        return this.result;
    }
    handleError(error) {
        // This handles HTTP errors
        // this.logger.error("POST request error!")
        if (error.error instanceof Error) {
            // A client-side or network error occured.
            this.logger.error('Client-side / Network error', [error.message, error.error.stack]);
            // Displaying as much information as possible in order to choose the best to display later.
            this.logger.debug('full error (pick pertinent information to display to user & developper', error.error);
        }
        else {
            // The backend returned an error code
            this.logger.error('Backend Error', error.message);
        }
        return throwError(error);
        // 'An error occured in Custom ErrorHandler'
    }
}
ComputeLinkBudgetService.ɵfac = function ComputeLinkBudgetService_Factory(t) { return new (t || ComputeLinkBudgetService)(i0.ɵɵinject(ENVIRONMENT_TOKEN), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.FormService), i0.ɵɵinject(i3.LoggerService)); };
ComputeLinkBudgetService.ɵprov = i0.ɵɵdefineInjectable({ token: ComputeLinkBudgetService, factory: ComputeLinkBudgetService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComputeLinkBudgetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [ENVIRONMENT_TOKEN]
            }] }, { type: i1.HttpClient }, { type: i2.FormService }, { type: i3.LoggerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZS1saW5rLWJ1ZGdldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9zZXJ2aWNlcy9jb21wdXRlLWxpbmstYnVkZ2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFNM0QsTUFBTSxDQUFDLE9BQU8sT0FBTyx3QkFBd0I7SUFlM0MsWUFDcUMsV0FBZ0IsRUFDM0MsVUFBc0IsRUFDdEIsV0FBd0IsRUFDeEIsTUFBcUI7UUFITSxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUMzQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFsQi9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxrQkFBYSxHQUE4QixTQUFTLENBQUM7UUFFckQsaUVBQWlFO1FBQ2pFLHlFQUF5RTtRQUV6RSx3RkFBd0Y7UUFDakYsV0FBTSxHQUF5QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RCx3QkFBbUIsR0FBdUIsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQU8vRCxDQUFDO0lBRUcsaUJBQWlCLENBQUMsTUFBWSxFQUFFLEtBQWM7UUFDbkQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztR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JztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL2Zvcm0vZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IEVOVklST05NRU5UX1RPS0VOIH0gZnJvbSAnLi4vc2hhcmVkL2RlcGVuZGVuY2llcyc7XG5pbXBvcnQgeyBBUElSZXN1bHQgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL1Jlc3VsdHMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlTGlua0J1ZGdldFNlcnZpY2Uge1xuICBkaXNwbGF5Rm9vdGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZGlzcGxheWluZ1Jlc3VsdHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbXB1dGVMYXlvdXQ6ICdzaWRlYmFyJyB8ICcnIHwgJ2Zvb3RlcicgPSAnc2lkZWJhcic7XG5cbiAgLy8gcHVibGljIHJlc3VsdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFwiXCIpO1xuICAvLyBUT0RPOiBTaG91bGQgY2hlY2sgdGhhdCBBUEkgaXMgcmVhY2hhYmxlIHdpdGggYSBwaW5nIGFuZCBzZW5kIGEgdG9hc3RyXG5cbiAgLy8gI0ZJWE1FOmNvbXB1dGUgbG9naWMgY2FuIGJlIGltcHJvdmVkIHJlZ2FyZGluZyBvYnNlcnZhYmxlLCBmaW5kIHN1aXRhYmxlIGFyY2hpdGVjdHVyZVxuICBwdWJsaWMgcmVzdWx0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIHB1YmxpYyBsaW5rQnVkZ2V0U3ludGhlc2lzOiBPYnNlcnZhYmxlPE9iamVjdD4gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRU5WSVJPTk1FTlRfVE9LRU4pIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueSxcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBjb21wdXRlTGlua0J1ZGdldChkYXRhSW4/OiBhbnksIHVybEluPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgZGF0YSA9IGRhdGFJbjtcbiAgICBsZXQgdXJsID0gdXJsSW47XG5cbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB0aGlzLmxvZ2dlci53YXJuKCdGb3JtIHZhbGlkaXR5JywgdGhpcy5mb3JtU2VydmljZS5nbG9iYWxGb3JtLnZhbGlkKTtcblxuICAgICAgaWYgKCF0aGlzLmZvcm1TZXJ2aWNlLmdsb2JhbEZvcm0udmFsaWQpIHtcbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgZm9ybSBpcyBpbnZhbGlkXG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ0Vycm9ycyBpbiB0aGUgaW5wdXRlZCBkYXRhJywgJ1BsZWFzZSBjaGVjayB0aGUgdmFsaWRpdHkgb2YgZW50ZXJlZCBkYXRhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldEZvcm1EYXRhKCk7XG4gICAgICBpZiAoZGF0YSA9PT0ge30pIHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybignTm8gZGF0YSB0byBwcm9jZXNzJywgJ1BsZWFzZSBjaGVjayB0aGUgaW5wdXRlZCBkYXRhJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgUE9TVERhdGEgPSB7XG4gICAgICBkYXRhLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBjYWxjdWxhdGlvbjogJ2xpbmtwcmVkaWN0JywgLy8gI1RPRE86IEhhcmRjb2RlZCwgdG8gaW1wbGVtZW50XG4gICAgICAgIHR5cGU6ICdzdGF0aWMnLFxuICAgICAgICAvLyBkZWJ1ZzogdHJ1ZSwgLy8gVGhpcyBhZGRzIGRlbGF5IHRvIHRoZSByZXF1ZXN0XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHVybCA9IGAke3RoaXMuZW52aXJvbm1lbnQubHVwbGlua0VuZHBvaW50fS9saW5rQnVkZ2V0LyR7UE9TVERhdGEub3B0aW9ucy50eXBlfWA7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1NlbmRpbmcgUE9TVCByZXF1ZXN0IScsIGRhdGEpO1xuXG4gICAgdGhpcy5saW5rQnVkZ2V0U3ludGhlc2lzID0gdGhpcy5odHRwQ2xpZW50LnBvc3QodXJsLCBQT1NURGF0YSwgeyByZXNwb25zZVR5cGU6ICdqc29uJyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpIC8vIEJpbmRpbmcgdGhlIGNvbnRleHQgb2YgdGhlIGNhbGwgaW4gb3JkZXIgdG8gc3RpbGwgaGF2ZSBhY2Nlc3MgdG8gbG9nZ2VyXG4gICAgKTtcblxuICAgIHRoaXMuZGlzcGxheWluZ1Jlc3VsdHMgPSB0cnVlO1xuICAgIC8vIHRoaXMucmVzdWx0Lm5leHQodGhpcy5saW5rQnVkZ2V0U3ludGhlc2lzKVxuXG4gICAgLy8gVE9ETzogQ2hlY2sgZGF0YSB2YWxpZGl0eSBiZWZvcmUgbWFraW5nIGl0IGF2YWlsYWJsZSBhbmQgdGVzdCB0aGlzXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICByZXR1cm4gdGhpcy5saW5rQnVkZ2V0U3ludGhlc2lzO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVJlc3VsdHMoKSB7XG4gICAgdGhpcy5kaXNwbGF5aW5nUmVzdWx0cyA9ICF0aGlzLmRpc3BsYXlpbmdSZXN1bHRzO1xuICB9XG5cbiAgdXBkYXRlUmVzdWx0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnJlc3VsdC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGdldFJlc3VsdCQoKTogQmVoYXZpb3JTdWJqZWN0PEFQSVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgLy8gVGhpcyBoYW5kbGVzIEhUVFAgZXJyb3JzXG4gICAgLy8gdGhpcy5sb2dnZXIuZXJyb3IoXCJQT1NUIHJlcXVlc3QgZXJyb3IhXCIpXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cmVkLlxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ0NsaWVudC1zaWRlIC8gTmV0d29yayBlcnJvcicsIFtlcnJvci5tZXNzYWdlLCBlcnJvci5lcnJvci5zdGFja10pO1xuICAgICAgLy8gRGlzcGxheWluZyBhcyBtdWNoIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlIGluIG9yZGVyIHRvIGNob29zZSB0aGUgYmVzdCB0byBkaXNwbGF5IGxhdGVyLlxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ2Z1bGwgZXJyb3IgKHBpY2sgcGVydGluZW50IGluZm9ybWF0aW9uIHRvIGRpc3BsYXkgdG8gdXNlciAmIGRldmVsb3BwZXInLCBlcnJvci5lcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIGVycm9yIGNvZGVcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdCYWNrZW5kIEVycm9yJywgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAvLyAnQW4gZXJyb3Igb2NjdXJlZCBpbiBDdXN0b20gRXJyb3JIYW5kbGVyJ1xuICB9XG59XG4iXX0=