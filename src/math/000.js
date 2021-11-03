/**
 * Plus two number. (000A)
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a + b
 *
 */
export function plus (a, b) {
  return a + b
}
/**
 * 000K ����
 *
 * @author: Choi Minseo
 * @return {number} pi
 *
 */
exports.pi = Math.PI

export function round (a) {
  return Math.round(a)
}
/**
 * 000F ��ǥ
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} (a, b)
 *
 */
export function pow (a, b) {
  return Math.pow(a, b)
}
/**
 * 000E a�� b����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a ^ b
 *
 */
export function caret (a, b) {
  return a ** b
}
/**
 * 000D ������
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a / b
 *
 */
export function divide (a, b) {
  return a / b
}
/**
 * 902 gcd
 *
 * @author: DPS0340, Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} gcd
 *
*/
export function gcd (a, b) {
  if (b === 0) {
    return a
  } else {
    return exports.gcd(b, a % b)
  }
}
/**
 * 901 IsInRange
 *
 * @author: DPS0340
 * @param {string} a, b
 * @return {number} IsInRange
 *
 */
export function isinrange (a, b) {
  const g = function (x) {
    if (a <= x && x <= b) {
      return true
    } else {
      return false
    }
  }
  return g
}
/**
 * 000B ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a - b
 *
 */
export function minus (a, b) {
  return a - b
}
/**
 * 000C ���ϱ�
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a * b
 *
 */
export function multiply (a, b) {
  return a * b
}
/**
 * 007 �ﰢ���� ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number} Area of triangle given base and height
 *
 */
export function triangleAreaSide (a, h) {
  return (0.5 * a * h)
}
/**
 * 000J ȣ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} change a to radian
 *
 */
export function radian (a) {
  return 2 * Math.PI * a
}
/**
 * 000H ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} random number from a to b
 *
 */
export function random (a, b) {
  const ranNum = Math.floor((Math.random() * b) + a)
  return ranNum
}

/**
 * 000G ����
 *
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} root a
 *
 */
export function sqrt (a) {
  return Math.sqrt(a)
}

/**
 * 000H factorial
 *
 * @author: Choi Minseo
 * @param {number} n
 * @return n!
 *
 */
export function factorial(n) {
  const init = 1
  for (let i = 1; i <= n; i++) {
    result = init * i
  }
  return result
}