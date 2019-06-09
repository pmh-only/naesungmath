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
 
