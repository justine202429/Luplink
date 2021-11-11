/* eslint-disable */

import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// https://dev.to/vishesh/custom-error-handling-in-angular-reactive-forms-5f05

export class FormControlWarn extends FormControl {
  warnings: any;
}

export interface WarnFn extends ValidatorFn {}

@Injectable({
  providedIn: 'root',
})
export class CustomValidators {
  constructor() {}

  public positiveLossWarningValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    (<FormControlWarn>control).warnings =
      control.get('value')?.value > 0 ? 'Loss is algebraic here and usually < 0' : '';
    return null;
  };

  public requiredValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!control && control !== 0) {
      return {
        error: 'Please enter a value here',
      };
    }
    return null;
  };

  public validValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control.errors === null) {
      return null;
    }
    let { pattern } = control.errors;
    if (pattern) {
      return {
        error: 'Please enter a numerical value',
      };
    }
    return {
      error: 'Unknown error (3)',
    };
  };

  public fieldValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let value = control.get('value');
    const unit = control.get('unit');

    /*
  Pass value Abstract control through multiple validators and output the result
  TODO: order them by importance and only show the most jarring issue (or should we show all errors at once?)
  -required
  -numerical
  -bounds
  - ?
  */
    let req = this.requiredValidator(value?.value);
    //let val = this.validValidator(value.value)
    //let errList = [req, val];

    // for(let i = 0; i < errList.length; i += 1){
    //   if(errList[i] != null){
    //     return errList[i];
    //   }
    // }
    return req;

    // return !(value && unit) ? { fieldValid: true } : null;
    // TODO: Handle different units
  };
}
