
/**
 * 089.1 무한급수(분모가 n!이고 분자가 x의 k제곱)
 * @param {number} x
 * @return {number} Infinite series (the denominator is n! and the numerator is x to the power of k)
 */
 export function infiniteSeries1 (x) {
  return (Math.E ** x)
}

/**
 * 089.2 무한급수(분모가 n!이고 분자가 k 곱하기 x의 k제곱)
 * @param {number} x
 * @return {number} Infinite series (The denominator is n! and the numerator is k times x to the power of k)
 */
export function infiniteSeries2 (x) {
  return (x * (Math.E ** x))
}

/**
 * 089.3 무한급수(x의 k제곱, |x| < 1)
 * @param {number} x
 * @return {number} Infinite series (x to the power of k, |x| < 1)
 */
export function infiniteSeries3 (x) {
  if (x > 1 || x < -1 || x === 1 || x === -1) {
    console.log('Check |x| < 1')
  } else {
    return (1 / (1 - x))
  }
}

/**
 * 089.4 무한급수(k 곱하기 x의 k제곱, |x| < 1)
 * @param {number} x
 * @return {number} Infinite series (k times x to the power of k, |x| < 1)
 */
export function infiniteSeries4 (x) {
  if (x > 1 || x < -1 || x === 1 || x === -1) {
    console.log('Check |x| < 1')
  } else {
    return (x / ((1 - x) ** 2))
  }
}

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
