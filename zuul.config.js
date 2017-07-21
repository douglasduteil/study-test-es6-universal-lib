//


const defaultConfig = {
  name: 'study-test-es6-universal-lib',
  ui: 'tape'
};

const commitSha1 = (process.env.TRAVIS_COMMIT || '').slice(0, 7);
const travisConfig = {
  browsers: [
    {
      name: process.env.BROWSER_NAME,
      version: process.env.BROWSER_VERSION
    }
  ],
  html: 'test/basic.html',
  name: [
    process.env.TRAVIS_BRANCH,
    '(' + commitSha1 + ')',
    '-',
    process.env.TRAVIS_JOB_NUMBER,
    '-',
    process.env.BROWSER_NAME,
    process.env.BROWSER_VERSION
  ].join(' '),
  ui: 'tape'
};

module.exports = false ||
  (process.env.TRAVIS && travisConfig) ||
  defaultConfig;
