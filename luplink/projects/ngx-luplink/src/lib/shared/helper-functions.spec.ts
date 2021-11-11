import { HelperFunctions } from './helper-functions';

describe('HelperFunctions', () => {
  beforeEach(() => {
  });

  it('should compute the correct values', () => {
    // Here the 6 represents a precision to the millimeter
    expect(HelperFunctions.slantRangeFromAltElev(0, 10)).toBeCloseTo(0, 6);
    expect(HelperFunctions.slantRangeFromAltElev(650, 90)).toBeCloseTo(650, 6);
    // Precision decreases with small elevation, a 1-km error won't do much difference to the path loss
    expect(HelperFunctions.slantRangeFromAltElev(650, 10)).toBeCloseTo(2045, 0);
  });

  it('convert TLE to keplearian should return correct values', () => {
    const tle1 = '1 25544U 98067A 01260.91843750 .00059354 00000-0 74277-3 0 4795';
    const tle2 = '2 25544  51.6396 342.1053 0008148 106.9025 231.8021 15.5918272116154';
    const { sma } = HelperFunctions.convertTLEtoKeplearian(tle1, tle2);
    expect(sma).toBeCloseTo(6768.16, 2);
  });
});
