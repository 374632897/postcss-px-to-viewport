'use strict';

var fs = require('fs');
var postcss = require('postcss');
var pxToViewport = require('..');
var css = fs.readFileSync(require.resolve('./main.css'), 'utf8');
var options = {
    replace: false,
    custom: {
      'font-size': (value) => parseInt(value, 10) / 2 + 'px',
    },
};
var processedCss = postcss(pxToViewport(options)).process(css).css;

fs.writeFile('main-viewport.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('File with viewport units written.');
});
