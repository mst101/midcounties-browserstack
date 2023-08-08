require('dotenv').config()

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  hostname: 'hub.browserstack.com',

  services: [
    [
      'browserstack',
      {
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: true,
        opts: {
          forcelocal: false,
          localIdentifier: 'webdriverio-appium-app-browserstack-repo',
        },
        app: process.env.BROWSERSTACK_APP_PATH,
      },
    ],
  ],

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'Google Pixel 3',
        osVersion: '9.0',
      },
    },
    {
      'bstack:options': {
        deviceName: 'Google Pixel 5',
        osVersion: '12.0',
      },
    },
  ],

  commonCapabilities: {
    'bstack:options': {
      projectName: 'MidCounties Membership App',
      buildName: 'Android build',
      sessionName: 'Login test',
      appiumVersion: '1.22.0',
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v2.0',
    },
  },

  maxInstances: 10,

  updateJob: false,
  specs: ['./specs/login.js'],
  exclude: [],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000,
  },
}

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (let key in exports.config.commonCapabilities)
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key] }
})
