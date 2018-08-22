module.exports.findURLsInText = function findURLsInText(text) {
  var regex_url = new RegExp(/(http:\/\/|https:\/\/)?(w{3}\.)?(\w)+(\.(\w){2,3}){1,2}/g);
  var urls = text.match(regex_url);

  return urls ? urls : [];
};



// var REGEX_URL = new RegExp(/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/g);
