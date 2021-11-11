export class HelperFunctions {
  /**
   * This class contains miscellaneous functions related to celestial dynamics.
   */

  static earthRadius: number = 6378.137; // in km, at the equator
  static earthMu: number = 3.986004418 * (10 ** 14);
  static distance: any =
  {
    km: 10e3,
    // cm: 10e-2,
    m: 1,
  };

  public static convertDistance(value: number, from: string, to: string) {
    return value * (this.distance[from] / this.distance[to]);
  }
  // public static convertAngle(value: number, from: string, to: string) {
  //   return value * (this.distance[from] / this.distance[to]);
  // }
  public static slantRangeFromAltElev(altitude: number, elevation: number, stationAltitude: number = 0, precisionDecimals = 0): number {
    /* Computes the slant range from the altitude and the elevation
    * The altitude is in kilometer and the delta angle in degrees,
    * stationAltitude from sea level in meters
    * precisionDecimals is the number of decimals you want to round to
    * */
    if (!(altitude && elevation)) {
      console.error('Warning', 'Tried to compute slant range with invalid values');
      console.debug(`altitude: ${altitude}, elevation: ${elevation}`);
      return 0;
    }
    const factor = 10 ** precisionDecimals;
    const delta = elevation * (Math.PI / 180);
    return Math.round(this.earthRadius * (
      Math.sqrt(((altitude + this.earthRadius) / this.earthRadius) ** 2
        - Math.cos(delta) ** 2)
        - Math.sin(delta)) * factor) / factor;
  }

  public static altitudeFromSrElev(sr: number, elevation: number, stationAltitude: number = 0): number {
    /**
     * Computes the slant range from the altitude and the elevation
     * The altitude is in kilometer and the delta angle in degrees, stationAltitude from sea level in meters
    */
    const delta = elevation * (Math.PI / 180);
    return this.earthRadius * Math.sqrt((sr / this.earthRadius + Math.sin(delta)) ** 2 + Math.cos(delta) ** 2);
  }

  public static convertTLEtoKeplearian(tle1: string, tle2: string) {
    // See https://blog.hardinglabs.com/tle-to-kep.html
    // These manual calculations might be lacking precision. If that's an issued, switch to sgp4
    // console.log(tle1);
    // console.log(tle2.split(''));
    const ecc = parseFloat(`0.${tle2.substring(26, 33)}`) / 10;
    // console.log(ecc);

    const n = parseFloat(tle2.substring(52, 63)) * ((2 * Math.PI) / (3600 * 24)); // Mean motion converted to rad/s
    // console.log(tle2.substring(52, 63));
    const sma = (this.earthMu / (n ** 2)) ** (1 / 3) / 1000;
    return { ecc, sma };
  }
}
