/**
   * 006 ����� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @return {number} Heron's formula
   *
   */
export function heron (a, b, c) {
  const cosTheta = ((a * a) + (b * b) - (c * c)) / (2 * a * b)
  const sinTheta = Math.sqrt(1 - (cosTheta ** 2))
  return (a * b * sinTheta) / 2
}
