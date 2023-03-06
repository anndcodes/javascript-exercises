const reverseString = function(input) {
  
  const text = input.split("");
  let textReversed = text.reverse().join("");
  return textReversed;
};

// Do not edit below this line
module.exports = reverseString;
