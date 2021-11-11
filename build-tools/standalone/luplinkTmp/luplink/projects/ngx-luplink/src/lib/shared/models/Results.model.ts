export type Element = { name: string; value: number; unit: string };
export type APIResult = { uplink: Element[]; downlink: Element[] };
export type Result = { uplink: { group: string; elt: Element[] }[]; downlink: { group: string; elt: Element[] }[] };
