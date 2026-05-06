module.exports = function reverse(n) {
  let number = n;
  if (n<0){
    number = n*(-1);
  }
 
  return parseInt(String(number).split('').reverse().join(''));
  };
