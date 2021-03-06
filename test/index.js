
var fs = require('fs');
var marked = require('marked');
var highlight = require('highlight.js');
var markedExample = require('..');

var options = {};
options.renderer = new marked.Renderer();
options.renderer.code = markedExample({
  classes: {
    container: 'border rounded',
    rendered: 'p2',
    code: 'p2 bg-light-gray'
  }
});

function render(filename) {
  var md = fs.readFileSync(filename, 'utf8');
  var html = marked(md, options);
  console.log(html);
  fs.writeFileSync(filename.replace('.md', '.html'), html);
}

render('./test/readme.md');
//render('./README.md');

