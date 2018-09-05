# load-html-component

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-load-html-component) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-load-html-component/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/load-html-component.html)

[![node package manager](https://img.shields.io/npm/v/load-html-component.svg)](https://www.npmjs.com/package/load-html-component) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-load-html-component.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-load-html-component?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-load-html-component.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-load-html-component/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-load-html-component/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-load-html-component) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-load-html-component/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-load-html-component?type=dev)

Load an html component after the main document has finiahed loading.

### Install

##### Browser

```sh
curl https///bitbucket.org/guld/tech-js-node_modules-load-html-component/raw/guld/load-html-component.js -o load-html-component.js
```

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

### License

MIT Copyright isysd
