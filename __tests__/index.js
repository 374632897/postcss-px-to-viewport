const postcss = require('postcss');
const pxToViewport = require('..');

const parse = (source, options) => postcss(pxToViewport(options)).process(source).css;

test('it should parsed with custom props handler', () => {
  const source = `
    .name {
      font-size: 36px;
      line-height: 1;
    }
  `;
  expect(parse(source, {
    custom: {
      'font-size': (value) => parseInt(value, 10) / 2 + 'px',
    }
  })).toBe(`
    .name {
      font-size: 18px;
      line-height: 1;
    }
  `)
});
