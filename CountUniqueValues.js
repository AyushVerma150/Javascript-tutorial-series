/**
 * Problem at hand given an array of values  array,
 * we need to calculate the number of unique values from the,
 * for eg ---> [1, 2, 3,3, 4, 4] has 4 unique values.
 * MAIN OBJECTIVE : Use the two pointer approach!!
 */

const countUniqueVal = (inputArray) => {
  /**
   * Initial variable set up
   */
  const ARRAY_LENGTH = inputArray.length;
  let SLOW_POINTER = 0;
  let FAST_POINTER = 1;

  /**
   * EDGE CASE: WHAT if we don't have an any elements
   */
  if (ARRAY_LENGTH === 0) {
    return 0;
  }

  while (FAST_POINTER < ARRAY_LENGTH) {
    /**
     * We move through the array such that we make the array fill upto the unique values till the SLOW_POINTER
     * And return its count
     */
    if (inputArray[SLOW_POINTER] != inputArray[FAST_POINTER]) {
      SLOW_POINTER += 1;
      inputArray[SLOW_POINTER] = inputArray[FAST_POINTER];
      FAST_POINTER += 1;
    } else if (inputArray[SLOW_POINTER] == inputArray[FAST_POINTER]) {
      FAST_POINTER += 1;
    }
  }
  return SLOW_POINTER + 1;
};

console.log(
  'The count of unique values is  --->',
  countUniqueVal([1, 2, 3, 4, 4, 4, 4, 5, 6, 6, 6, 6])
);
