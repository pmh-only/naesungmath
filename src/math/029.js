/**
 * 029 ���ٰ����� ����
 *
 * @author: Choi Minseo
 * @param {number} n
 * @param {number} a
 * @return {number} The area of regular polygons
 *
 */
export function polyarea (n, a) {
  return n * (a ** 2) / (4 * (Math.tan(a / (Math.PI))))
}
