/**
 * 050 ������ �ѳ���
 *
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} h
 * @return {number} The surface area of cone
 *
 */
export function coneArea (r, h) {
  return (((Math.PI) * r * (((r ** 2) + (h ** 2)) ** 0.5)) + ((Math.PI) * (r ** 2)))
}
