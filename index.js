
var fs = require('fs');
var highlight = require('highlight.js');
var Handlebars = require('handlebars');

var template = Handlebars.compile(fs.readFileSync('./template/example.hbs', 'utf8'));
var options = {};

module.exports = {

  setOptions: function(options) {
    options = options || {};
    template = options.template || template;
    options.classes = options.classes || {};
    options.classes.container = options.classes.container || '';
    options.classes.rendered = options.classes.rendered || '';
    options.classes.code = options.classes.code || '';
  },


  code: function(code, lang) {
    var result = code;
    if (lang && lang.match(/\:example$/)) {
      var lang = lang.split(':')[0];
      var data = {
        rendered: code,
        code: highlight.highlight(lang, code).value,
        classes: options.classes
      };
      result = template(data);
    } else {
      result = '<pre>' + highlight.highlightAuto(code, [lang]).value + '</pre>';
    }

    return result;
  }

};

