//더하기//
exports.plus = function (a, b) {
    return a + b;
 };
//빼기// 
 exports.minus = function (a, b) {
     return a - b;
 };
 //곱하기//
 exports.multiply = function (a, b) {
     return a * b;
 };
 //나누기//
 exports.divide = function (a, b) {
     return a / b;
 };
 //a의 b제곱//
 exports.caret = function (a, b) {
     return a ** b;
 };
 //좌표//
 exports.pow = function(a, b){
  return Math.pow(a, b);
 };
 //제곱//
 exports.sqrt = function(a){
 return Math.sqrt(a);	
 };
 //랜덤//
 exports.random = function(a, b){
    var ranNum = Math.floor((Math.random() * b) + a); 
        return ranNum;
 };
 //소수//
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
 //호도법//
 exports.pi2 = function(a) {
     return 2 * Math.PI * a;
 };

//파이//
exports.pi= Math.PI;
 
exports.round = function(a) {
    return Math.round(a);
 };

//정삼각형의 넓이//
exports.equilateraltrianglearea = function(a) {
    return 3**0.5/4*a*a;
};
//정삼각형의 높이//
exports.equilateraltriangleheight = function(a) {
    return (3^0.5/2*a);
 };

//직각삼각형의 넓이//
 exports.righttriangle = function(a, b) {
    return (0.5*a*b);
 };

//피타고라스 정리//
exports.pytagoras = function(a, b) {
    return (a*a+b*b);
 };

//이등변삼각형의 넓이//
exports.quadrilateraltriangle = function (a, b) {
    return (a/4*(4*b*b-a*a)**0.5)
 };

//헤론의 공식//
 exports.triangleAreaWithThreeEdge = function(a, b, c) {
    const cos_theta = ((a*a)+(b*b)-(c*c)) / (2*a*b);
    const sin_theta = Math.sqrt(1-(cos_theta**2));
    return (a*b*sin_theta)/2;
 };

//삼각형의 넓이//
 exports.triangleAreaWithHeight = function (a, h) {
    return (0.5*a*h);
 };

//각의 삼각형의 넓이//
 exports.triangleAreaWithAngle = function (a, b, t) {
    return (0.5*a*b*(sin(t)));
};
