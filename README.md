# Marked Example

Code renderer for `marked` that converts HTML code blocks into examples
with rendered HTML and highlighted code using `highlight.js`.

Takes a code block:

    ```html:example
    <h1>Example</h1>
    ```

And renders the following:

```html
<div class="MarkedExample">
  <div class="MarkedExample-rendered">
    <h1>Example</h1>
  </div>
<pre class="MarkedExample-code"><span class="hljs-tag">&lt;<span class="hljs-title">h1</span>&gt;</span>Hamburger 1<span class="hljs-tag">&lt;/<span class="hljs-title">h1</span>&gt;</span></pre>
</div>
```

## Usage

```js
var fs = require('fs');
var marked = require('marked');
var markedExample = require('marked-example');
var renderer = new marked.Renderer();
renderer.code = markedExample;

var src = fs.readFileSync('./README.md', 'utf8');
var html = marked(src, { renderer: renderer });
```

MIT License
