
var fs = require('fs');
var marked = require('marked');
var highlight = require('highlight.js');
var markedExample = require('..');

markedExample.setOptions({
  classes: {
    container: 'border',
    rendered: 'p2',
    code: 'p2'
  }
});

var options = {};
options.renderer = new marked.Renderer();
options.renderer.code = markedExample.code;

function render(filename) {
  var md = fs.readFileSync(filename, 'utf8');
  var html = marked(md, options);
  fs.writeFileSync(filename.replace('.md', '.html'), html);
}

render('./test/readme.md');
//render('./README.md');

