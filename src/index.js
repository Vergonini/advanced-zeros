module.exports = function getZerosCount(number, base) {
  
  let numberSys = base;
  let degree = 0;
  let zeros = 0;
  let primeNumber = 2;

  while (true) {
    if(numberSys % primeNumber === 0) {
      numberSys /= primeNumber;
      degree++;
    } else {
      primeNumber++;
      degree = 0;
    }

    if (numberSys === 1) break;
  }

  while (number > 0) {
      number = Math.floor( number / primeNumber);
      zeros += number;
  }

  zeros = Math.floor(zeros/degree);

  return zeros;
}