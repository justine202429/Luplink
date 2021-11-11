/* eslint-disable max-classes-per-file */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DrawingDefault } from './models/default';
import * as i0 from "@angular/core";
export class SyntheticDrawingFormService {
    constructor() {
        /**
         * This class handles the form part where the user can input some values in order to display them on the graph.
         * It is not required for the graph to display. The graph can be used as standalone.
         */
        // That is not exactly a good practice but we are keeping the last value of LBScenario
        // This is used by drawingFormService as a basis for randomizing
        this.LBScenario = {};
        this.LBScenario$ = {};
        this.components = DrawingDefault.defaultComponents;
        this.powerIn = DrawingDefault.powerIn;
        // THIS is the wrong way to do it, subscribing to one of the object's parameters overrides other subscription.
        // Terrible bug to solve, still not sure why it did not work...
        // this.LBScenario$.default = new Subject<LinkBudgetScenario>();
        // this.LBScenario$.uplink = new Subject<LinkBudgetScenario>();
        // this.LBScenario$.downlink = new Subject<LinkBudgetScenario>();
        this.LBScenario$ = {
            default: new Subject(),
            uplink: new Subject(),
            downlink: new Subject(),
        };
    }
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // initLBScenario(id: string, powerIn = this.powerIn, components = this.components, type: 'uplink' | 'downlink' = 'uplink') {
    // }
    updateLBScenario(id, newLBScenario) {
        this.LBScenario[id] = newLBScenario;
        this.LBScenario$[id].next(newLBScenario);
    }
    getLBScenario$(id) {
        return this.LBScenario$[id];
    }
    getLBScenario(id) {
        /** Do not use this function unless absolutely necessary */
        return this.LBScenario[id]; // ?? this.LBScenario$.default.getValue();
    }
}
SyntheticDrawingFormService.ɵfac = function SyntheticDrawingFormService_Factory(t) { return new (t || SyntheticDrawingFormService)(); };
SyntheticDrawingFormService.ɵprov = i0.ɵɵdefineInjectable({ token: SyntheticDrawingFormService, factory: SyntheticDrawingFormService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SyntheticDrawingFormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludGhldGljLWRyYXdpbmctZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9jb21wb25lbnRzL3N5bnRoZXRpYy1kcmF3aW5nL3N5bnRoZXRpYy1kcmF3aW5nLWZvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFLbEQsTUFBTSxPQUFPLDJCQUEyQjtJQWN0QztRQWJBOzs7V0FHRztRQUVILHNGQUFzRjtRQUN0RixnRUFBZ0U7UUFDekQsZUFBVSxHQUF5QyxFQUFHLENBQUM7UUFDdkQsZ0JBQVcsR0FBa0QsRUFBRyxDQUFDO1FBRXhFLGVBQVUsR0FBcUQsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQ2hHLFlBQU8sR0FBVyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBR3ZDLDhHQUE4RztRQUM5RywrREFBK0Q7UUFDL0QsZ0VBQWdFO1FBQ2hFLCtEQUErRDtRQUMvRCxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixPQUFPLEVBQUUsSUFBSSxPQUFPLEVBQXNCO1lBQzFDLE1BQU0sRUFBRSxJQUFJLE9BQU8sRUFBc0I7WUFDekMsUUFBUSxFQUFFLElBQUksT0FBTyxFQUFzQjtTQUM1QyxDQUFDO0lBQ0osQ0FBQztJQUNELGdFQUFnRTtJQUNoRSw2SEFBNkg7SUFDN0gsSUFBSTtJQUVKLGdCQUFnQixDQUFDLEVBQVUsRUFBRSxhQUFpQztRQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsY0FBYyxDQUFDLEVBQVU7UUFDdkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBVTtRQUN0QiwyREFBMkQ7UUFDM0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMENBQTBDO0lBQ3hFLENBQUM7O3NHQTFDVSwyQkFBMkI7bUVBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkIsbUJBRjFCLE1BQU07dUZBRVAsMkJBQTJCO2NBSHZDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMaW5rQnVkZ2V0Q29tcG9uZW50LCBMaW5rQnVkZ2V0U2NlbmFyaW8gfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL0xpbmtCdWRnZXRTY2VuYXJpby5tb2RlbCc7XG5pbXBvcnQgeyBEcmF3aW5nRGVmYXVsdCB9IGZyb20gJy4vbW9kZWxzL2RlZmF1bHQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3ludGhldGljRHJhd2luZ0Zvcm1TZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgaGFuZGxlcyB0aGUgZm9ybSBwYXJ0IHdoZXJlIHRoZSB1c2VyIGNhbiBpbnB1dCBzb21lIHZhbHVlcyBpbiBvcmRlciB0byBkaXNwbGF5IHRoZW0gb24gdGhlIGdyYXBoLlxuICAgKiBJdCBpcyBub3QgcmVxdWlyZWQgZm9yIHRoZSBncmFwaCB0byBkaXNwbGF5LiBUaGUgZ3JhcGggY2FuIGJlIHVzZWQgYXMgc3RhbmRhbG9uZS5cbiAgICovXG5cbiAgLy8gVGhhdCBpcyBub3QgZXhhY3RseSBhIGdvb2QgcHJhY3RpY2UgYnV0IHdlIGFyZSBrZWVwaW5nIHRoZSBsYXN0IHZhbHVlIG9mIExCU2NlbmFyaW9cbiAgLy8gVGhpcyBpcyB1c2VkIGJ5IGRyYXdpbmdGb3JtU2VydmljZSBhcyBhIGJhc2lzIGZvciByYW5kb21pemluZ1xuICBwdWJsaWMgTEJTY2VuYXJpbzogeyBbaWQ6IHN0cmluZ106IExpbmtCdWRnZXRTY2VuYXJpbyB9ID0geyB9O1xuICBwdWJsaWMgTEJTY2VuYXJpbyQ6IHsgW2lkOiBzdHJpbmddOiBTdWJqZWN0PExpbmtCdWRnZXRTY2VuYXJpbz4gfSA9IHsgfTtcblxuICBjb21wb25lbnRzOiB7IGlkOiBzdHJpbmcsIGNvbXBvbmVudDogTGlua0J1ZGdldENvbXBvbmVudCB9W10gPSBEcmF3aW5nRGVmYXVsdC5kZWZhdWx0Q29tcG9uZW50cztcbiAgcG93ZXJJbjogbnVtYmVyID0gRHJhd2luZ0RlZmF1bHQucG93ZXJJbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBUSElTIGlzIHRoZSB3cm9uZyB3YXkgdG8gZG8gaXQsIHN1YnNjcmliaW5nIHRvIG9uZSBvZiB0aGUgb2JqZWN0J3MgcGFyYW1ldGVycyBvdmVycmlkZXMgb3RoZXIgc3Vic2NyaXB0aW9uLlxuICAgIC8vIFRlcnJpYmxlIGJ1ZyB0byBzb2x2ZSwgc3RpbGwgbm90IHN1cmUgd2h5IGl0IGRpZCBub3Qgd29yay4uLlxuICAgIC8vIHRoaXMuTEJTY2VuYXJpbyQuZGVmYXVsdCA9IG5ldyBTdWJqZWN0PExpbmtCdWRnZXRTY2VuYXJpbz4oKTtcbiAgICAvLyB0aGlzLkxCU2NlbmFyaW8kLnVwbGluayA9IG5ldyBTdWJqZWN0PExpbmtCdWRnZXRTY2VuYXJpbz4oKTtcbiAgICAvLyB0aGlzLkxCU2NlbmFyaW8kLmRvd25saW5rID0gbmV3IFN1YmplY3Q8TGlua0J1ZGdldFNjZW5hcmlvPigpO1xuICAgIHRoaXMuTEJTY2VuYXJpbyQgPSB7XG4gICAgICBkZWZhdWx0OiBuZXcgU3ViamVjdDxMaW5rQnVkZ2V0U2NlbmFyaW8+KCksXG4gICAgICB1cGxpbms6IG5ldyBTdWJqZWN0PExpbmtCdWRnZXRTY2VuYXJpbz4oKSxcbiAgICAgIGRvd25saW5rOiBuZXcgU3ViamVjdDxMaW5rQnVkZ2V0U2NlbmFyaW8+KCksXG4gICAgfTtcbiAgfVxuICAvLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIC8vIGluaXRMQlNjZW5hcmlvKGlkOiBzdHJpbmcsIHBvd2VySW4gPSB0aGlzLnBvd2VySW4sIGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMsIHR5cGU6ICd1cGxpbmsnIHwgJ2Rvd25saW5rJyA9ICd1cGxpbmsnKSB7XG4gIC8vIH1cblxuICB1cGRhdGVMQlNjZW5hcmlvKGlkOiBzdHJpbmcsIG5ld0xCU2NlbmFyaW86IExpbmtCdWRnZXRTY2VuYXJpbykge1xuICAgIHRoaXMuTEJTY2VuYXJpb1tpZF0gPSBuZXdMQlNjZW5hcmlvO1xuICAgIHRoaXMuTEJTY2VuYXJpbyRbaWRdLm5leHQobmV3TEJTY2VuYXJpbyk7XG4gIH1cblxuICBnZXRMQlNjZW5hcmlvJChpZDogc3RyaW5nKTogU3ViamVjdDxMaW5rQnVkZ2V0U2NlbmFyaW8+IHtcbiAgICByZXR1cm4gdGhpcy5MQlNjZW5hcmlvJFtpZF07XG4gIH1cblxuICBnZXRMQlNjZW5hcmlvKGlkOiBzdHJpbmcpIDogTGlua0J1ZGdldFNjZW5hcmlvIHtcbiAgICAvKiogRG8gbm90IHVzZSB0aGlzIGZ1bmN0aW9uIHVubGVzcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSAqL1xuICAgIHJldHVybiB0aGlzLkxCU2NlbmFyaW9baWRdOyAvLyA/PyB0aGlzLkxCU2NlbmFyaW8kLmRlZmF1bHQuZ2V0VmFsdWUoKTtcbiAgfVxufVxuIl19