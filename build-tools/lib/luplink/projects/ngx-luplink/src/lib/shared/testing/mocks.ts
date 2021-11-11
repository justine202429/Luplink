/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
// Mocking the Toastr module thanks to https://github.com/scttcper/ngx-toastr/issues/339#issuecomment-508750488
import { Injectable, NgModule } from '@angular/core';
import { IndividualConfig, ToastPackage, ToastRef, ToastrModule } from 'ngx-toastr';
// import mockPOSTData from './mockPOSTData.json';
// Mocking  FormService
export class MockFormService {
  public result: BehaviorSubject<any> = new BehaviorSubject('');
  fb = new FormBuilder();
  public getFormData(): FormGroup {
    // Objects.mockPOSTData.geometry
    // const geo = this.fb.group(mockPOSTData.geometry);
    return new FormBuilder().group({ test: 5, u: 3.14159265358979323846 });
  }
  public initForms(): void {}

  public getFormData$(): Observable<FormGroup> {
    return of(new FormBuilder().group({ test: 5, u: 3.14159265358979323846 }));
  }
}
// Mocking ComputeLinkBudgetService
export class MockComputeService {}
// Mocking LoggerService
export class MockupLoggerService {
  public log() {}
  public debug() {}
  public error() {}
  public info() {}
  public warn() {}
}

@Injectable()
class MockToastPackage extends ToastPackage {
  constructor() {
    const toastConfig = { toastClass: 'custom-toast' };
    super(1, <IndividualConfig>toastConfig, 'test message', 'test title', 'show', new ToastRef(null!));
  }
}

@NgModule({
  providers: [{ provide: ToastPackage, useClass: MockToastPackage }],
  imports: [ToastrModule.forRoot()],
  exports: [ToastrModule],
})
export class ToastrTestingModule {}

// INJECTION TOKENS
export const mockEnvironment = {
  production: false,
  debugMode: true,
  enableNanospace: true,
  luplinkEndpoint: 'http://localhost:8001',
  version: 0.0,
};
