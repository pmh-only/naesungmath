//025 정오각형의 대각선 길이//
  exports.pentadiag = function (a) {
    //간단한 것인데 귀찮은 것이라 작성//
    return ((1+((5)**0.5)/2)*(a));
  };

//026 정육각형의 넓이 공식/
//가장 빠른 걸로//
  exports.hexaarea = function (a) {
    return ((3*((3)^0.5))/2)*(a**2);
  };

//027 다각형의 대각선 공식...을 왜 하고 잇지//
  exports.polydiag = function (n) {
    return (n*(n-3)/2);
  };

//028.1 다각형의 내각의 합_60분법//
  exports.polyanglesum_deg = function (n) {
    return (180*(n-2));
  };

//028.2 다각형의 내각의 합_호도법//
  exports.polyanglesum_rad = function (n) {
    return ((Math.PI)*(n-2));
  };

//029 정다각형의 넓이//
  exports.polyarea = function (n, a) {
      return n*(a**2)/(4*(Math.tan(a/(Math.PI))));
  };

//030 정다각형의 내각//
  exports.polyangle_deg = function (n) {
      return (180*(n-2)/n);
  };

//030.2 정사각형의 내각_호도법//
  exports.polyangle_rad = function (n) {
      return ((Math.PI)*(n-2)/n);
  };

//031 원의 넓이//
  exports.circlearea = function (r) {
      return ((Math.PI)*(r**2));
  };

//032 원의 둘레//
  exports.circleperi = function (r) {
      return (2*(Math.PI)*r);
  };

//033 원방 그래프//
/*  exports.circleeq = function (x, y, a, b) {
      return ()
  };*/

//034 원주각의 중심각//
  exports.circumference = function (a) {
      return (2*a);
  };

//035 방멱의 정리, 일률과 혼동되지 않도록 mathpower으로 표기//
  exports.mathpower = function (f, g) {
      return;
  }
//이거 일치하는지 아닌지로 만들어야 될듯한데요
//선분이라 좀...

//036 접현의 정리//
//그냥 이건 다 똑같아서...

//037 원주율 공식//
//이게 공식이냐?!?!?!

//038 테일러 전개 이미 있다//

//039 부채꼴의 중심각 표시_rad//
  exports.circularsectorangle = function (r, l) {
      return (l/r);
  };

//040 부채꼴의 넓이_rl//
  exports.circularsectorarea_rl = function (r, l) {
      return (0.5*r*l);
  };

//040.2 부채꼴의 넓이_rt_no Re Twit//
  exports.circularsectorarea_rt = function (r, t) {
      return (0.5*r*(t**2));
  };

//041 호의 길이 공식//
  exports.arclength = function (r, l) {
      return (r*l);
  }

  
//042 타원의 넓이//
  exports.evalarea = function (a, b) {
      return ((Math.PI)*a*b);
  }

//043 타원의 이심률//
  exports.evalecc = function (a, b) {
      return ((1-((b**2)/(a**2)))**0.5);
  }

//044 타원의 방정식//

//045 구의 부피//
  exports.spherevolume = function (r) {
      return ((4/3)*(Math.PI)*(r**2));
  }

//046 구의 겉넓이//
  exports.spherearea = function (r) {
      return (4*(Math.PI)*(r**2));
  }

//047 원기둥의 부피//
  exports.cylindervolume = function (r, h) {
      return ((Math.PI)*(r**2)*h);
  }

//048 원기둥의 겉넓이//
  exports.cylinderarea = function (r, h) {
      return ((2*(Math.PI)*r*h)+(2*(Math.PI)*(r**2)))
  }

//049 원뿔의 부피//
  exports.conevolume = function (r, h) {
    return ((1/3)*(Math.PI)*(r**2)*h);
  }

//050 원뿔의 겉넓이//
  exports.conearea = function (r, h) {
    return (((Math.PI)*r*(((r**2)+(h**2))**0.5))+((Math.PI)*(r**2)))
  }

//051 삼각뿔의 부피, 삼각형의 넓이는 위에 잇는 것 사용//
  exports.triangularpyramidvolume = function (a, h) {
    return ((1/3)*a*h);
  }

//052.1 정사각뿔의 부피 공식//
  exports.squarepyramidvolume = function (a, h) {
    return ((1/3)*(a**2)*h)
  }














  exports.degreeToRad = function(deg) {
    return deg * Math.PI / 180;
}

exports.radToDegree = function(rad) {
    return rad * 180 / Math.PI;
}

exports.diff = function(f, density=5) {
    let dx = 2 * (10**(-density));
    let dy = (x) => f(x + (10**(-density))) - f(x - (10**(-density)));

    return (x) => dy(x) / dx;
}

exports.integral = function(f, density=5) {
    let g = (a, b) => {
        let sum = 0;
        for(let k = a; k < b; k += 10**(-density)) {
            sum += (f(k+10**(-density)) - f(k)) / 10**(-density);
        }
        return sum;
    }

    return g;
}

exports.SingularValueDecomposition = function(mat) {
    let inv = exports.InverseMatrix(mat);
    let AAT = exports.matrixmultiply(mat, inv);
}

exports.InverseMatrix = function(mat) {
    let res = [];

    for(let i=0;i<mat[0].length;i++) {
        res.push([]);
        for(let j=0;j<mat.length;j++) {
            res[i].push(arr[j][i]);
        }
    }

    return res;
}

exports.houseHolder = function(mat) {
    function s(BSq, k) {
        let res = 0;
        for(let i=k;i<Bsq.length;i++) {
            res += Bsq[i][k];
        }

        return res**0.5;
    }

    function SG(N) {
        if(N < 0) {
            return -1;
        } else {
            return 1;
        }
    }
    let K = 1;
    let B = [];
    for(let i=0;i<mat.length;i++) {
        B.push([]);
        for(let j=0;j<mat[0].length;j++) {
            B[i].push(mat[i][j]);
        }
    }

    
    while(1) {
      let Bsq = exports.matrixmultiply(B, B);
      let S = s(Bsq, k);
      if(S === 0) {
        k += 1;
        continue;
      }
      let z = 1/2*(1+SG(B[k][k-1])/S);

      let v = [];

      for(let i=0;i<k;i++) {
        v.push(0);
      }
      v.push(z**0.5);
      for(let i=k+1;i<mat.length;i++) {
        v.push(SG(B[k][i])/(2*v[k]*S));
      }
      v = exports.InverseMatrix(v);
      let H = exports.matrix_sub(exports.IdentityMatrix(n), exports.outterProduct_matrix(v, v));
      
      let A = exports.matrixmultiply(exports.matrixmultiply(H, B), H);

      if(k == n - 3) {
        return A;
      } else {
        k += 1;
        B = A;
      }
    }


}

exports.IdentityMatrix = function(n) {
    let res = [];
    for(let i=0;i<n;i++) {
        res.push([]);
        for(let j=0;j<n;j++) {
            if(i == j) {
                res[i].push(1);
            } else {
                res[i].push(0);
            }
        }
    }

    return res;
}

exports.trace = function(matrix) {
    let res = 0;
    for(let i=0;i<matrix.length;i++) {
        res += matrix[i][i];
    }
    return res;
}

exports.outterProduct_matrix = function(u, v) {
    return exports.matrixmultiply(u, exports.InverseMatrix(v));
}

//테스트용으로 가져옴//
//Migration(이민) 할때 지우셈//
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