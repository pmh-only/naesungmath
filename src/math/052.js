/**
 * 052A ���簢���� ���� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number}  The volume of square pyramid
 *
 */
export function squarePyramidVolumeah (a, h) {
  return ((1 / 3) * (a ** 2) * h)
}

/**
   * 052B ���簢���� ���� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} b
   * @return {number} a plus b
   *
   */
export function squarePyramidVolumeab (a, b) {
  return ((1 / 3) * (a ** 2) * (((b ** 2) - ((a ** 2) / 2)) ** (0.5)))
}
