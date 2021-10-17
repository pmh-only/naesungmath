/**
 * 202.1 ���Ϸ� �޼�
 *
 * @author: Choi Minseo
 * @param {number} f
 * @param {number} a
 * @param {number} count
 * @return Taylor series
 *
 */
export function taylor (f, a, count) {
  const diffs = [(x) => f(a)]
  const taylors = []
  const fact = [1]

  function diff (fun, density = 5) {
    const dx = 2 * (10 ** -density)
    const dy = (x) => fun(x + (10 ** -density)) - fun(x - (10 ** -density))
    return (x) => dy(x) / dx
  }

  taylors.push((x) => diffs[0](x))

  for (let i = 1; i <= count; i++) {
    diffs.push(diff(diffs[i - 1]))
    let factorial = 1
    for (let j = 1; j <= i; j++) {
      factorial *= j
    }
    fact.push(factorial)

    taylors.push(
      function (x) {
        return diffs[i](a) / fact[i] * ((x - a) ** i)
      }
    )
  }

  function res (x) {
    // eslint-disable-next-line no-undef
    result = 0
    for (let i = 0; i <= count; i++) {
      // eslint-disable-next-line no-undef
      result += taylors[i](x)
    }
    // eslint-disable-next-line no-undef
    return result
  }

  return res
}
/**
   * 202.2 ��Ŭ�θ� �޼�
   *
   * @author: DPS0340
   * @param {number} f
   * @param {number} count
   * @return {number} Maclaurin series
   *
   */
export function maclaurin (f, count) {
  return exports.taylor(f, 0, count)
}
