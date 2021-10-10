/**
 * 010.1 �������� �ﰢ���� ���� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula
 *
 */
export function circumscribedCircleTriangleAreaSide (a, b, c, r) {
  return (a * b * c / 4 / r)
}

/**
   * 010.2 �������� �ﰢ���� ���� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} r
   * @return {number} Inscribed circle and triangle area formula
   *
   */
export function circumscribedCircleTriangleAreaAngle (a, b, c, r) {
  return (2 * r * r * (Math.sin(a)) * (Math.sin(b)) * (Math.sin(c)))
}
