export interface Field {
    id: string;
    desc: string;
    type?: 'gain' | 'loss';
    units: string[];
    options?: 'field' | 'antenna';
    optionsField?: Field[];
    default: number;
    alternative?: Form;
}
export interface Form {
    componentId: string;
    parentComponent?: string;
    hasAntenna?: boolean;
    componentName?: string;
    image?: string;
    params: Field[];
    parent?: string;
    computeFn?: string;
}
export interface AntennaField {
    id: string;
    antennaId: string;
    antennaValues: Field[];
}
export interface Template {
    components: Form[];
}
export declare class EmptyForm implements Form {
    componentId: string;
    parentComponent?: string;
    params: Field[];
    constructor();
}
//# sourceMappingURL=Form.model.d.ts.map