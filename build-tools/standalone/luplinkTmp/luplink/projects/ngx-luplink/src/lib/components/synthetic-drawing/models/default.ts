import { LinkBudgetComponent } from '../../../shared/models/LinkBudgetScenario.model';

export abstract class DrawingDefault {
  // This class keeps all the default values used by the synthetic drawing module.
  static powerIn = 10;
  static defaultGains = {
    cableTx: -3,
    antTx: 24,
    fsl: -125,
    antRx: 35,
    cableRx: -5,
  };
  static defaultComponents: { id: string; component: LinkBudgetComponent }[] = [
    {
      id: 'tx',
      component: {
        label: 'Ptx',
        gain: 0,
        linear: true,
        position: 0,
        width: 15,
      },
    },
    {
      id: 'cableTx',
      component: {
        label: 'Ltx',
        gain: DrawingDefault.defaultGains.cableTx,
        linear: true,
        position: 15,
        width: 10,
      },
    },
    {
      id: 'antTx',
      component: {
        label: 'Gtx',
        gain: DrawingDefault.defaultGains.antTx,
        linear: false,
        position: 25,
        width: 10,
      },
    },
    {
      id: 'fsl',
      component: {
        label: 'Lpath',
        gain: DrawingDefault.defaultGains.fsl,
        linear: true,
        position: 35,
        width: 30,
      },
    },
    {
      id: 'antRx',
      component: {
        label: 'Grx',
        gain: DrawingDefault.defaultGains.antRx,
        linear: false,
        position: 65,
        width: 10,
      },
    },
    {
      id: 'cableRx',
      component: {
        label: 'Lrx',
        gain: DrawingDefault.defaultGains.cableRx,
        linear: true,
        position: 75,
        width: 10,
      },
    },
    {
      id: 'rx',
      component: {
        label: 'Prx',
        gain: 0,
        linear: true,
        position: 85,
        width: 15,
      },
    },
  ];
}
