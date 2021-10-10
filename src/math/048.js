/**
 * 048 ������� �ѳ���
 *
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} h
 * @return {number} The surface area of cylinder
 *
 */
export function cylinderArea (r, h) {
  return ((2 * (Math.PI) * r * h) + (2 * (Math.PI) * (r ** 2)))
}
