/**
 * 083A ���������� �� ����
 *
 * @author: Choi Minseo
 * @param {number} a1
 * @param {number} an
 * @param {number} n
 * @return {number} Arithmetic progression

 */
export function arithmeticProgressionSumterm (a1, an, n) {
  return (((a1 + an) / 2) * n)
}

/**
   * 083B ���������� �� ����
   *
   * @author: Choi Minseo
   * @param {number} a1
   * @param {number} n
   * @param {number} d
   * @return {number} Arithmetic progression

   */
export function arithmeticProgressionSum (a1, n, d) {
  return ((((2 * a1) + ((n - 1) * d)) / 2) * n)
}
