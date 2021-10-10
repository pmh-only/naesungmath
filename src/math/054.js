/**
 * 054 ���簢���� ���� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The height of square pyramid
 *
 */
export function squarePyramidHeight (a, b) {
  return (((b ** 2) - ((a ** 2) / 2)) ** (0.5))
}
