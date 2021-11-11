export interface LinkBudgetComponent {
    label: string;
    gain: number;
    linear: boolean;
    position: number;
    width: number;
}
export interface Point {
    x: number;
    y: number;
}
export declare class LinkBudgetScenario {
    private powerIn;
    private powerOut;
    private components;
    private points;
    constructor(power: number);
    setPowerIn(power: number): void;
    getPowerOut(): number;
    getLabels(): {
        name: string;
        position: number;
    }[];
    addComponent(id: string, LinkBudgetComponent: LinkBudgetComponent): void;
    addComponents(components: {
        id: string;
        component: LinkBudgetComponent;
    }[]): void;
    editGain(id: string, value: number): void;
    editGains(gains: {
        [key: string]: number;
    }): void;
    numberOfComponents(): number;
    getPoints(): Point[];
    randomize(amplitude?: number): {
        [id: string]: LinkBudgetComponent;
    };
    compute(link?: 'uplink' | 'downlink'): void;
}
//# sourceMappingURL=LinkBudgetScenario.model.d.ts.map