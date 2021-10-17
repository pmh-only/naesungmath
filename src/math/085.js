/**
 * 085 등비수열의 합 공식
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} r
 * @param {number} n
 * @return {number} Sum of geometric progression
 */
export function geometricProgressionSum (a, r, n) {
  return a * (1 - (r ** n)) / (1 - r)
}
