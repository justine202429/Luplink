export interface LinkBudgetComponent {
  label: string;
  gain: number;
  linear: boolean;
  position: number;
  width: number; // These values are defined in percent
}

export interface Point {
  x: number;
  y: number;
}

export class LinkBudgetScenario {
  private powerIn: number = 0;

  private powerOut: number = 0;

  private components: {
    [id: string]: LinkBudgetComponent;
  };

  private points: Point[];

  constructor(power: number) {
    this.powerIn = power;
    this.components = {};
    this.points = [];
  }

  public setPowerIn(power: number) {
    this.powerIn = power;
  }

  public getPowerOut() {
    return this.powerOut;
  }

  public getLabels() {
    /**
     * Returns the different labels for the components with their associated positions in
     * the form of a list of {label, position};
     */
    const labels: { name: string; position: number }[] = [];
    Object.entries(this.components).forEach(([key, value]) => {
      const label = { name: value.label, position: value.position + value.width / 2 };
      labels.push(label);
    });
    // for (const key in this.components) {
    //     const c = this.components[key];
    //     const label = { name: c.label, position: c.position + c.width / 2 };
    //     labels.push(label);
    // }
    return labels;
  }

  public addComponent(id: string, LinkBudgetComponent: LinkBudgetComponent) {
    this.components[id] = LinkBudgetComponent;
  }

  public addComponents(components: { id: string; component: LinkBudgetComponent }[]) {
    /**
     * This method adds multiples components at once
     */

    components.forEach((s) => {
      this.addComponent(s.id, s.component);
    });
  }

  public editGain(id: string, value: number) {
    this.components[id].gain = value;
  }

  public editGains(gains: { [key: string]: number }) {
    /**
     * Edit multiple gains at once, these can be provided by a formGroup using the formGroup.formValues attribute
     */
    // console.log(gains.keys());

    Object.keys(gains).forEach((key: any) => {
      this.editGain(key, gains[key]);
    });
  }

  public numberOfComponents(): number {
    return Object.keys(this.components).length;
  }

  public getPoints(): Point[] {
    return this.points;
  }

  public randomize(amplitude: number = 30): { [id: string]: LinkBudgetComponent } {
    /** This changes the gain from the components with random values and return the new components */
    const excluded = ['tx', 'rx'];
    Object.keys(this.components).forEach((id) => {
      if (!excluded.includes(id)) {
        this.components[id].gain = Math.round((Math.random() - 0.8) * amplitude); // Rounded to nearest integer
      }
    });
    this.powerIn = Math.random() * amplitude;
    return this.components;
  }

  public compute(link: 'uplink' | 'downlink' = 'uplink') {
    /** This function gives us the points needed to plot our LB graph */
    
    // Depending on the kind of link we want to go backward
    const isUp = link === 'uplink';
    const lastPoint: Point = { x: isUp ? 0 : 100, y: this.powerIn };
    const points: Point[] = [{ x: lastPoint.x, y: lastPoint.y }];
    const discontinuityPoint: Point = { x: 0, y: 0 };
    Object.values(this.components).forEach((LinkBudgetComponent) => {
      if (!LinkBudgetComponent.linear) {
        // Here we create the discontinuity by adding a point with same abscissa
        discontinuityPoint.x = lastPoint.x;
        discontinuityPoint.y = lastPoint.y + LinkBudgetComponent.gain;
        points.push({ x: discontinuityPoint.x, y: discontinuityPoint.y });
      }

      if (isUp) lastPoint.x += LinkBudgetComponent.width;
      if (!isUp) lastPoint.x -= LinkBudgetComponent.width;
      lastPoint.y += LinkBudgetComponent.gain;

      points.push({ x: lastPoint.x, y: lastPoint.y });
    });
    this.powerOut = lastPoint.y;
    this.points = points;
    // for (const id in this.components) {
    //   if (Object.prototype.hasOwnProperty.call(this.components, id)) {
    //     const LinkBudgetComponent = this.components[id];

    //     if (!LinkBudgetComponent.linear) {
    //     // Here we create the discontinuity by adding a point with same abscissa
    //       discontinuityPoint.x = lastPoint.x;
    //       discontinuityPoint.y = lastPoint.y + LinkBudgetComponent.gain;
    //       points.push({ x: discontinuityPoint.x, y: discontinuityPoint.y });
    //     }

    //     (lastPoint.x += LinkBudgetComponent.width);
    //     (lastPoint.y += LinkBudgetComponent.gain);

    //     points.push({ x: lastPoint.x, y: lastPoint.y });
    //   }

    //   this.powerOut = lastPoint.y;
    //   this.points = points;
    // // return points;
    // }
  }
}
