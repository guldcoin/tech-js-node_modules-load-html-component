module.exports = [
  {
    mode: 'production',
    target: 'web',
    entry: {
      index: './index.js'
    },
    output: {
      filename: 'load-html-component.min.js',
      path: __dirname,
      library: 'loadHtmlComponent',
      libraryTarget: 'var'
    }
  }
]
