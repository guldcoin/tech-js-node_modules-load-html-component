# load-html-component

Load an html component after the main document has finished loading.

### Usage

```
<html>
  <body>
    <script src="load-html-component.js"></script>
    <script>
      loadHTMLComponent('path/to/component.html', 'target').then(() => {
        // target is now showing component.html
      })
    </script>
    <div id="target"></div>
  </body>
</html>
```
