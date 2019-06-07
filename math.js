exports.plus = function (a, b) {
    return a + b;
 };
 
 exports.minus = function (a, b) {
     return a - b;
 };
 
 exports.multiply = function (a, b) {
     return a * b;
 };
 
 exports.divide = function (a, b) {
     return a / b;
 };
 
 exports.caret = function (a, b) {
     return a ** b;
 };
 
 exports.pow = function(a, b){
  return Math.pow(a, b);
 };
 
 exports.sqrt = function(a){
 return Math.sqrt(a);	
 };
 
 exports.random = function(a, b){
    var ranNum = Math.floor((Math.random() * b) + a); 
        return ranNum;
 };
 
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
 
 exports.pi2 = function(a) {
     return 2 * Math.PI * a;
 };
 
 exports.pi= Math.PI;
 
 exports.round = function(a) {
    return Math.round(a);
 };

 exports.equilateraltrianglearea = function(a) {
    return 3**0.5/4*a*a;
 };

 exports.equilateraltriangleheight = function(a) {
    return (3^0.5/2*a);
 };

 exports.righttriangle = function(a, b) {
    return (0.5*a*b);
 };

 exports.pytagoras = function(a, b) {
    return (a*a+b*b);
 };

 exports.quadrilateraltriangle = function (a, b) {
    return (a/4*(4*b*b-a*a)**0.5)
 };

 exports.triangleAreaWithThreeEdge = function(a, b, c) {
    const cos_theta = ((a*a)+(b*b)-(c*c)) / (2*a*b);
    const sin_theta = Math.sqrt(1-(cos_theta**2));
    return (a*b*sin_theta)/2;
 };

 exports.triangleAreaWithHeight = function (a, h) {
    return (0.5*a*h);
 };

 exports.triangleAreaWithAngle = function (a, b, t) {
    return (0.5*a*b*(sin(t)));
};