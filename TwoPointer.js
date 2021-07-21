/**
 * Sum Zero basically tries to figure out the first pair to produce a sum of ZERO
 * @param {*} inputArray ---> An Array of sorted Numbers
 */

const sumZeroPair = (inputArray) => {
  /**
   * EDGE CASES
   * 1. What if we don't actually have any pair for sumZero.
   * 2. What if we get an empty array.
   */
  if (inputArray.length <= 2) return false;

  /**
   * make the basics variable set up to traverse the array
   */
  const dataSize = inputArray.length;

  /**
   * set up the two pointers
   * 1. First Pointer points to the start of the Array.
   * 2. Second Pointer points to the end of the Array.
   */
  let startPointer = 0;
  let endPointer = dataSize - 1;

  /**
   * 1. As we want our run time to be O(n) we run only one single loop
   * 2. we run for "N" elements
   *
   */
  while (startPointer < endPointer) {
    const firstValue = inputArray[startPointer];
    const secondValue = inputArray[endPointer];
    const sum = firstValue + secondValue;
    /**
     * 1. we check if the combination of first and last value yield zero.
     */
    if (sum === 0) return { firstValue, secondValue };
    else if (sum > 0) {
      /**
       * otherwise we look for a smaller value
       */
      endPointer -= 1;
    } else {
      /**
       * now as the sum has become smaller we look for a bigger value
       */
      startPointer += 1;
    }
  }

  return false;
};

console.log('The pair is --->', sumZeroPair([-10, -1, 0, 2, 3, 4, 5]));
