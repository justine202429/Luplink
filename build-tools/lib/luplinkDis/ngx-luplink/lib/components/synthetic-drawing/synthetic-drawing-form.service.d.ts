import { Subject } from 'rxjs';
import { LinkBudgetComponent, LinkBudgetScenario } from '../../shared/models/LinkBudgetScenario.model';
import * as i0 from "@angular/core";
export declare class SyntheticDrawingFormService {
    /**
     * This class handles the form part where the user can input some values in order to display them on the graph.
     * It is not required for the graph to display. The graph can be used as standalone.
     */
    LBScenario: {
        [id: string]: LinkBudgetScenario;
    };
    LBScenario$: {
        [id: string]: Subject<LinkBudgetScenario>;
    };
    components: {
        id: string;
        component: LinkBudgetComponent;
    }[];
    powerIn: number;
    constructor();
    updateLBScenario(id: string, newLBScenario: LinkBudgetScenario): void;
    getLBScenario$(id: string): Subject<LinkBudgetScenario>;
    getLBScenario(id: string): LinkBudgetScenario;
    static ɵfac: i0.ɵɵFactoryDef<SyntheticDrawingFormService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SyntheticDrawingFormService>;
}
//# sourceMappingURL=synthetic-drawing-form.service.d.ts.map