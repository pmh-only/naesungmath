/**
 * 089.1 무한급수(분모가 n!이고 분자가 x의 k제곱)
 * @param {number} x
 * @return {number} Infinite series (the denominator is n! and the numerator is x to the power of k)
 */
export function infiniteSeries1 (x) {
  return (Math.E ** x)
}

/**
   * 089.2 무한급수(분모가 n!이고 분자가 k 곱하기 x의 k제곱)
   * @param {number} x
   * @return {number} Infinite series (The denominator is n! and the numerator is k times x to the power of k)
   */
export function infiniteSeries2 (x) {
  return (x * (Math.E ** x))
}

/**
   * 089.3 무한급수(x의 k제곱, |x| < 1)
   * @param {number} x
   * @return {number} Infinite series (x to the power of k, |x| < 1)
   */
export function infiniteSeries3 (x) {
  if (x > 1 || x < -1 || x === 1 || x === -1) {
    console.log('Check |x| < 1')
  } else {
    return (1 / (1 - x))
  }
}

/**
   * 089.4 무한급수(k 곱하기 x의 k제곱, |x| < 1)
   * @param {number} x
   * @return {number} Infinite series (k times x to the power of k, |x| < 1)
   */
export function infiniteSeries4 (x) {
  if (x > 1 || x < -1 || x === 1 || x === -1) {
    console.log('Check |x| < 1')
  } else {
    return (x / ((1 - x) ** 2))
  }
}
