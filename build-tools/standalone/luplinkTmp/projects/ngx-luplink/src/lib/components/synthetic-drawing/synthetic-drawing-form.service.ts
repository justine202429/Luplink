/* eslint-disable max-classes-per-file */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LinkBudgetComponent, LinkBudgetScenario } from '../../shared/models/LinkBudgetScenario.model';
import { DrawingDefault } from './models/default';

@Injectable({
  providedIn: 'root',
})
export class SyntheticDrawingFormService {
  /**
   * This class handles the form part where the user can input some values in order to display them on the graph.
   * It is not required for the graph to display. The graph can be used as standalone.
   */

  // That is not exactly a good practice but we are keeping the last value of LBScenario
  // This is used by drawingFormService as a basis for randomizing
  public LBScenario: { [id: string]: LinkBudgetScenario } = { };
  public LBScenario$: { [id: string]: Subject<LinkBudgetScenario> } = { };

  components: { id: string, component: LinkBudgetComponent }[] = DrawingDefault.defaultComponents;
  powerIn: number = DrawingDefault.powerIn;

  constructor() {
    // THIS is the wrong way to do it, subscribing to one of the object's parameters overrides other subscription.
    // Terrible bug to solve, still not sure why it did not work...
    // this.LBScenario$.default = new Subject<LinkBudgetScenario>();
    // this.LBScenario$.uplink = new Subject<LinkBudgetScenario>();
    // this.LBScenario$.downlink = new Subject<LinkBudgetScenario>();
    this.LBScenario$ = {
      default: new Subject<LinkBudgetScenario>(),
      uplink: new Subject<LinkBudgetScenario>(),
      downlink: new Subject<LinkBudgetScenario>(),
    };
  }
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // initLBScenario(id: string, powerIn = this.powerIn, components = this.components, type: 'uplink' | 'downlink' = 'uplink') {
  // }

  updateLBScenario(id: string, newLBScenario: LinkBudgetScenario) {
    this.LBScenario[id] = newLBScenario;
    this.LBScenario$[id].next(newLBScenario);
  }

  getLBScenario$(id: string): Subject<LinkBudgetScenario> {
    return this.LBScenario$[id];
  }

  getLBScenario(id: string) : LinkBudgetScenario {
    /** Do not use this function unless absolutely necessary */
    return this.LBScenario[id]; // ?? this.LBScenario$.default.getValue();
  }
}
