/* eslint-disable */ //#FIXME: Enable ESLint
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
// https://dev.to/vishesh/custom-error-handling-in-angular-reactive-forms-5f05
export class FormControlWarn extends FormControl {
}
export class CustomValidators {
    constructor() {
        this.positiveLossWarningValidator = (control) => {
            var _a;
            control.warnings =
                ((_a = control.get('value')) === null || _a === void 0 ? void 0 : _a.value) > 0 ? 'Loss is algebraic here and usually < 0' : '';
            return null;
        };
        this.requiredValidator = (control) => {
            if (!control && control !== 0) {
                return {
                    error: 'Please enter a value here',
                };
            }
            return null;
        };
        this.validValidator = (control) => {
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
        this.fieldValidator = (control) => {
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
            let req = this.requiredValidator(value === null || value === void 0 ? void 0 : value.value);
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
}
CustomValidators.ɵfac = function CustomValidators_Factory(t) { return new (t || CustomValidators)(); };
CustomValidators.ɵprov = i0.ɵɵdefineInjectable({ token: CustomValidators, factory: CustomValidators.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomValidators, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9zaGFyZWQvY3VzdG9tLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQixDQUFDLHVCQUF1QjtBQUU1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBbUIsV0FBVyxFQUFpQyxNQUFNLGdCQUFnQixDQUFDOztBQUM3Riw4RUFBOEU7QUFFOUUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsV0FBVztDQUUvQztBQU9ELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7UUFFTyxpQ0FBNEIsR0FBZ0IsQ0FBQyxPQUF3QixFQUEyQixFQUFFOztZQUNyRixPQUFRLENBQUMsUUFBUTtnQkFDakMsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxLQUFLLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2xGLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUssc0JBQWlCLEdBQWdCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtZQUM1RixJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU87b0JBQ0wsS0FBSyxFQUFFLDJCQUEyQjtpQkFDbkMsQ0FBQzthQUNIO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFSyxtQkFBYyxHQUFnQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7WUFDekYsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU87b0JBQ0wsS0FBSyxFQUFFLGdDQUFnQztpQkFDeEMsQ0FBQzthQUNIO1lBQ0QsT0FBTztnQkFDTCxLQUFLLEVBQUUsbUJBQW1CO2FBQzNCLENBQUM7UUFDSixDQUFDLENBQUM7UUFFSyxtQkFBYyxHQUFnQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7WUFDekYsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDOzs7Ozs7O1lBT0E7WUFDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLDRDQUE0QztZQUM1QywyQkFBMkI7WUFFM0IsOENBQThDO1lBQzlDLDRCQUE0QjtZQUM1Qix5QkFBeUI7WUFDekIsTUFBTTtZQUNOLElBQUk7WUFDSixPQUFPLEdBQUcsQ0FBQztZQUVYLHlEQUF5RDtZQUN6RCwrQkFBK0I7UUFDakMsQ0FBQyxDQUFDO0lBekRhLENBQUM7O2dGQURMLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGZixNQUFNO3VGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyNGSVhNRTogRW5hYmxlIEVTTGludFxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIGh0dHBzOi8vZGV2LnRvL3Zpc2hlc2gvY3VzdG9tLWVycm9yLWhhbmRsaW5nLWluLWFuZ3VsYXItcmVhY3RpdmUtZm9ybXMtNWYwNVxuXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xXYXJuIGV4dGVuZHMgRm9ybUNvbnRyb2wge1xuICB3YXJuaW5nczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhcm5GbiBleHRlbmRzIFZhbGlkYXRvckZuIHt9XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3JzIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBwb3NpdGl2ZUxvc3NXYXJuaW5nVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgKDxGb3JtQ29udHJvbFdhcm4+Y29udHJvbCkud2FybmluZ3MgPVxuICAgICAgY29udHJvbC5nZXQoJ3ZhbHVlJyk/LnZhbHVlID4gMCA/ICdMb3NzIGlzIGFsZ2VicmFpYyBoZXJlIGFuZCB1c3VhbGx5IDwgMCcgOiAnJztcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBwdWJsaWMgcmVxdWlyZWRWYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBpZiAoIWNvbnRyb2wgJiYgY29udHJvbCAhPT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSB2YWx1ZSBoZXJlJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHB1YmxpYyB2YWxpZFZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIGlmIChjb250cm9sLmVycm9ycyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCB7IHBhdHRlcm4gfSA9IGNvbnRyb2wuZXJyb3JzO1xuICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogJ1BsZWFzZSBlbnRlciBhIG51bWVyaWNhbCB2YWx1ZScsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICdVbmtub3duIGVycm9yICgzKScsXG4gICAgfTtcbiAgfTtcblxuICBwdWJsaWMgZmllbGRWYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBsZXQgdmFsdWUgPSBjb250cm9sLmdldCgndmFsdWUnKTtcbiAgICBjb25zdCB1bml0ID0gY29udHJvbC5nZXQoJ3VuaXQnKTtcblxuICAgIC8qXG4gIFBhc3MgdmFsdWUgQWJzdHJhY3QgY29udHJvbCB0aHJvdWdoIG11bHRpcGxlIHZhbGlkYXRvcnMgYW5kIG91dHB1dCB0aGUgcmVzdWx0XG4gIFRPRE86IG9yZGVyIHRoZW0gYnkgaW1wb3J0YW5jZSBhbmQgb25seSBzaG93IHRoZSBtb3N0IGphcnJpbmcgaXNzdWUgKG9yIHNob3VsZCB3ZSBzaG93IGFsbCBlcnJvcnMgYXQgb25jZT8pXG4gIC1yZXF1aXJlZFxuICAtbnVtZXJpY2FsXG4gIC1ib3VuZHNcbiAgLSA/XG4gICovXG4gICAgbGV0IHJlcSA9IHRoaXMucmVxdWlyZWRWYWxpZGF0b3IodmFsdWU/LnZhbHVlKTtcbiAgICAvL2xldCB2YWwgPSB0aGlzLnZhbGlkVmFsaWRhdG9yKHZhbHVlLnZhbHVlKVxuICAgIC8vbGV0IGVyckxpc3QgPSBbcmVxLCB2YWxdO1xuXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IGVyckxpc3QubGVuZ3RoOyBpICs9IDEpe1xuICAgIC8vICAgaWYoZXJyTGlzdFtpXSAhPSBudWxsKXtcbiAgICAvLyAgICAgcmV0dXJuIGVyckxpc3RbaV07XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHJldHVybiByZXE7XG5cbiAgICAvLyByZXR1cm4gISh2YWx1ZSAmJiB1bml0KSA/IHsgZmllbGRWYWxpZDogdHJ1ZSB9IDogbnVsbDtcbiAgICAvLyBUT0RPOiBIYW5kbGUgZGlmZmVyZW50IHVuaXRzXG4gIH07XG59XG4iXX0=