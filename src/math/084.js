/**
 * 084A ������ ����
 *
 * @author: Choi Minseo
 * @param {number} an
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric progression

 */
export function geometricProgressiona (an, n, r) {
  return (an / (r ** n))
}

/**
   * 084B ������ ����
   *
   * @author: Choi Minseo
   * @param {number} an
   * @param {number} a
   * @param {number} r
   * @return {number} Geometric progression

   */
export function geometricProgressionn (an, a, r) {
  return Math.log(an / a) / Math.log(r)
}

/**
   * 084C ������ ����
   *
   * @author: Choi Minseo
   * @param {number} an
   * @param {number} a
   * @param {number} n
   * @return {number} Geometric progression

   */
export function geometricProgressr (an, a, n) {
  return ((an / a) ** (1 / n))
}

/**
   * 084D ������ ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} n
   * @param {number} r
   * @return {number} Geometric progression

   */
export function geometricProgressionan (a, n, r) {
  return (a * (r ** n))
}
