/**
 * 042 Ÿ���� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The area of oval
 *
 */
export function ovalArea (a, b) {
  return ((Math.PI) * a * b)
}

/**
 * 043 Ÿ���� �̽ɷ�
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} THe eccentricity of oval
 *
 */
export function evalEccentricity (a, b) {
  return ((1 - ((b ** 2) / (a ** 2))) ** 0.5)
}
