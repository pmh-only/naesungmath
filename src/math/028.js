/**
 * 028.1 �ٰ����� ������ ��_60�й�
 *
 * @author: Choi Minseo
 * @param {number} n
 * @return {number} The sum of the polygons cabinet (degree)
 *
 */
export function polyAngleSumDeg (n) {
  return (180 * (n - 2))
}

/**
   * 028.2 �ٰ����� ������ ��_ȣ����
   *
   * @author: Choi Minseo
   * @param {number} n
   * @return {number} The sum of the polygons cabinet (radian)
   *
   */
export function polyAngleSumRad (n) {
  return ((Math.PI) * (n - 2))
}
