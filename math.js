//000.1 더하기//
exports.plus = function (a, b) {
    return a + b;
 };
//000.2 빼기// 
 exports.minus = function (a, b) {
     return a - b;
 };
 //000.3 곱하기//
 exports.multiply = function (a, b) {
     return a * b;
 };
 //000.4 나누기//
 exports.divide = function (a, b) {
     return a / b;
 };
 //000.5 a의 b제곱//
 exports.caret = function (a, b) {
     return a ** b;
 };
 //000.6 좌표//
 exports.pow = function(a, b){
  return Math.pow(a, b);
 };
 //000.7 제곱//
 exports.sqrt = function(a){
 return Math.sqrt(a);	
 };
 //000.8 랜덤//
 exports.random = function(a, b){
    var ranNum = Math.floor((Math.random() * b) + a); 
        return ranNum;
 };
 //000.9 소수//
 exports.primenumber = function(a, b) {
    let results = [];
    for (let i = a; i <= b; i++) {
        let isPrimeNumber = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrimeNumber = false;
                break;
            }
        }
 
        if (isPrimeNumber) {
            results.push(i);
        }
    }
 
    return results;
 };
 //000.10 호도법//
 exports.pi2 = function(a) {
     return 2 * Math.PI * a;
 };

//000.11 파이//
exports.pi= Math.PI;
 
exports.round = function(a) {
    return Math.round(a);
 };

//001 정삼각형의 넓이//
exports.equilateraltrianglearea = function(a) {
    return 3**0.5/4*a*a;
};
//002 정삼각형의 높이//
exports.equilateraltriangleheight = function(a) {
    return (3^0.5/2*a);
 };

//003 직각삼각형의 넓이//
 exports.righttriangle = function(a, b) {
    return (0.5*a*b);
 };

//004 피타고라스 정리//
exports.pytagoras = function(a, b) {
    return ((a*a+b*b)**0.5);
 };

//005 이등변삼각형의 넓이//
exports.quadrilateraltriangle = function (a, b) {
    return (a/4*(4*b*b-a*a)**0.5)
 };

//006 헤론의 공식//
 exports.triangleAreaWithThreeEdge = function(a, b, c) {
    const cos_theta = ((a*a)+(b*b)-(c*c)) / (2*a*b);
    const sin_theta = Math.sqrt(1-(cos_theta**2));
    return (a*b*sin_theta)/2;
 };

//007 삼각형의 넓이//
 exports.triangleAreaWithHeight = function (a, h) {
    return (0.5*a*h);
 };

//008 각의 삼각형의 넓이//
 exports.triangleAreaWithAngle = function (a, b, t) {
    return (0.5*a*b*(sin(t)));
};
//009 내접원과 삼각형의 넓이 공식//
 exports.inscribedcircle = function (a, b, c, r) {
    return (((a+b+c)/2)*r);
};
//010.1 외접원과 삼각형의 넓이 공식//
 exports.circumscribedcircle1 = function (a, b, c, r) {
    return (a*b*c/4/r);
 };
//010.2 외접원과 삼각형의 넓이 공식//
 exports.circumscribedcircle2 = function (a, b, c, r) {
    return (2*r*r*(sin(a))*(sin(b))*(sin(c)));
 };
//011 두 벡터가 생성하는 삼각형의 넓이 공식//

//012 사선 공식//
 
//201 뉴턴 방법//
 exports.newtonsmethod = function (f, count, initx=2) {
     function diff(f, x, density=5) {
         const dx = 2 * (10**-density);
         const dy = f(x+(10**-density)) - f(x-(10**-density));
         return dy / dx;
     }
     function newton_go(f, x, go=0) {
         const next = x - f(x) / diff(f, x);
         if(go == count - 1) {
            return next;
        }
         return newton_go(f, next, go+1);
     }

     return newton_go(f, initx, 0);
 };
//202.1 테일러 급수//
 exports.taylor = function(f, a, count) {
     let diffs = [(x) => f(a)];
     let taylors = [];
     let fact = [1];

     function diff(fun, density=5) {
        const dx = 2 * (10**-density);
        const dy = (x) => fun(x+(10**-density)) - fun(x-(10**-density));
        return (x) => dy(x) / dx;
    }

    taylors.push((x) => diffs[0](x));

    for(let i=1;i<=count;i++) {
        diffs.push(diff(diffs[i-1]));
        let factorial = 1;
        for(let j=1;j<=i;j++) {
            factorial *= j;
        }
        fact.push(factorial);

        taylors.push(
            function(x) {
                return diffs[i](a)/fact[i]*((x-a)**i);
            }
        );
    }

    function res(x) {
        result = 0;
        for(let i=0;i<=count;i++) {
            result += taylors[i](x);
        }
        return result;
    }

    return res;
 };
//202.2 매클로린 급수//
 exports.maclaurin = function(f, count) {
     return exports.taylor(f, 0, count);
 };
//203 행렬곱//
 exports.matrixmultiply = function(matrix_a, matrix_b) {
     if(matrix_a[0].length != matrix_b.length) {
         console.log("잘못된 행렬곱 인자의 크기");
         return;
     }
     let result = [];
     for(let i=0;i<matrix_a.length;i++) {
         result.push([]);
         for(let j=0;j<matrix_b[0].length;j++) {
             let sum = 0;
             for(let k=0;k<matrix_b.length;k++) {
                 sum += matrix_a[i][k] * matrix_b[k][j];
             }
             result[i].push(sum);
         }
     }

     return result;
 };
//204 LU 분해법//
 exports.LUDecomposition = function(matrix) {
     if(matrix.length !== matrix[0].length) {
         console.log("행과 열의 크기가 같지 않음");
         return;
     }
     const len = matrix.length;
     let L = [];
     let U = [];
     for(let i=0;i<len;i++) {
         L.push([]);
         U.push([]);
         for(let j=0;j<len;j++) {
             L[i].push(0);
             U[i].push(0);
         }
     }

     for(let i=0;i<len;i++) {
         for(let k=i;k<len;k++) {
             let sum = 0;
             for(let j=0;j<i;j++) {
                 sum += L[i][j] * U[j][k];
             }
             U[i][k] = matrix[i][k] - sum;
         }
         for(let k=i;k<len;k++) {
             if(i === k) {
                 L[i][i] = 1;
             } else {
                let sum = 0;
                for(let j=0;j<i;j++) {
                    sum += L[k][j] * U[j][i];
                }
                L[k][i] = (matrix[k][i] - sum) / U[i][i];
             }
        }
     }

     return {Lower:L, Upper:U};
 };
//205 행렬의 스칼라곱//
 exports.matrix_scala_multiplation = function(matrix, k) {
     for(let i=0;i<matrix.length;i++) {
         for(let j=0;j<matrix[0].length;j++) {
             matrix[i][j] *= k;
         }
     }

     return matrix;
 };
//206 행렬식//
 exports.determinant = function(matrix) {
     if(matrix.length !== matrix[0].length) {
        console.log("행과 열의 크기가 같지 않음");
        return;
     }
     if(matrix.length > 2) {
         let result = 0;
         for(let i=0;i<matrix[0].length;i++) {
             const K = matrix[0][i];
             let mat = [];
             for(let j=1;j<matrix.length;j++) {
                 mat.push([]);
                 for(let k=0;k<matrix[0].length;k++) {
                     if(k !== i) {
                        mat[j-1].push(matrix[j][k]);
                     }
                 }
             }
             console.log(mat);
             if(i % 2 == 0) {
                result += K * exports.determinant(mat);
             } else {
                result -= K * exports.determinant(mat);
             }
         }
         return result;
     } else {
         return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
     }
 }
//207 가우스 소거법//
 exports.gaussian = function(matrix) {
    // 불행히도, 작동하지 않습니다. //
    let h = 0;
    let k = 0;
    while(h < matrix[0].length && k < matrix.length) {
        let max = 0;
        for(let i=h;i<matrix.length;i++) {
            let temp = Math.abs(matrix[i][k]);
            if(temp < max) {
                max = temp;
            }
        }
        if(max == 0) {
            k += 1;
        } else {
            for(let j=0;j<matrix[0].length;j++) {
                let temp = matrix[h][j];
                matrix[h][j] = matrix[k][j];
                matrix[k][j] = temp;
            }
            for(let i=h+1;i<matrix[0].length;i++) {
                let f = matrix[i][k] / matrix[j][k];
                matrix[i][k] = 0;
                for(let j=k+1;j<matrix.length;j++) {
                    matrix[i][j] = matrix[i][j] - matrix[h][j] * f;
                }
            }
            h += 1;
            k += 1;
        }
    }
    return matrix;
 }
//208 행렬의 덧셈//
 exports.matrix_add = function(matrix_a, matrix_b) {
     if(matrix_a.length !== matrix_b.length || matrix_a[0].length !== matrix_b[0].length) {
         console.log("행렬의 크기 불일치");
         return;
     }
     let result = [];
     for(let i=0;i<matrix_a.length;i++) {
         result.push([]);
         for(let j=0;j<matrix_a[0].length;j++) {
             result[i].push(matrix_a[i][j] + matrix_a[i][j]);
         }
     }
     return result;
 }
//209 행렬의 뺄셈//
 exports.matrix_sub = function(matrix) {
    if(matrix_a.length !== matrix_b.length || matrix_a[0].length !== matrix_b[0].length) {
        console.log("행렬의 크기 불일치");
        return;
    }
    let result = [];
    for(let i=0;i<matrix_a.length;i++) {
        result.push([]);
        for(let j=0;j<matrix_a[0].length;j++) {
            result[i].push(matrix_a[i][j] - matrix_a[i][j]);
        }
    }
    return result;
 }

//013 무게중심 공식//
  exports.centerofgravity = function (a1, a2, b1, b2, c1, c2) {
      return ((a1+b1+c1)/3) ((a2+b2+c2)/3)
  };    
      
//014 중선 정리//
  //exports.ApolloniusTheorem = function (ab, ac , am, bm) {
      
//015 정사각형의 넓이 공식//
   exports.square = function (a) {
      return (a**2)
   };
//016 직사각형의 넓이 공식//
   exports.rectarea = function (a, b){
      return (a*b)
   };
//017 직사각형의 둘레 공식//
   exports.rectper = function (a, b) {
      return ((a)*2+(b)*2)
   };      
//018 직사각형의 대각선 길이 공식//
   exports.rectdiag = function (a, b) {
      return (((a)**2+(b)**2)**0.5)
   };      
//019 마름모의 넓이 공식//
   exports.rhomarea = function (a, b) {
      return (0.5*(a)*(b))
   };    
//020 평행사변형의 넓이 공식//
   exports.paraarea = function (a, h) {
      return (a*h)
   };   
//021 사다리꼴의 넓이 공식//
   exports.trapearea = function (a, b, h) {
      return (0.5*(a+b)*h)
   };   
//022 사각형의 넓이 공식//
   exports.squarearea = function (a, b, t) {
      return (0.5*(a)*(b)*(sin(t)))
   };
//023 정오각형의 넓이 공식//
   exports.pentarea = function (a) {
      return ((((a)**2)/4)*((25+10((5)**0.5))**0.5))
   };        
//024 정오각형의 넓이 공식//
    exports.pentheight = function (a) {
      return (((5+2*((5)**0.5))/2)*(a))        
   };
