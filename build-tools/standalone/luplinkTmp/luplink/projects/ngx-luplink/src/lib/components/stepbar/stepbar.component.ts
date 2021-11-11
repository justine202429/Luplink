import { Component, Input } from '@angular/core';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';

// interface Validity {
//   steps: { [key: string]: string };
//   forms: { [key: string]: string };
// }

@Component({
  selector: 'lib-stepbar',
  templateUrl: './stepbar.component.html',
  styleUrls: ['./stepbar.component.scss'],
})
export class StepbarComponent {
  @Input()
  get validity(): any {
    return this._validity;
  }
  set validity(value: any) {
    if (value) {
      this._validity = value;
    }
  }

  @Input()
  get step(): string {
    return this._step;
  }
  set step(value: string) {
    this._step = value;
  }
  private _validity: any; // Validity = { steps: {}, forms: {} };

  faCheck = faCheck;
  faExclamation = faExclamation;

  private _step: string = 'geometry';
  constructor() {}

  public updateValidity(): void {}
  public isActive(step: string): boolean {
    /**
     * Determines if one of the step is active depending on other steps validity
     */
    // eslint-disable-next-line no-restricted-syntax
    for (const key in this.validity.steps) {
      if (Object.prototype.hasOwnProperty.call(this.validity.steps, key)) {
        if (this.validity.steps[key] !== 'valid' || this.step === step) {
          // We don't want the progress bar to continue after a warning
          return true;
        }
      }
    }
    return false;
  }
}
