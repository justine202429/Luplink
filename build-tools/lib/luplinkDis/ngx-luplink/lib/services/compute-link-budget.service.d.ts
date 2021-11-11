import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerService } from '../shared/logger/logger.service';
import { FormService } from '../form/form.service';
import { APIResult } from '../shared/models/Results.model';
import * as i0 from "@angular/core";
export default class ComputeLinkBudgetService {
    private environment;
    private httpClient;
    private formService;
    private logger;
    displayFooter: boolean;
    displayingResults: boolean;
    computeLayout: 'sidebar' | '' | 'footer';
    result: BehaviorSubject<any>;
    linkBudgetSynthesis: Observable<Object>;
    constructor(environment: any, httpClient: HttpClient, formService: FormService, logger: LoggerService);
    computeLinkBudget(dataIn?: any, urlIn?: string): Observable<Object> | undefined;
    toggleResults(): void;
    updateResult(value: any): void;
    getResult$(): BehaviorSubject<APIResult>;
    private handleError;
    static ɵfac: i0.ɵɵFactoryDef<ComputeLinkBudgetService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ComputeLinkBudgetService>;
}
//# sourceMappingURL=compute-link-budget.service.d.ts.map