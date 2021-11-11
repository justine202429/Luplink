/* eslint-disable object-shorthand */
// /* eslint-disable import/prefer-default-export */
/* eslint-disable max-classes-per-file */
// /* eslint-disable import/no-cycle */
// import { LoggerService } from 'src/app/services/logger.service';
import { Field, Form } from './Form.model';

// export class Antenna {
//   public showSelector: boolean;
//   // public template: Antenna;
//   // public gain: number;
//   // public beamwidth: number;

//   constructor() {
//     this.showSelector = false;
//   }
// }

// export class YagiAntenna extends Antenna {
//   constructor(private logger: LoggerService) {
//     super();
//     this.showSelector = true;
//   }

//   public computeGain(): number {
//     this.logger.warn('computeGain not implemented for YagiAntenna');
//     return 0;
//   }

//   public computeBeamWidth(): number {
//     this.logger.warn('computeBeamWidth not implemented for YagiAntenna');
//     return 0;
//   }
// }
export interface Antenna extends Form {
  gainCalculation?: string,
  beamWidthCalculation?: string
}
export const AntennasUtilsFunctions = {
  yagiGainComputation: function (params: any): number {
    /**
     * AMSAT uses a LUT for this computation.
     * There seems to exist Python library that could handle these calculations.
     * For now, we're interpolating the data used in AMSAT
     * This function could also call API for complex calculations
     */
    console.warn('Yagi Gain Computation - not finished', params);
    const length = params.boomLength.value;

    return Math.round(12.316 * length ** 0.2665 * 100) / 100;
  },
  yagiOptimumElements: function (params: any): number {
    console.warn('Yagi Beamwidth Computation - not finished', params);
    const length = params.boomLength.value;

    return Math.round((2.632 * length ** 0.2665 + 3.149) * 100) / 100;
  },
  yagiBeamwidthComputation: function (params: any): number {
    console.warn('Yagi Beamwidth Computation - not finished', params);
    const length = params.boomLength.value;

    return Math.round(Math.sqrt(40000 / (10 ** (this.yagiGainComputation(params) / 10))) * 100) / 100;
  },
};
export abstract class Antennas {
  static genericAntenna : Antenna = { // This template is always used to display gain and width
    // componentType: "antenna",
    componentId: '',
    params: [{
      id: 'antMaxGain',
      desc: 'Max Gain',
      units: ['dBi'],
      // dimension:"iso_gain",
      default: 14.0,
    },
    {
      id: 'antBeamWidth',
      desc: 'Beamwidth',
      units: ['°', 'rad'],
      // dimension:"angle",
      default: 35.0,
    },
    ],
  };

  static yagiAntenna: Antenna = {
    // componentType: "antenna",
    componentId: 'yagiAntenna',
    componentName: 'Yagi',
    image: 'assets/antennas/yagi.jpg',
    gainCalculation: 'yagiGainComputation',
    params: [
      {
        id: 'boomLength',
        desc: 'Boom Length',
        units: ['m', 'cm'],
        // dimension: "length",
        default: 0.4,
      },
      {
        id: 'elements',
        desc: 'Number of elements',
        units: ['m', 'cm'],
        // dimension: "length",
        default: 0.4,
      },
    ],
  };

  static helixAntenna: Antenna = {
    // componentType: "antenna",
    componentId: 'helixAntenna',
    componentName: 'Helicoidal',
    image: 'assets/antennas/helix.jpg',
    params: [
      {
        id: 'turns',
        desc: 'Turns',
        units: [],
        // dimension: "adimensional",
        default: 10,
      },
      {
        id: 'turnSpacing',
        desc: 'Turn Spacing',
        units: ['m', 'cm'],
        // dimension: "length",
        default: 0.25,
      },
      {
        id: 'circumference',
        desc: 'Circumference',
        units: ['m', 'cm'],
        // dimension: "length",
        default: 1,
      },
    ],
  };
}
