module.exports.valueToAPIFormat = function findURLsInText(number) {
  if (!number) {
    return "0";
  }

  var numberWithComma = number.replace(",", ".");
  var floatedNumber = Number.parseFloat(numberWithComma).toFixed(2);

  return floatedNumber;
};
