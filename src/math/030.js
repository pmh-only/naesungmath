/**
 * 030 ���ٰ����� ����
 *
 * @author: Choi Minseo
 * @param {number} n
 * @return {number} The sum of cabinet of polygon (degree)
 *
 */
export function polyAngleDeg (n) {
  return (180 * (n - 2) / n)
}

/**
   * 030.2 ���簢���� ����_ȣ����
   *
   * @author: Choi Minseo
   * @param {number} n
   * @return {number} The sum of cabinet of polygon (radian)
   *
   */
export function polyAngleRad (n) {
  return ((Math.PI) * (n - 2) / n)
}
