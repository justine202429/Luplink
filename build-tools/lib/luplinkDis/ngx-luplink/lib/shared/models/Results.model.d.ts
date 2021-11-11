export declare type Element = {
    name: string;
    value: number;
    unit: string;
};
export declare type APIResult = {
    uplink: Element[];
    downlink: Element[];
};
export declare type Result = {
    uplink: {
        group: string;
        elt: Element[];
    }[];
    downlink: {
        group: string;
        elt: Element[];
    }[];
};
//# sourceMappingURL=Results.model.d.ts.map