// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  let doublePrefix = cardNumber.substring(0, 2);
  let triplePrefix = cardNumber.substring(0, 3);
  let quadPrefix = cardNumber.substring(0, 4);
  let prefix = cardNumber.substring(0, 1);
  let cardLength = cardNumber.length;
  let sixPrefix = cardNumber.substring(0, 6)

  if ((doublePrefix == '38' || doublePrefix == '39') && (cardLength == 14)) {
    return "Diner's Club"
  } else if ((doublePrefix == '34' || doublePrefix == '37') && (cardLength == 15)) {
    return "American Express"
  } else if ((quadPrefix == '4903' || quadPrefix == '4905' || quadPrefix == '4911' || quadPrefix == '4936' || quadPrefix == '6333' || quadPrefix == '6754' || sixPrefix == '564182' || sixPrefix == '633110') && (cardLength == 16 || cardLength == 18 || cardLength == 19 )) {
    return "Switch"
  } else if ((prefix == '4') && (cardLength == 13 || cardLength == 16 || cardLength == 19)) {
    return "Visa"
  } else if ((doublePrefix == '51' || doublePrefix == '52' || doublePrefix == '53' || doublePrefix == '54' || doublePrefix == '55') && cardLength == 16) {
    return "MasterCard"
  } else if ((quadPrefix == '6011' || triplePrefix == '644' || triplePrefix == '645' || triplePrefix == '646' || triplePrefix == '647' || triplePrefix == '648' || triplePrefix == '649' || doublePrefix == '65') && (cardLength == 16 || cardLength == 19)) {
    return "Discover"
  } else if ((quadPrefix == '5018' || quadPrefix == '5020' || quadPrefix == '5038' || quadPrefix == '6304') && (cardLength >= 12 && cardLength <= 19)) {
    return "Maestro"
  } else if (((Number(sixPrefix) >= 622126 && Number(sixPrefix) <= 622926) || (Number(sixPrefix) >= 624 && Number(sixPrefix) <= 626) || (Number(quadPrefix) >= 6282 && Number(quadPrefix) <= 6288) || triplePrefix == '624' || triplePrefix == '625' || triplePrefix == '626') && (cardLength >= 11 && cardLength <= 19)) {
    return 'China UnionPay'
  } 




  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

};
