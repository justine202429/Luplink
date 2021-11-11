export class HelperFunctions {
    static convertDistance(value, from, to) {
        return value * (this.distance[from] / this.distance[to]);
    }
    // public static convertAngle(value: number, from: string, to: string) {
    //   return value * (this.distance[from] / this.distance[to]);
    // }
    static slantRangeFromAltElev(altitude, elevation, stationAltitude = 0, precisionDecimals = 0) {
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
        const factor = Math.pow(10, precisionDecimals);
        const delta = elevation * (Math.PI / 180);
        return Math.round(this.earthRadius * (Math.sqrt(Math.pow(((altitude + this.earthRadius) / this.earthRadius), 2)
            - Math.pow(Math.cos(delta), 2))
            - Math.sin(delta)) * factor) / factor;
    }
    static altitudeFromSrElev(sr, elevation, stationAltitude = 0) {
        /**
         * Computes the slant range from the altitude and the elevation
         * The altitude is in kilometer and the delta angle in degrees, stationAltitude from sea level in meters
        */
        const delta = elevation * (Math.PI / 180);
        return this.earthRadius * Math.sqrt(Math.pow((sr / this.earthRadius + Math.sin(delta)), 2) + Math.pow(Math.cos(delta), 2));
    }
    static convertTLEtoKeplearian(tle1, tle2) {
        // See https://blog.hardinglabs.com/tle-to-kep.html
        // These manual calculations might be lacking precision. If that's an issued, switch to sgp4
        // console.log(tle1);
        // console.log(tle2.split(''));
        const ecc = parseFloat(`0.${tle2.substring(26, 33)}`) / 10;
        // console.log(ecc);
        const n = parseFloat(tle2.substring(52, 63)) * ((2 * Math.PI) / (3600 * 24)); // Mean motion converted to rad/s
        // console.log(tle2.substring(52, 63));
        const sma = Math.pow((this.earthMu / (Math.pow(n, 2))), (1 / 3)) / 1000;
        return { ecc, sma };
    }
}
/**
 * This class contains miscellaneous functions related to celestial dynamics.
 */
HelperFunctions.earthRadius = 6378.137; // in km, at the equator
HelperFunctions.earthMu = 3.986004418 * (Math.pow(10, 14));
HelperFunctions.distance = {
    km: 10e3,
    // cm: 10e-2,
    m: 1,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLWZ1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sdXBsaW5rL3NyYy9saWIvc2hhcmVkL2hlbHBlci1mdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGVBQWU7SUFjbkIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLEVBQVU7UUFDbkUsT0FBTyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0Qsd0VBQXdFO0lBQ3hFLDhEQUE4RDtJQUM5RCxJQUFJO0lBQ0csTUFBTSxDQUFDLHFCQUFxQixDQUFDLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxrQkFBMEIsQ0FBQyxFQUFFLGlCQUFpQixHQUFHLENBQUM7UUFDekg7Ozs7WUFJSTtRQUNKLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxrREFBa0QsQ0FBQyxDQUFDO1lBQzdFLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxRQUFRLGdCQUFnQixTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxNQUFNLE1BQU0sR0FBRyxTQUFBLEVBQUUsRUFBSSxpQkFBaUIsQ0FBQSxDQUFDO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBSSxDQUFDLENBQUE7Y0FDN0QsU0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDO2NBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDNUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFVLEVBQUUsU0FBaUIsRUFBRSxrQkFBMEIsQ0FBQztRQUN6Rjs7O1VBR0U7UUFDRixNQUFNLEtBQUssR0FBRyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQUEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUM3RCxtREFBbUQ7UUFDbkQsNEZBQTRGO1FBQzVGLHFCQUFxQjtRQUNyQiwrQkFBK0I7UUFDL0IsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzRCxvQkFBb0I7UUFFcEIsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztRQUMvRyx1Q0FBdUM7UUFDdkMsTUFBTSxHQUFHLEdBQUcsU0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFBLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsR0FBRyxJQUFJLENBQUM7UUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOztBQTNERDs7R0FFRztBQUVJLDJCQUFXLEdBQVcsUUFBUSxDQUFDLENBQUMsd0JBQXdCO0FBQ3hELHVCQUFPLEdBQVcsV0FBVyxHQUFHLENBQUMsU0FBQSxFQUFFLEVBQUksRUFBRSxDQUFBLENBQUMsQ0FBQztBQUMzQyx3QkFBUSxHQUNmO0lBQ0UsRUFBRSxFQUFFLElBQUk7SUFDUixhQUFhO0lBQ2IsQ0FBQyxFQUFFLENBQUM7Q0FDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlbHBlckZ1bmN0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1pc2NlbGxhbmVvdXMgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gY2VsZXN0aWFsIGR5bmFtaWNzLlxuICAgKi9cblxuICBzdGF0aWMgZWFydGhSYWRpdXM6IG51bWJlciA9IDYzNzguMTM3OyAvLyBpbiBrbSwgYXQgdGhlIGVxdWF0b3JcbiAgc3RhdGljIGVhcnRoTXU6IG51bWJlciA9IDMuOTg2MDA0NDE4ICogKDEwICoqIDE0KTtcbiAgc3RhdGljIGRpc3RhbmNlOiBhbnkgPVxuICB7XG4gICAga206IDEwZTMsXG4gICAgLy8gY206IDEwZS0yLFxuICAgIG06IDEsXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBjb252ZXJ0RGlzdGFuY2UodmFsdWU6IG51bWJlciwgZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlICogKHRoaXMuZGlzdGFuY2VbZnJvbV0gLyB0aGlzLmRpc3RhbmNlW3RvXSk7XG4gIH1cbiAgLy8gcHVibGljIHN0YXRpYyBjb252ZXJ0QW5nbGUodmFsdWU6IG51bWJlciwgZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKSB7XG4gIC8vICAgcmV0dXJuIHZhbHVlICogKHRoaXMuZGlzdGFuY2VbZnJvbV0gLyB0aGlzLmRpc3RhbmNlW3RvXSk7XG4gIC8vIH1cbiAgcHVibGljIHN0YXRpYyBzbGFudFJhbmdlRnJvbUFsdEVsZXYoYWx0aXR1ZGU6IG51bWJlciwgZWxldmF0aW9uOiBudW1iZXIsIHN0YXRpb25BbHRpdHVkZTogbnVtYmVyID0gMCwgcHJlY2lzaW9uRGVjaW1hbHMgPSAwKTogbnVtYmVyIHtcbiAgICAvKiBDb21wdXRlcyB0aGUgc2xhbnQgcmFuZ2UgZnJvbSB0aGUgYWx0aXR1ZGUgYW5kIHRoZSBlbGV2YXRpb25cbiAgICAqIFRoZSBhbHRpdHVkZSBpcyBpbiBraWxvbWV0ZXIgYW5kIHRoZSBkZWx0YSBhbmdsZSBpbiBkZWdyZWVzLFxuICAgICogc3RhdGlvbkFsdGl0dWRlIGZyb20gc2VhIGxldmVsIGluIG1ldGVyc1xuICAgICogcHJlY2lzaW9uRGVjaW1hbHMgaXMgdGhlIG51bWJlciBvZiBkZWNpbWFscyB5b3Ugd2FudCB0byByb3VuZCB0b1xuICAgICogKi9cbiAgICBpZiAoIShhbHRpdHVkZSAmJiBlbGV2YXRpb24pKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXYXJuaW5nJywgJ1RyaWVkIHRvIGNvbXB1dGUgc2xhbnQgcmFuZ2Ugd2l0aCBpbnZhbGlkIHZhbHVlcycpO1xuICAgICAgY29uc29sZS5kZWJ1ZyhgYWx0aXR1ZGU6ICR7YWx0aXR1ZGV9LCBlbGV2YXRpb246ICR7ZWxldmF0aW9ufWApO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGZhY3RvciA9IDEwICoqIHByZWNpc2lvbkRlY2ltYWxzO1xuICAgIGNvbnN0IGRlbHRhID0gZWxldmF0aW9uICogKE1hdGguUEkgLyAxODApO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZWFydGhSYWRpdXMgKiAoXG4gICAgICBNYXRoLnNxcnQoKChhbHRpdHVkZSArIHRoaXMuZWFydGhSYWRpdXMpIC8gdGhpcy5lYXJ0aFJhZGl1cykgKiogMlxuICAgICAgICAtIE1hdGguY29zKGRlbHRhKSAqKiAyKVxuICAgICAgICAtIE1hdGguc2luKGRlbHRhKSkgKiBmYWN0b3IpIC8gZmFjdG9yO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhbHRpdHVkZUZyb21TckVsZXYoc3I6IG51bWJlciwgZWxldmF0aW9uOiBudW1iZXIsIHN0YXRpb25BbHRpdHVkZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNsYW50IHJhbmdlIGZyb20gdGhlIGFsdGl0dWRlIGFuZCB0aGUgZWxldmF0aW9uXG4gICAgICogVGhlIGFsdGl0dWRlIGlzIGluIGtpbG9tZXRlciBhbmQgdGhlIGRlbHRhIGFuZ2xlIGluIGRlZ3JlZXMsIHN0YXRpb25BbHRpdHVkZSBmcm9tIHNlYSBsZXZlbCBpbiBtZXRlcnNcbiAgICAqL1xuICAgIGNvbnN0IGRlbHRhID0gZWxldmF0aW9uICogKE1hdGguUEkgLyAxODApO1xuICAgIHJldHVybiB0aGlzLmVhcnRoUmFkaXVzICogTWF0aC5zcXJ0KChzciAvIHRoaXMuZWFydGhSYWRpdXMgKyBNYXRoLnNpbihkZWx0YSkpICoqIDIgKyBNYXRoLmNvcyhkZWx0YSkgKiogMik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbnZlcnRUTEV0b0tlcGxlYXJpYW4odGxlMTogc3RyaW5nLCB0bGUyOiBzdHJpbmcpIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9ibG9nLmhhcmRpbmdsYWJzLmNvbS90bGUtdG8ta2VwLmh0bWxcbiAgICAvLyBUaGVzZSBtYW51YWwgY2FsY3VsYXRpb25zIG1pZ2h0IGJlIGxhY2tpbmcgcHJlY2lzaW9uLiBJZiB0aGF0J3MgYW4gaXNzdWVkLCBzd2l0Y2ggdG8gc2dwNFxuICAgIC8vIGNvbnNvbGUubG9nKHRsZTEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRsZTIuc3BsaXQoJycpKTtcbiAgICBjb25zdCBlY2MgPSBwYXJzZUZsb2F0KGAwLiR7dGxlMi5zdWJzdHJpbmcoMjYsIDMzKX1gKSAvIDEwO1xuICAgIC8vIGNvbnNvbGUubG9nKGVjYyk7XG5cbiAgICBjb25zdCBuID0gcGFyc2VGbG9hdCh0bGUyLnN1YnN0cmluZyg1MiwgNjMpKSAqICgoMiAqIE1hdGguUEkpIC8gKDM2MDAgKiAyNCkpOyAvLyBNZWFuIG1vdGlvbiBjb252ZXJ0ZWQgdG8gcmFkL3NcbiAgICAvLyBjb25zb2xlLmxvZyh0bGUyLnN1YnN0cmluZyg1MiwgNjMpKTtcbiAgICBjb25zdCBzbWEgPSAodGhpcy5lYXJ0aE11IC8gKG4gKiogMikpICoqICgxIC8gMykgLyAxMDAwO1xuICAgIHJldHVybiB7IGVjYywgc21hIH07XG4gIH1cbn1cbiJdfQ==