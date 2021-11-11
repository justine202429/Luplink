/**
 * This is used by jsatorb-link.service.ts when debugMode is true
 * It allows testing jsatorb link functionnalities directly inside luplink.
 */
export declare const jsoMockData: {
    header: {
        mission: string;
        celestialBody: string;
        timeStart: string;
        timeEnd: string;
        step: string;
    };
    satellites: ({
        name: string;
        type: string;
        sma: string;
        ecc: string;
        inc: number;
        pa: number;
        raan: number;
        meanAnomaly: number;
        line1?: undefined;
        line2?: undefined;
    } | {
        name: string;
        type: string;
        line1: string;
        line2: string;
        sma?: undefined;
        ecc?: undefined;
        inc?: undefined;
        pa?: undefined;
        raan?: undefined;
        meanAnomaly?: undefined;
    })[];
    constellations: never[];
    groundStations: ({
        name: string;
        latitude: string;
        longitude: string;
        altitude: string;
        elevation: string;
    } | {
        name: string;
        latitude: string;
        longitude: string;
        altitude: string;
        elevation: number;
    })[];
    options: {};
};
//# sourceMappingURL=data.mock.d.ts.map