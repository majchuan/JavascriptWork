/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    // Save the length of the mountain array
    const length = mountainArr.length();

    // 1. Find the index of the peak element
    let low = 1;
    let high = length - 2;
    while (low !== high) {
        const testIndex = (low + high) >> 1;
        const curr = mountainArr.get(testIndex);
        const next = mountainArr.get(testIndex + 1);
        
        if (curr < next) {
            if (curr === target) {
                return testIndex;
            }
            if (next === target) {
                return testIndex + 1;
            }
            low = testIndex + 1;
        } else {
            high = testIndex;
        }
    }

    const peakIndex = low;

    // 2. Search in the strictly increasing part of the array
    // If found, will be returned in the loop itself.
    low = 0;
    high = peakIndex;
    while (low <= high) {
        const testIndex = (low + high) >> 1;
        const curr = mountainArr.get(testIndex);
            
        if (curr === target) {
            return testIndex;
        } else if (curr < target) {
            low = testIndex + 1;
        } else {
            high = testIndex - 1;
        }
    }

    // 3. Search in the strictly decreasing part of the array
    // If found, will be returned in the loop itself.
    low = peakIndex + 1;
    high = length - 1;
    while (low <= high) {
        const testIndex = (low + high) >> 1;
        const curr = mountainArr.get(testIndex);
            
        if (curr === target) {
            return testIndex;
        } else if (curr > target) {
            low = testIndex + 1;
        } else {
            high = testIndex - 1;
        }
    }

    // Target is not present in the mountain array
    return -1;
}; 