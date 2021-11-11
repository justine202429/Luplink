export declare class HelperFunctions {
    /**
     * This class contains miscellaneous functions related to celestial dynamics.
     */
    static earthRadius: number;
    static earthMu: number;
    static distance: any;
    static convertDistance(value: number, from: string, to: string): number;
    static slantRangeFromAltElev(altitude: number, elevation: number, stationAltitude?: number, precisionDecimals?: number): number;
    static altitudeFromSrElev(sr: number, elevation: number, stationAltitude?: number): number;
    static convertTLEtoKeplearian(tle1: string, tle2: string): {
        ecc: number;
        sma: number;
    };
}
//# sourceMappingURL=helper-functions.d.ts.map