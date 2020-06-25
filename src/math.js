// 011 두 벡터가 생성하는 삼각형의 넓이 공식//
// 012 사선 공식//
// 014 중선 정리//
// exports.ApolloniusTheorem = function (ab, ac , am, bm) {
// 044 타원의 방정식//

/**
 * 061 직육면체의 겉넓이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} The surface area of cuboid
 * @since <0.37.0
 */
exports.cuboidArea = function (a, b, c) {
  return (2 * ((a * b) + (b * c) + (c * a)))
}

/**
 * 062 직육면체의 대각선 길이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} a plus b
 * @since <0.37.0
 */
exports.cuboidDiagonal = function (a, b, c) {
  return (((a ** 2) + (b ** 2) + (c ** 2)) ** 0.5)
}

/**
 * 063 오일러 다면체 정리
 * 
 * @author: Naesung
 * @param {number} v
 * @param {number} e
 * @param {number} f
 * @return {number} Euler polyhedrob theroem
 * @since <0.37.0
 */
exports.eulerPolyhedronTheorem = function (v, e, f) {
  if ((v - e + f) === 2) return true
  if ((v - e + f) !== 2) return false
}

/**
 * 064A 근의 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula
 * @since <0.37.0
 */
exports.rootFormula_plus = function (a, b, c) {
  return ((-b + (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a))
}

/**
 * 064B 근의 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula
 * @since <0.37.0
 */
exports.rootFormula_minus = function (a, b, c) {
  return ((-b - (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a))
}

/**
 * 065A 짝수 근의 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula(even root)
 * @since <0.37.0
 */
exports.rootFormula_EvenPlus = function (a, b, c) {
  return ((-(0.5 * b) + ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}

/**
 * 065B 짝수 근의 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula(even root)
 * @since <0.37.0
 */
exports.rootFormula_EvenMinus = function (a, b, c) {
  return ((-(0.5 * b) - ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}

/**
 * 066 근과 계수와의 관계 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} type
 * @return {number} Relation of root and coefficient
 * @since <0.37.0
 */
exports.rootAndCoefficient = function (a, b, c, type) {
  if (type === 1) return -(b / a)
  if (type === 2) return (b / c)
}

/**
 * 067A 삼차방정식의 근과 계수와의 관계 공식
 *  
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @return {number} Root formula of cubic equation
 * @since <0.37.0
 */
exports.cubicEquation_first = function (a, b, c, d) {
  let x = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  let y = (((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  return -(b / (3 * a)) - ((1 / (3 * a)) * x) - ((1 / (3 * a)) * y)
}

/**
 * 067B 삼차방정식의 근과 계수와의 관계 공식
 * 
 * python 버전에서 사용하세요.
 */
/*
exports.cubicEquation_second = function (a, b, c, d) {
  let x = (((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  let y = (((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  return
}
*/

/**
 * 067C 삼차방정식의 근과 계수와의 관계 공식
 * 
 * python 버전에서 사용하세요.
 */
/*
exports.cubicEquation_third = function (a, b, c, d) {
  let x = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  let y = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  return
}
*/

/**
 * 068 제곱근 근삿값
 * 
 * @param {number} val
 * @param {number} digit_
 * @return {number}
 * @since <0.37.0
 * 
 */

function Root() { // 함수아님 프로토타입임
  this.get = function (val, digit_) {
    let digit = digit_ || 10
    return parseFloat((val ** 0.5).toFixed(digit))
  }
  for (let i = 2; i <= 10; i++) {
    this[i.toString()] = this.get(i, 10)
  }
}

exports.root = new Root()

// 069 황금비 공식 //

// 070 분모의 유리화 공식//

// 071 이중근호 공식//

// 072 이차식 곱셈 공식//

// 073 이차식 곱셈 공식//

// 074 합차 공식//

// 075 세 수의 합의 제곱 공식//

// 076-081 생략//

/**
 * 082A 등차수열 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} d
 * @param {number} n
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgression = function (a, d, n) {
  return (a + (n - 1) * d)
}

/**
 * 082B 등차수열 공식
 * 
 * @author: Naesung
 * @param {number} d
 * @param {number} n
 * @param {number} s
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgression_n = function (d, n, s) {
  return (s - (n - 1) * d)
}

/**
 * 082C 등차수열 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} n
 * @param {number} s
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgression_d = function (a, n, s) {
  return ((s - a) / (n - 1))
}

/**
 * 083A 등차수열의 합 공식
 * 
 * @author: Naesung
 * @param {number} a1
 * @param {number} an
 * @param {number} n
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.arithmeticProgressionSum_Term = function (a1, an, n) {
  return (((a1 + an) / 2) * n)
}

/**
 * 083B 등차수열의 합 공식
 * 
 * @author: Naesung
 * @param {number} a1
 * @param {number} n
 * @param {number} d
 * @return {number} Arithmetic progresstion
 * @since <0.37.0
 */
exports.artimeticProgressionSum = function (a1, n, d) {
  return ((((2 * a1) + ((n - 1) * d)) / 2) * n)
}

/**
 * 084A 등비수열 공식
 * 
 * @author: Naesung
 * @param {number} an
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_a = function (an, n, r) {
  return (an / (r ** n))
}

/**
 * 084B 등비수열 공식
 * 
 * @author: Naesung
 * @param {number} an
 * @param {number} a
 * @param {number} r
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_n = function (an, a, r) {
  return Math.log(an / a) / Math.log(r)
}

/**
 * 084C 등비수열 공식
 * 
 * @author: Naesung
 * @param {number} an
 * @param {number} a
 * @param {number} n
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_r = function (an, a, n) {
  return ((an / a) ** (1 / n))
}

/**
 * 084D 등비수열 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric sequence
 * @since <0.37.0
 */
exports.geometricSequence_an = function (a, n, r) {
  return (a * (r ** n))
}


/**
 * 210 60도법-라디안 변환
 * 
 * @author: Naesung
 * @param {number} deg
 * @return {number} Convert degree to radian
 * @since <0.37.0
 */
exports.degreeToRad = function (deg) {
  return deg * Math.PI / 180
}

/**
 * 211 라디안-60도법 변환
 * 
 * @author: Naesung
 * @param {number} rad
 * @return {number} Convert radian to degree
 * @since <0.37.0
 */
exports.radToDegree = function (rad) {
  return rad * 180 / Math.PI
}

/**
 * 212 diff
 * 
 * @author: DPS0340, Naesung(Merged)
 * @param {string} f
 * @return {number} Diff
 * @since <0.37.0
 */
exports.diff = function (f, density = 5) {
  let dx = 2 * (10 ** (-density))
  let dy = (x) => f(x + (10 ** (-density))) - f(x - (10 ** (-density)))

  return (x) => dy(x) / dx
}

/**
 * 213 적분
 * 
 * @author: DPS0340, Naesung(Merged)
 * @param {string} f
 * @return {number} Integral
 * @since <0.37.0
 */
exports.integral = function (f, density = 5) {
  let g = (a, b) => {
    let sum = 0
    for (let k = a; k < b; k += 10 ** (-density)) {
      sum += (f(k + 10 ** (-density)) + f(k)) / 2 * 10 ** (-density)
    }
    return sum
  }

  return g
}

/**
 * 214 sqrtDotProduct
 * 
 * @author: DPS0340
 * @param {number} row1
 * @param {number} row2
 * @return {number} sqrtDotProduct
 * @since <0.37.0
 */
exports.sqrtDotProduct = function (row1, row2) {
  let res = 0
  for (let i = 0; i < row1.length; i++) {
    res += row1[i] * row2[i]
  }

  return res ** 0.5
}

/**
 * 215 일반화
 * 
 * @author: DPS0340
 * @param {string} row
 * @return {number} normalization
 * @since <0.37.0
 */
exports.normailze = function (row) {
  return exports.matrix_scala_multiplation(row, 1 / exports.sqrtDotProduct(row, row))
}

/**
 * 216 교차
 * 
 * @author: DPS0340
 * @param {string} mat
 * @return {number} transpose
 * @since <0.37.0
 */
exports.transpose = function (mat) {
  let res = []

  for (let i = 0; i < mat[0].length; i++) {
    res.push([])
    for (let j = 0; j < mat.length; j++) {
      res[i].push(mat[j][i])
    }
  }

  return res
}

/**
 * 217 LQ 분해
 * 
 * @author: DPS0340
 * @param {string} mat
 * @return {number} LQDecomposition
 * @since <0.37.0
 */
exports.LQDecomposition = function (mat, iterationCount = 1000) {
  let AT = exports.transpose(mat)

  AT = exports.QRDecomposition(AT, iterationCount)

  return {
    // eslint-disable-next-line dot-notation
    L: exports.transpose(AT['R']),
    // eslint-disable-next-line dot-notation
    Q: exports.transpose(AT['Q'])
  }
}

/* exports.SingularValueDecomposition = function(mat, iterationCount=2) {

//     let M = mat;

//     let VT = [];

//     let Sigma = [];

//     let Q = [];

//     for(let i=0;i<iterationCount;i++) {
//         let QR = exports.QRDecomposition(M);

//         console.log("QR", QR);

//         Q = QR["Q"];

//         let LPV = exports.LQDecomposition(QR["R"]);

//         VT = LPV["Q"];

//         console.log(LPV);

//         Sigma = LPV["L"];

//         M = Sigma;
//     }

//     for(let i=0;i<Sigma.length;i++) {
//         M[i][i] = M[i][i]**0.5;
//     }

//     return {U:Q, VT: VT, Sigma:Sigma}
// }
*/

exports.IdentityMatrix = function (n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push([])
    for (let j = 0; j < n; j++) {
      if (i === j) {
        res[i].push(1)
      } else {
        res[i].push(0)
      }
    }
  }

  return res
}

exports.trace = function (matrix) {
  let res = 0
  for (let i = 0; i < matrix.length; i++) {
    res += matrix[i][i]
  }
  return res
}

exports.outterProduct_matrix = function (u, v) {
  return exports.matrixmultiply(u, exports.transpose(v))
}

exports.houseHolder = function (mat) {
  function SG (N) {
    if (N < 0) {
      return -1
    } else {
      return 1
    }
  }
  let K = 1
  let B = []
  for (let i = 0; i < mat.length; i++) {
    B.push([])
    for (let j = 0; j < mat[0].length; j++) {
      B[i].push(mat[i][j])
    }
  }

  while (1) {
    // eslint-disable-next-line no-inner-declarations
    function s (k) {
      let res = 0
      for (let i = k + 1; i < B.length; i++) {
        res += B[i][k] ** 2
      }

      return res ** 0.5
    }
    let S = s(K - 1)
    if (S === 0) {
      K += 1
      continue
    }
    let z = 1 / 2 * (1 + SG(B[K][K - 1]) * B[K][K - 1] / S)

    let v = []

    for (let i = 0; i < K; i++) {
      v.push(0)
    }
    v.push(z ** 0.5)
    for (let i = K + 1; i < mat.length; i++) {
      v.push(SG(B[K][K - 1]) * B[K - 1][i] / (2 * v[K] * S))
    }

    v = exports.transpose([v])

    let vv = exports.matrixmultiply(v, exports.transpose(v))

    let H = exports.matrix_sub(exports.IdentityMatrix(mat.length), exports.matrix_scala_multiplation(vv, 2))

    let A = exports.matrixmultiply(exports.matrixmultiply(H, B), H)

    if (K >= B.length - 2) {
      return A
    } else {
      K += 1
      B = A
    }
  }
}

exports.QRDecomposition = function (mat) {
  function sqrtDotProduct (row1, row2) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
      res += row1[i] * row2[i]
    }

    return res ** 0.5
  }

  function dotProduct (row1, row2) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
      res += row1[i] * row2[i]
    }

    return res
  }

  // eslint-disable-next-line no-unused-vars
  function normailze (row) {
    return exports.matrix_scala_multiplation(row, 1 / sqrtDotProduct(row, row))
  }

  function normalizeMemoi (row, K) {
    return exports.matrix_scala_multiplation(row, 1 / K)
  }

  let X = exports.transpose(mat)

  let r = []
  for (let i = 0; i < X.length; i++) {
    r.push([])
    for (let j = 0; j < X[0].length; j++) {
      r[i].push(0)
    }
  }
  let Q = []
  for (let i = 0; i < X.length; i++) {
    Q.push(0)
  }

  let k = 0

  while (1) {
    r[k][k] = sqrtDotProduct(X[k], X[k])

    Q[k] = normalizeMemoi([X[k]], r[k][k])[0]

    for (let j = k + 1; j < X.length; j++) {
      r[k][j] = dotProduct(Q[k], X[j])
    }

    for (let j = k + 1; j < X.length; j++) {
      X[j] = exports.matrix_sub([X[j]], exports.matrix_scala_multiplation([Q[k]], r[k][j]))[0]
    }

    k += 1

    if (k === X.length) {
      return {
        Q: exports.transpose(Q),
        R: r
      }
    }
  }
}

exports.isinrange = function (a, b) {
  let g = function (x) {
    if (a <= x && x <= b) {
      return true
    } else {
      return false
    }
  }

  return g
}

/**
 * 
 * @author: DPS0340
 * @param {string} f
 * @return {number} Finding Multiple Roots of Function.
 * @since <0.37.0
 */
exports.Durand_Kerner = function (f, rootsNumber = 1, iterationCount = 15) {
  let roots = []
  for (let i = 0; i < rootsNumber; i++) {
    roots.push(i + 1)
  }

  for (let k = 0; k < iterationCount; k++) {
    for (let i = 0; i < rootsNumber; i++) {
      let down = 1
      for (let j = 0; j < rootsNumber; j++) {
        if (i !== j) {
          down *= roots[i] - roots[j]
        }
      }
      roots[i] -= f(roots[i]) / down
    }
  }

  return roots
}

/**
 * 
 * @author: DPS0340
 * @param {number} a
 * @param {number} b
 * @return {number} Gauss–Seidel method.
 * @since <0.37.0
 */
exports.Gauss_Seidel = function (mat, iterationCount = 15) {
  let x = []

  for (let i = 0; i < mat.length; i++) {
    x.push(1)
  }

  for (let k = 0; k < iterationCount; k++) {
    for (let i = 0; i < mat.length; i++) {
      let n = 0
      for (let j = 0; j < mat.length; j++) {
        if (j !== i) {
          n += mat[i][j] * x[j]
        }
      }
      x[i] = 1 / mat[i][i] * (mat[i][mat[0].length - 1] - n)
    }
  }

  return x
}

exports.randomVector = function (len, norm = 1) {
  let x = []

  let currentNorm = 0

  for (let i = 0; i < len; i++) {
    x.push(Math.random())
    currentNorm += Math.abs(x[i]) ** 2
  }

  currentNorm = currentNorm ** 0.5

  for (let i = 0; i < len; i++) {
    x[i] *= norm / currentNorm
  }

  return x
}

/**
 * 
 * @author: DPS0340
 * @param {string} mat
 * @return {number} Eigendecomposition of a matrix.
 * @since <0.37.0
 */
exports.EigenVectorDecomposition = function (mat, iterationCount = 100) {
  let V = []
  for (let i = 0; i < mat[0].length; i++) {
    V.push(exports.randomVector(mat.length, 1))
  }

  V = exports.transpose(V)

  let X = []

  for (let i = 0; i < mat.length; i++) {
    X.push([])
    for (let j = 0; j < mat[0].length; j++) {
      X[i].push(mat[i][j])
    }
  }

  let QR = exports.QRDecomposition(V)

  for (let k = 0; k < iterationCount; k++) {
    // eslint-disable-next-line dot-notation
    let W = exports.matrixmultiply(X, QR['Q'])

    QR = exports.QRDecomposition(W)
  }

  // eslint-disable-next-line dot-notation
  let Q = exports.transpose(QR['Q'])

  for (let i = 0; i < Q.length; i++) {
    let min = Math.abs(Q[i][0])
    for (let j = 0; j < Q[i].length; j++) {
      if (min > Math.abs(Q[i][j])) {
        min = Math.abs(Q[i][j])
      }
    }
    for (let j = 0; j < Q[i].length; j++) {
      Q[i][j] /= min
    }
    if (Q[i][0] < 0) {
      for (let j = 0; j < Q[i].length; j++) {
        Q[i][j] *= -1
      }
    }
  }

  let res = []

  for (let i = 0; i < Q.length; i++) {
    let temp = []
    for (let j = 0; j < Q[i].length; j++) {
      temp.push([])
      temp[j].push(Q[i][j])
    }
    let temp2 = exports.matrixmultiply(X, temp)
    for (let j = 0; j < Q[i].length; j++) {
      if (((temp2[j][0] === 0) || isNaN(temp2[j][0])) && !res.includes(0)) {
        res.push(0)
        break
      } else if (Q[i][j] !== 0) {
        res.push(temp2[j][0] / Q[i][j])
        break
      }
    }
  }

  for (let i = 0; i < Q.length; i++) {
    for (let j = 0; j < Q[0].length; j++) {
      if (isNaN(Q[i][j])) {
        Q[i][j] = 0
      }
    }
  }

  res = res.filter((x) => x !== undefined)

  return {
    Q: Q,
    eigenvalue: res
  }
}

/**
 *  
 * @author: DPS0340
 * @param {string} mat
 * @return {number} Solves System of linear equations.
 * @since <0.37.0
 */
exports.Cramer = function (mat) {
  let B = []
  let X = []

  for (let i = 0; i < mat.length; i++) {
    B.push(mat[i][mat[0].length - 1])
  }

  let T = []

  for (let j = 0; j < mat.length; j++) {
    T.push([])
    for (let k = 0; k < mat[0].length - 1; k++) {
      T[j].push(mat[j][k])
    }
  }

  for (let i = 0; i < mat.length; i++) {
    let Ai = []
    for (let j = 0; j < mat.length; j++) {
      Ai.push([])
      for (let k = 0; k < mat[0].length - 1; k++) {
        Ai[j].push(mat[j][k])
      }
    }

    for (let j = 0; j < mat.length; j++) {
      Ai[j][i] = B[j]
    }

    X.push(exports.determinant(Ai) / exports.determinant(T))
  }

  return X
}

/**
 * Generates Random Value with ACORN Algorithm:
 * Which is Better, Faster, Simpler than Standard JS PRNG Implementation.
 *  
 * @author: DPS0340
 * @return {random}
 * @since <0.37.0
 */
exports.ACORN = function (seed = new Date().getTime(), moduloPower = 60, order = 10) {
  let M = 2 ** moduloPower

  let temp = 0 + (seed.toString().split('').reverse().join(''))
  seed = seed * temp

  function oddorplusone (n) {
    if (n % 2 === 1) {
      return n
    } else {
      return n + 1
    }
  }

  seed = oddorplusone(seed % M)

  let seed2 = (seed + 2) % M

  const go = function (m, n) {
    if (m === 0) {
      return seed
    } else if (n === 0) {
      return seed2
    } else {
      return (go(m - 1, n) + (m, n - 1)) % M
    }
  }

  let xk = go(order, order)

  return xk / M
}

exports.gcd = function (a, b) {
  if (b === 0) {
    return a
  } else {
    return exports.gcd(b, a % b)
  }
}

exports.InverseMatrix = function (A) {
  if (exports.determinant(A) === 0) {
    return null
  }
  let mat = []
  let I = exports.IdentityMatrix(A.length)
  for (let i = 0; i < A.length; i++) {
    mat.push([])
    for (let j = 0; j < A[i].length; j++) {
      mat[i].push(A[i][j])
    }
    for (let j = 0; j < I[i].length; j++) {
      mat[i].push(I[i][j])
    }
  }

  mat = exports.gaussian(mat, A.length, A[0].length)

  let res = []

  for (let i = 0; i < A.length; i++) {
    res.push([])
    for (let j = A[i].length; j < mat[i].length; j++) {
      res[i].push(mat[i][j])
    }
  }

  return res
}
