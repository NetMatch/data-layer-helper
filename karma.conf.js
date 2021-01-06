/* eslint-env node */
module.exports = function(config) {
  const isTC = 'TEAMCITY_VERSION' in process.env;

  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      {pattern: './test/.all.js'},
    ],
    exclude: [],
    preprocessors: {
      'test/.all.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              envName: 'karma',
              babelrc: false,
              configFile: true,
            },
          },
        ],
      },
    },
    webpackMiddleware: {
      stats: 'errors-warnings',
    },
    client: {
      captureConsole: false,
      jasmine: {
        random: false,
      },
    },
    reporters: isTC ? ['teamcity'] : ['mocha'],
    summaryReporter: {show: 'all'},
    port: 9876,
    colors: !isTC,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: isTC,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        debug: true,
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ],
      },
    },
  });
};
