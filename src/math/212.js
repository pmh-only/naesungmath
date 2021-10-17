/**
 * 212 diff
 *
 * @author: DPS0340, Choi Minseo
 * @param {string} f
 * @return {number} Diff
 *
 */
export function diff (f, density = 5) {
  const dx = 2 * (10 ** (-density))
  const dy = (x) => f(x + (10 ** (-density))) - f(x - (10 ** (-density)))

  return (x) => dy(x) / dx
}
