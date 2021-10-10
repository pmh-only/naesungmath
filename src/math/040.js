/**
 * 040 ��ä���� ����
 *
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} t
 * @param {number} l
 * @return {number} THe area of sector form
 *
 */
export function circularSectorAreart (r, t, l) {
  if (r != null) {
    if (t != null || l != null) {
      if (t != null) return (0.5 * r * (t ** 2))
      else return (0.5 * r * l)
    }
  }
}
