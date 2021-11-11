// /* eslint-disable import/no-cycle */
/* eslint-disable max-classes-per-file */ // #FIXME
import { Template, Form } from '@luplink/ngx-luplink';

export abstract class FormsTemplate {
  // If the unit selector doesn't display the correct unit, make sure Formslabel and FormsData have the same units (eg. W =/= Watts)
  static geometry: Form = {
    // componentType: "geometry",
    componentId: 'geometry',
    params: [
      {
        id: 'altitude',
        desc: 'Altitude',
        units: ['km', 'm'],
        default: 650,
      },
      {
        id: 'elevation',
        desc: 'Elevation Angle',
        units: ['°', 'rad'],
        default: 10,
      },
      {
        id: 'slantRange',
        desc: 'Slant Range',
        units: ['km', 'm'],
        /// /dimension:"length",
        default: 2045, // Switched to meters by default because this is what is used by LP and until we have units handled by API, this is simpler to handle it like that
      },
    ],
  };

  static UL_carrier: Form = {
    // componentType: 'carrier',
    componentId: 'carrier',
    parentComponent: 'uplink',
    params: [
      {
        id: 'frequency',
        desc: 'Frequency',
        units: ['MHz', 'kHz', 'Hz'],
        /// /dimension: "freq",
        default: 146,
      },
      {
        id: 'bandwidth',
        desc: 'Bandwidth',
        units: ['Hz', 'kHz', 'MHz'],
        /// /dimension: "bandwidth",
        default: 3,
      },
      {
        id: 'bit_rate',
        desc: 'Bit Rate',
        units: ['bps'],
        /// /dimension: "freq",
        default: 1200,
      },
      // Using the SNR method for now
      // {
      //   id: 'ber',
      //   desc: 'BER',
      //   units: [],
      //   // dimension: "ratio",
      //   default: 0.005,
      // },
      {
        id: 'ebno_threshold',
        desc: 'Eb/N0 Threshold',
        units: ['dB'],
        /// /dimension: "adimensional",
        default: 23.2,
      },
      {
        id: 'impl_loss',
        desc: 'Implementation Loss',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "adimensional",
        default: -1,
      },
      {
        id: 'system_margin',
        desc: 'System Margin',
        units: ['dB'],
        /// /dimension: "adimensional",
        default: 10,
      },
    ],
  };

  static UL_transmitter_GS: Form = {
    componentId: 'transmitter',
    parentComponent: 'uplink',
    hasAntenna: true,
    // componentType: 'transmitter',
    params: [
      {
        id: 'power',
        desc: 'Transmitter Power',
        units: ['dBW', 'W', 'dBm'],
        /// /dimension: "power", //Adding the type property so we can handle validation appropriately
        default: 10,
      },
      {
        id: 'txCableLoss',
        desc: 'Line Losses',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -2.79,
      },
      {
        id: 'txConnectorLoss',
        desc: 'Connector Losses',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -1.7,
      },
      {
        id: 'txAntennaMismatch',
        desc: 'Antenna Mismatch',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -0.5,
      },
    ],
  };
  static UL_GS_tx_antenna: Form = {
    componentId: 'transmitter_antenna',
    componentName: 'Groundstation Antenna',
    parentComponent: 'uplink',
    image: 'assets/AntennesTls.jpg',
    // hasAntenna: true,
    // componentType: 'transmitter',
    params: [
      {
        id: 'antMaxGain',
        desc: 'Max Gain',
        units: ['dBi'],
        // dimension:"iso_gain",
        default: 14,
      },
      {
        id: 'antBeamWidth',
        desc: 'Beamwidth',
        units: ['°', 'rad'],
        // dimension:"angle",
        default: 35,
      },
      // {
      //   id: 'depointingAngle',
      //   desc: 'Pointing Loss',
      //   units: ['°', 'rad'],
      //   // dimension:"angle",
      //   default: 1,
      // },
    ],
  };
  static UL_SC_rx_antenna: Form = {
    componentId: 'receiver_antenna',
    componentName: 'Spacecraft Antenna',
    parentComponent: 'uplink',
    image: 'assets/antennas/yagi.jpg',
    // hasAntenna: true,
    // componentType: 'transmitter',
    params: [
      {
        id: 'antMaxGain',
        desc: 'Max Gain',
        units: ['dBi'],
        // dimension:"iso_gain",
        default: 2.15,
      },
      {
        id: 'antBeamWidth',
        desc: 'Beamwidth',
        units: ['°', 'rad'],
        // dimension:"angle",
        default: 238,
      },
      // {
      //   id: 'depointingAngle',
      //   desc: 'Pointing Loss',
      //   units: ['°', 'rad'],
      //   // dimension:"angle",
      //   default: 0,
      // },
    ],
  };
  static UL_atmosphere: Form = {
    // componentType:'path',
    componentId: 'atmosphere',
    parentComponent: 'uplink',
    params: [
      {
        id: 'depointing_loss',
        desc: 'Depointing Loss',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -0.9,
      },
      {
        id: 'x_pol',
        desc: 'Cross Polarization',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -3.0,
      },
      {
        id: 'atm_gas',
        desc: 'Atmosphere Gases',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -1.1,
      },
      {
        id: 'ionospheric',
        desc: 'Ionospheric losses',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -0.4,
      },
    ],
  };

  static UL_receiver_SC: Form = {
    componentId: 'receiver',
    parentComponent: 'uplink',
    hasAntenna: true,
    params: [
      {
        id: 'rxAntennaTemp',
        desc: 'Antenna Noise Temperature',
        units: ['K', '°C'],
        default: 233.15,
      },
      {
        id: 'rxInlineLoss',
        desc: 'Inline Losses',
        type: 'loss',
        units: ['dB'],
        default: 0,
      },
      {
        id: 'LNA_gain',
        desc: 'LNA Gain',
        type: 'gain',
        units: ['dB', ''],
        default: 20,
      },
      {
        id: 'LNANoiseTemp',
        desc: 'LNA Noise Temperature',
        units: ['K', '°C'],
        default: 66.78,
      },
    ],
  };
  static DL_transmitter_SC: Form = {
    componentId: 'transmitter',
    parentComponent: 'downlink',
    hasAntenna: true,
    // componentType: 'transmitter',
    params: [
      {
        id: 'power',
        desc: 'Transmitter Power',
        units: ['dBW', 'W', 'dBm'],
        /// /dimension: "power", //Adding the type property so we can handle validation appropriately
        default: 10,
      },
      {
        id: 'txCableLoss',
        desc: 'Line Losses',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -4.5,
      },
      {
        id: 'txConnectorLoss',
        desc: 'Connector Losses',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -4.5,
      },
      {
        id: 'txAntennaMismatch',
        desc: 'Antenna Mismatch',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -0.5,
      },
    ],
  };
  static DL_SC_tx_antenna: Form = {
    componentId: 'transmitter_antenna',
    componentName: 'Spacecraft Antenna',
    parentComponent: 'downlink',
    image: 'assets/AntennesTls.jpg',
    // hasAntenna: true,
    // componentType: 'transmitter',
    params: [
      {
        id: 'antMaxGain',
        desc: 'Max Gain',
        units: ['dBi'],
        // dimension:"iso_gain",
        default: 2.15,
      },
      {
        id: 'antBeamWidth',
        desc: 'Beamwidth',
        units: ['°', 'rad'],
        // dimension:"angle",
        default: 138,
      },
      // {
      //   id: 'depointingAngle',
      //   desc: 'Pointing Loss',
      //   units: ['°', 'rad'],
      //   // dimension:"angle",
      //   default: 0,
      // },
    ],
  };
  static DL_atmosphere: Form = {
    // componentType:'path',
    componentId: 'atmosphere',
    parentComponent: 'downlink',
    params: [
      {
        id: 'depointing_loss',
        desc: 'Depointing Loss',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -0.9,
      },
      {
        id: 'x_pol',
        desc: 'Cross Polarization',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -3.0,
      },
      {
        id: 'atm_gas',
        desc: 'Atmosphere Gases',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -1.1,
      },
      {
        id: 'ionospheric',
        desc: 'Ionospheric losses',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "loss",
        default: -0.4,
      },
    ],
  };
  static DL_carrier: Form = {
    // componentType: 'carrier',
    componentId: 'carrier',
    parentComponent: 'downlink',
    params: [
      {
        id: 'frequency',
        desc: 'Frequency',
        units: ['MHz', 'kHz', 'Hz'],
        /// /dimension: "freq",
        default: 146,
      },
      {
        id: 'bandwidth',
        desc: 'Bandwidth',
        units: ['Hz', 'kHz', 'MHz'],
        /// /dimension: "bandwidth",
        default: 3,
      },
      {
        id: 'bit_rate',
        desc: 'Bit Rate',
        units: ['bps'],
        /// /dimension: "freq",
        default: 1200,
      },
      {
        id: 'ebno_threshold',
        desc: 'Eb/N0 Threshold',
        units: ['dB'],
        /// /dimension: "adimensional",
        default: 23.2,
      },
      {
        id: 'impl_loss',
        desc: 'Implementation Loss',
        type: 'loss',
        units: ['dB'],
        /// /dimension: "adimensional",
        default: -1,
      },

      {
        id: 'system_margin',
        desc: 'System Margin',
        units: ['dB'],
        /// /dimension: "adimensional",
        default: 10,
      },
    ],
  };
  static DL_GS_rx_antenna: Form = {
    componentId: 'receiver_antenna',
    componentName: 'Groundstation Antenna',
    parentComponent: 'downlink',
    image: 'assets/antennas/yagi.jpg',
    // hasAntenna: true,
    // componentType: 'transmitter',
    params: [
      {
        id: 'antMaxGain',
        desc: 'Max Gain',
        units: ['dBi'],
        // dimension:"iso_gain",
        default: 14,
      },
      {
        id: 'antBeamWidth',
        desc: 'Beamwidth',
        units: ['°', 'rad'],
        // dimension:"angle",
        default: 35,
      },
      // {
      //   id: 'depointingAngle',
      //   desc: 'Pointing Loss',
      //   units: ['°', 'rad'],
      //   // dimension:"angle",
      //   default: 1,
      // },
    ],
  };
  static DL_receiver_GS: Form = {
    componentId: 'receiver',
    parentComponent: 'downlink',
    hasAntenna: true,
    params: [
      {
        id: 'rxAntennaTemp',
        desc: 'Antenna Noise Temperature',
        units: ['K', '°C'],
        default: 230.4,
      },
      {
        id: 'rxInlineLoss',
        desc: 'Inline Losses',
        type: 'loss',
        units: ['dB'],
        default: -0.87,
      },
      {
        id: 'LNA_gain',
        desc: 'LNA Gain',
        type: 'gain',
        units: ['dB', ''],
        default: 20,
      },
      {
        id: 'LNANoiseTemp',
        desc: 'LNA Noise Temperature',
        units: ['K', '°C'],
        default: 66.78,
      },
    ],
  };
  // static availableAntennas = [Antennas.yagiAntenna, Antennas.helixAntenna];

  static template: Template = {
    components: [
      FormsTemplate.geometry,

      FormsTemplate.UL_transmitter_GS,
      FormsTemplate.UL_GS_tx_antenna,
      FormsTemplate.UL_carrier,
      FormsTemplate.UL_atmosphere,
      FormsTemplate.UL_SC_rx_antenna,
      FormsTemplate.UL_receiver_SC,

      FormsTemplate.DL_transmitter_SC,
      FormsTemplate.DL_SC_tx_antenna,
      FormsTemplate.DL_atmosphere,
      FormsTemplate.DL_carrier,
      FormsTemplate.DL_GS_rx_antenna,
      FormsTemplate.DL_receiver_GS,
    ],
  };
  // static transmitter_GS: Form;
}

// Various templates used for test, probably obsolete

// export class UIExperimentsFormTemplate {
//   base : Form = {
//     // componentType: "general",
//     componentId: '',
//     parentComponent: 'uplink',
//     params: [{
//       id: 'slant',
//       desc: 'Slant Range',
//       units: ['km'],
//       // dimension:"length",
//       default: 2050,
//     },
//     {
//       id: 'freq',
//       desc: 'Frequency',
//       units: ['MHz', 'GHz'],
//       // dimension: "freq",
//       default: 136,
//     }],
//   };

//   antenna : Form = {
//     // componentType: "antenna",
//     componentId: '',
//     parentComponent: 'uplink',
//     params: [{
//       id: 'length',
//       desc: 'Length',
//       units: ['m'],
//       // dimension:"length",
//       default: 0.4,
//     },
//     {
//       id: 'peak_gain',
//       desc: 'Peak Gain',
//       units: ['dBi'],
//       // dimension: "gain",
//       default: 14,
//     }],
//   };

//   transmitter : Form = {
//     // componentType: "Transmitter",
//     componentId: '',
//     parentComponent: 'uplink',
//     params: [{
//       id: 'power',
//       desc: 'Power In',
//       units: ['W', 'dBW'],
//       // dimension:"power",
//       default: 10,
//     },
//     {
//       id: 'txCableLoss',
//       desc: 'Ltx',
//       units: ['dB', ''],
//       // dimension: "loss",
//       default: 5,
//     },
//     {
//       id: 'txAntGain',
//       desc: 'Antenna Gain',
//       units: ['dBi'],
//       // dimension: "iso_gain",
//       default: 14,
//     },
//     ],
//   };

//   receiver : Form = {
//     // componentType: "Receiver",
//     componentId: '',
//     parentComponent: 'uplink',
//     params: [{
//       id: 'rxAntGain',
//       desc: 'Antenna Gain',
//       units: ['dBi'],
//       // dimension:"iso_gain",
//       default: 2.15,
//     },
//     {
//       id: 'rxCableLoss',
//       desc: 'Lrx',
//       units: ['dB', ''],
//       // dimension: "loss",
//       default: 3,
//     },
//     {
//       id: 'amplifier',
//       desc: 'Amplifier',
//       units: ['dB', ''],
//       // dimension: "gain",
//       default: 30,
//     },
//     ],
//   };

//   customAntenna : Form = {
//     // componentType: "antenna",
//     componentId: '',
//     parentComponent: 'uplink',
//     params: [{
//       id: 'antMaxGain',
//       desc: 'Max Gain',
//       units: ['dBi'],
//       // dimension:"iso_gain",
//       default: 14,
//     },
//     {
//       id: 'antBeamWidth',
//       desc: 'Beamwidth',
//       units: ['°', 'rad'],
//       // dimension:"angle",
//       default: 35,
//     },
//     ],
//   };
// }
// /** This template is used by the Simple Link Budget component */
// export class SimpleLBFormsTemplate {
//   base : Form = {
//     // componentType: "General",
//     componentId: '',
// params: [{
//       id: 'slant',
//       desc: 'Slant Range',
//       units: ['km'],
//       // dimension:"length",
//       default: 2050,
//     },
//     {
//       id: 'freq',
//       desc: 'Frequency',
//       units: ['MHz', 'GHz'],
//       // dimension: "freq",
//       default: 136,
//     }],
//   };

//   transmitter : Form = {
//     // componentType: "Transmitter",
//     componentId: '',
// parentComponent: 'uplink',//
// params: [{
//       id: 'power',
//       desc: 'Power In',
//       units: ['W', 'dBW'],
//       // dimension:"power",
//       default: 10,
//     },
//     {
//       id: 'txCableLoss',
//       desc: 'Ltx',
//       units: ['dB', ''],
//       // dimension: "loss",
//       default: 5,
//     },
//     {
//       id: 'txAntennaGain',
//       desc: 'Antenna Gain',
//       units: ['dBi'],
//       // options: 'antennaSelector',
//       // dimension: "iso_gain",
//       default: 14,
//     },
//     ],
//   };

//   receiver : Form = {
//     // componentType: "Receiver",
//     componentId: '',
// parentComponent: 'uplink',//
// params: [{
//       id: 'rxAntGain',
//       desc: 'Antenna Gain',
//       units: ['dBi'],
//       // dimension:"iso_gain",
//       default: 2.15,
//     },
//     {
//       id: 'rxCableLoss',
//       desc: 'Lrx',
//       units: ['dB', ''],
//       // dimension: "loss",
//       default: 3,
//     },
//     {
//       id: 'amplifier',
//       desc: 'Amplifier',
//       units: ['dB', ''],
//       // dimension: "gain",
//       default: 30,
//     },
//     ],
//   };
// }
// export class LBFormsTemplate {
//   base : Form = {
//     // componentType: "general",
//     componentId: 'geometry',
// parentComponent: 'uplink',

//     params: [{
//       id: 'slant',
//       desc: 'Slant Range',
//       units: ['km'],
//       // dimension:"length",
//       default: 2050,
//     }],
//   };

//   GS_transmitter : Form = {
//     // componentType: "Transmitter",
//     componentId: 'GS_transmitter',
// p// arentComponent: 'uplink',//
// params: [{
//       id: 'power',
//       desc: 'Power In',
//       units: ['W', 'dBW'],
//       // dimension:"power",
//       default: 10,
//     },
//     {
//       id: 'txCableLoss',
//       desc: 'Ltx',
//       units: ['dB', ''],
//       // dimension: "loss",
//       default: 5,
//     },

//     ],
//   };

//   SC_receiver : Form = {
//     // componentType: "Receiver",
//     componentId: 'SC_receiver',
// parentComponent: 'uplink',

//     params: [
//       {
//         id: 'rxCableLoss',
//         desc: 'Lrx',
//         units: ['dB', ''],
//         // dimension: "loss",
//         default: 3,
//       },
//       {
//         id: 'amplifier',
//         desc: 'Amplifier',
//         units: ['dB', ''],
//         // dimension: "gain",
//         default: 30,
//       },
//     ],
//   };

//   carrier: Form = {
//     // componentType: 'carrier',
//     componentId: 'UL_carrier',
// parentComponent: 'uplink',//
// params: [
//       {
//         id: 'frequency',
//         desc: 'Frequency',
//         units: ['MHz', 'kHz', 'Hz'],
//         // dimension: "freq",
//         default: 300,
//       },
//       {
//         id: 'bandwidth',
//         desc: 'Bandwidth',
//         units: ['Hz', 'kHz', 'MHz'],
//         // dimension: "bandwidth",
//         default: 3,
//       },
//       {
//         id: 'ber',
//         desc: 'BER',
//         units: [],
//         // dimension: "ratio",
//         default: 0.005,
//       },
//     ],
//   };
// }
