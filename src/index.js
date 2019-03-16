module.exports = function getZerosCount(number, base) {
  
  function findMultipliers (base) {
    function isInt(n) {
        return n % 1 === 0;
    }

    let numberSys = base;
    let divider = 0;
    let i = 2;
    while(i <= numberSys) {
      if (isInt(numberSys / i) ) {
        divider = i;
          if ((numberSys / i) == 1) return divider;
          numberSys /= i;
          i = 2;
      } else {
        i++;
      }
    }
  }

  function findZero(number, devider) {
    let dev = devider;
    let result = 0;
    let i = 1;
    
    while (true) {
      if (number >= Math.pow(devider, i)) {
        dev = Math.pow(devider, i);
        result += Math.floor( number / dev );
        i++;
      } else {
        return result;
      }
    }
  }
  
  let deviderBase = findMultipliers(base);
  findZero(number, deviderBase);
  return findZero(number, deviderBase);
}