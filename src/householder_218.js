/**
 * 218 HouseHolder
 *
 * @author: DPS0340
 * @param {string} mat
 * @return {number} houseHolder
 * @since <0.37.0
 */
exports.houseHolder = function (mat) {
    function SG(N) {
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
        function s(k) {
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
    function sqrtDotProduct(row1, row2) {
        let res = 0
        for (let i = 0; i < row1.length; i++) {
            res += row1[i] * row2[i]
        }

        return res ** 0.5
    }

    function dotProduct(row1, row2) {
        let res = 0
        for (let i = 0; i < row1.length; i++) {
            res += row1[i] * row2[i]
        }

        return res
    }

    // eslint-disable-next-line no-unused-vars
    function normailze(row) {
        return exports.matrix_scala_multiplation(row, 1 / sqrtDotProduct(row, row))
    }

    function normalizeMemoi(row, K) {
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
