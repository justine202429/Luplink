/**
 * This is used by jsatorb-link.service.ts when debugMode is true
 * It allows testing jsatorb link functionnalities directly inside luplink.
 */
export const jsoMockData = {
  header: {
    mission: 'Default-mission',
    celestialBody: 'EARTH',
    timeStart: '2021-07-22T01:53:36',
    timeEnd: '2021-07-23T01:53:41',
    step: '600',
  },
  satellites: [
    {
      name: 'SunSynchronous',
      type: 'keplerian',
      sma: '7000000',
      ecc: '0',
      inc: 97.8736,
      pa: 0,
      raan: 0,
      meanAnomaly: 0,
    },
    {
      name: 'CALSPHERE 4A',
      type: 'tle',
      line1: '1 01520U 65065H   21200.78530898  .00000048  00000-0  74357-4 0  9995',
      line2: '2 01520  90.0154 130.0589 0071394 120.1784 294.1357 13.35847446723246',
    },
    {
      name: 'CALSPHERE 2',
      type: 'tle',
      line1: '1 00902U 64063E   21200.88552299  .00000048  00000-0  58478-4 0  9991',
      line2: '2 00902  90.1726  37.8678 0019554  38.2840  29.0114 13.52697507613817',
    },
  ],
  constellations: [],
  groundStations: [
    {
      name: 'aaa',
      latitude: '1',
      longitude: '1',
      altitude: '1',
      elevation: '1',
    },
    {
      name: 'bbb',
      latitude: '1',
      longitude: '1',
      altitude: '1',
      elevation: 1,
    },
  ],
  options: {},
};
