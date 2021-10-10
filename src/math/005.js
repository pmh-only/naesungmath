/**
   * 005 �̵�ﰢ���� ����
   *
   * @author: Choi Minseo
   * @param {number} a
   * @param {number} b
   * @return {number} The length of an isosceles triangle with equal side a and base b
   *
   */
export function quadtria (a, b) {
  return (a / 4 * (4 * b * b - a * a) ** 0.5)
}
