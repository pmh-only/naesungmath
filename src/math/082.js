/**
 * 082A �������� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} d
 * @param {number} n
 * @return {number} Arithmetic progression

 */
export function arithmeticProgression (a, d, n) {
  return (a + (n - 1) * d)
}

/**
   * 082B �������� ����
   *
   * @author: Choi Minseo
   * @param {number} d
   * @param {number} n
   * @param {number} s
   * @return {number} Arithmetic progression

   */
export function arithmeticProgressionn (d, n, s) {
  return (s - (n - 1) * d)
}

/**
   * 082C �������� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} n
   * @param {number} s
   * @return {number} Arithmetic progression

   */
export function arithmeticProgressiond (a, n, s) {
  return ((s - a) / (n - 1))
}
