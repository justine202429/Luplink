import { LinkBudgetScenario } from './LinkBudgetScenario.model';

describe('LinkBudgetScenario class', () => {
  let scenario = new LinkBudgetScenario(10);
  beforeEach(() => {
    scenario = new LinkBudgetScenario(10);
    scenario.addComponent('tx', {
      label: 'Ptx', gain: 0, position: 0, width: 15, linear: false,
    });
    scenario.addComponent('cableLossTx', {
      label: 'Ltx', gain: -3, position: 15, width: 15, linear: true,
    });
    scenario.compute();
  });

  it('Should contain components', () => {
    expect(scenario.numberOfComponents()).toEqual(2);
  });

  it('Should do the right computations', () => {
    const points = scenario.getPoints();
    expect(scenario.getPowerOut()).toEqual(7);// 10-3
  });

  it('Should return the correct labels', () => {
    const label = scenario.getLabels()[1];
    expect(label.name).toEqual('Ltx');
    expect(label.position).toEqual(22.5);
  });

  it('Should add & edit components', () => {
    const nb = scenario.numberOfComponents();
    scenario.addComponent('cmp', {
      label: 'component', gain: -6, position: 30, width: 15, linear: true,
    });
    scenario.compute();
    expect(scenario.getPowerOut()).toEqual(1);
    expect(scenario.numberOfComponents()).toEqual(nb + 1, 'a');
  });
});
