/**
 * 213 ����
 *
 * @author: DPS0340, Choi Minseo
 * @param {string} f
 * @return {number} Integral
 *
 */
export function integral (f, density = 5) {
  const g = (a, b) => {
    let sum = 0
    for (let k = a; k < b; k += 10 ** (-density)) {
      sum += (f(k + 10 ** (-density)) + f(k)) / 2 * 10 ** (-density)
    }
    return sum
  }

  return g
}
