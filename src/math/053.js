/**
 * 053A ���簢���� �ѳ��� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The volume of square pyramid
 *
 */
export function squarePyramidAreaab (a, b) {
  return ((a * ((4 * (b ** 2) - (a ** 2)) ** (0.5))) + (a ** 2))
}

/**
   * 053B ���簢���� �ѳ��� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} b
   * @return {number} The surface area of square pyramid
   *
   */
export function squarePyramidAreaah (a, h) {
  return ((a * ((4 * (h ** 2) - (a ** 2)) ** (0.5))) + (a ** 2))
}
