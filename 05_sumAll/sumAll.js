const sumAll = function(int1, int2) {

  if (int1 <= -1 || int2 <= -1) { 
    return "ERROR"
  } else if(!Number.isInteger(int1) || !Number.isInteger(int2)) {
    return "ERROR"
  } else if( int1 > int2) {
    let int = int1;
    int1 = int2;
    int2 = int;
  }

  let finalSum = 0;
 
    for(int1 = 0; int1 <= int2; int1++) {
      finalSum += int1;
    } 

  return finalSum;
};


// Do not edit below this line
module.exports = sumAll;
