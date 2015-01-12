
var fs = require('fs');
var path = require('path');
var highlight = require('highlight.js');
var Handlebars = require('handlebars');
var template = Handlebars.compile(fs.readFileSync(path.join(__dirname, './template/example.hbs'), 'utf8'));

module.exports = function(options) {

  var options = options || {};
  template = options.template || template;
  options.classes = options.classes || {};
  options.classes.container = options.classes.container || '';
  options.classes.rendered = options.classes.rendered || '';
  options.classes.code = options.classes.code || '';

  escapeHandlebars = function(code) {
    return code.replace(/{{/g, '\\{{');
  }

  return function(code, lang) {
    var result = code;
    if (lang && lang.match(/^html/)) {
      var escaped = options.handlebars ? escapeHandlebars(code) : code;
      var data = {
        rendered: code,
        code: highlight.highlight(lang, escaped).value,
        classes: options.classes
      };
      var html = template(data);
      result = new Handlebars.SafeString(html);
    } else {
      result = '<pre>' + highlight.highlightAuto(code, [lang]).value + '</pre>';
    }
    return result;
  };

};

