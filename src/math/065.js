/**
 * 065A ¦�� ���� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula(even root)
 *
 */
export function rootFormulaEvenPlus (a, b, c) {
  return ((-(0.5 * b) + ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}

/**
   * 065B ¦�� ���� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @return {number} Root formula(even root)
   *
   */
export function rootFormulaEvenMinus (a, b, c) {
  return ((-(0.5 * b) - ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}
