import { twoSumAlgorithm, runTwoSumTests } from "../algorithms";

describe('twoSumAlgorithm', () => {
  it('should return the correct indices for a simple case', () => {
    expect(twoSumAlgorithm([4, 11, 17, 25], 21)).toEqual([1, 3]);
  });

  it('should handle duplicate values correctly', () => {
    expect(twoSumAlgorithm([0, 1, 2, 2, 3, 5], 4)).toEqual([2, 4]);
  });

  it('should work with negative numbers', () => {
    expect(twoSumAlgorithm([-1, 0], -1)).toEqual([1, 2]);
  });

  it('should return the last two indices when they sum to target', () => {
    expect(twoSumAlgorithm([1, 2, 3, 4, 5], 9)).toEqual([4, 5]);
  });

  it('should return the first two indices when they sum to target', () => {
    expect(twoSumAlgorithm([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it('should handle multiple identical values at start', () => {
    expect(twoSumAlgorithm([2, 2, 11, 15], 4)).toEqual([1, 2]);
  });

  it('should return first and last indices when they sum to target', () => {
    expect(twoSumAlgorithm([2, 3, 4], 6)).toEqual([1, 3]);
  });

  it('should return empty array when no solution exists (though problem says this wont happen)', () => {
    expect(twoSumAlgorithm([1, 2, 3], 10)).toEqual([]);
  });
});

describe('runTwoSumTests', () => {
  it('should return all test cases with correct results', () => {
    const results = runTwoSumTests();
    expect(results.length).toBe(7);
    
    // Verify all test cases passed
    results.forEach(result => {
      expect(result.isCorrect).toBe(true);
    });
    
    // Spot check one of the results
    expect(results[0]).toEqual({
      input: [4, 11, 17, 25],
      target: 21,
      expected: [1, 3],
      output: [1, 3],
      isCorrect: true
    });
  });
});