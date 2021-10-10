/**
 * 064A ���� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula
 *
 */
export function rootFormulaplus (a, b, c) {
  return ((-b + (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a))
}

/**
   * 064B ���� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @return {number} Root formula
   *
   */
export function rootFormulaminus (a, b, c) {
  return ((-b - (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a))
}
