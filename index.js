
var highlight = require('highlight.js');

module.exports = function(code, lang) {

  var result = code;

  if (lang && lang.match(/\:example$/)) {
    var lang = lang.split(':')[0];
    result = '<div class="MarkedExample">\n' +
      '<div class="MarkedExample-rendered">\n' +
      code + '\n' +
      '</div>\n' +
      '<pre class="MarkedExample-code">' +
      highlight.highlight(lang, code).value +
      '</pre>\n</div>\n';
  } else {
    result = '<pre>' + highlight.highlightAuto(code, [lang]).value + '</pre>';
  }

  return result;

};

