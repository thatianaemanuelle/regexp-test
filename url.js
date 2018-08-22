module.exports.findURLsInText = function findURLsInText(text) {
  var regex_url = new RegExp(/(((http|https):\/{2})?(www.)?([a-z0-9-]+\.){1,2})([a-z]{2,3}(\/([\w\?\=\&\%\@\.\-\_\!\#]*\/*)*\b|\b))/g);
  var urls = text.match(regex_url);

  return urls ? urls : [];
};
