import { Form } from './Form.model';
export interface Antenna extends Form {
    gainCalculation?: string;
    beamWidthCalculation?: string;
}
export declare const AntennasUtilsFunctions: {
    yagiGainComputation: (params: any) => number;
    yagiOptimumElements: (params: any) => number;
    yagiBeamwidthComputation: (params: any) => number;
};
export declare abstract class Antennas {
    static genericAntenna: Antenna;
    static yagiAntenna: Antenna;
    static helixAntenna: Antenna;
}
//# sourceMappingURL=Antennas.d.ts.map