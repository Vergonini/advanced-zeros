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
      }
    }




    // let numberSys = base;
    // let divider = 0;
    // for (let i = 2; i <= numberSys; i++) {
    //   if ( isInt(numberSys / i) ) {
    //     divider = i;
    //     if ((numberSys / i) == 1) return divider;
    //       numberSys /= i;
    //       i = 2;
    //   }
    // }
  }

  function findZero(number, devider) {
    let dev = devider;
    let result = 0;

    for (let i = 1; number > dev; i++) {
      dev = Math.pow(dev, i);
      result += Math.floor( number / dev );
    }
    return result;
  }

  let deviderBase = findMultipliers(base);
  let result = findZero(number, deviderBase);
  return result;
}