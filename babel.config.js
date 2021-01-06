/* eslint-env node */
module.exports = {
  env: {
    karma: {
      sourceType: 'unambiguous',
      include: '**/*',
      exclude: [
        'node_modules/core-js/**/*',
        'node_modules/@babel/**/*',
      ],
      presets: [
        ['@babel/preset-env', {
          exclude: [
            // Disabling regenerator and async-to-generator transformations
            // because regenerator is a pain and fast-async offers a much
            // better transformation to straight up promises.
            '@babel/plugin-transform-async-to-generator',
            '@babel/plugin-transform-regenerator',
          ],
          modules: false,
          loose: false,
          corejs: 3,
          useBuiltIns: 'usage',
        }],
      ],
      plugins: [
        ['module:fast-async', {}],
        ['@babel/plugin-syntax-dynamic-import', {}],
        ['@babel/plugin-transform-runtime', {
          // Have to explicitly turn off regenerator here as well.
          regenerator: false,
        }],
      ],
    },
  },
};
