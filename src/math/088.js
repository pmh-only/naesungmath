/**
 * 088.1 연속된 수로 구성된 수열의 합
 *
 * @author: Choi Minseo
 * @param {number} n
 * @param {number} k
 * @return {number} Sum of progress which number is consisted of consecutive numbers
 */
export function sigma (n, k) {
  return (((1 / 2) * n * (n + 1)) - ((1 / 2) * k * (k + 1)))
}

/**
   * 088.2 제곱인 수로 구성된 수열의 합
   *
   * @author: Choi Minseo
   * @param {number} n
   * @param {number} k
   * @return {number} Sum of progress which number is consisted of the squares of numbers
   */
export function sigmaSquare (n, k) {
  return (((1 / 6) * n * (n + 1) * ((2 * n) + 1)) - ((1 / 6) * k * (k + 1) * ((2 * k) + 1)))
}

/**
   * 088.3 세제곱인 수로 구성된 수열의 합
   *
   * @author: Choi Minseo
   * @param {number} n
   * @param {number} k
   * @return {number} Sum of progress which number is consisted of the cubic number
   */
export function sigmaCube (n, k) {
  return (((1 / 4) * (n ** 2) * ((n + 1) ** 2)) - ((1 / 4) * (k ** 2) * ((k + 1) ** 2)))
}
