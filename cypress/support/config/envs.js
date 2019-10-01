const config = {
  live: {
    baseUrl: 'https://www.bbc.com',
    dataUrl: 'https://www.bbc.com',
    assetUrl: 'https://news.files.bbci.co.uk/include/articles/public',
    assetOrigin: 'https://news.files.bbci.co.uk',
    atiAnalyticsWSBucket: '598342',
    atiAnalyticsGNLBucket: '598289',
    atiAnalyticsDefaultBucket: '596068',
    atiUrl: 'https://a1.api.bbc.co.uk/hit.xiti?',
    chartbeatEnabled: false,
    liveRadioIframeBaseUrl: 'https://www.bbc.com',
  },
  test: {
    baseUrl: 'https://www.test.bbc.com',
    dataUrl: 'https://www.test.bbc.com',
    assetUrl: 'https://news.test.files.bbci.co.uk/include/articles/public',
    assetOrigin: 'https://news.test.files.bbci.co.uk',
    atiAnalyticsWSBucket: '598343',
    atiAnalyticsGNLBucket: '598290',
    atiAnalyticsDefaultBucket: '596068',
    atiUrl: 'https://logws1363.ati-host.net?',
    chartbeatEnabled: true,
    liveRadioIframeBaseUrl: 'https://www.test.bbc.com',
  },
  local: {
    baseUrl: 'http://localhost.bbc.com:7080',
    dataUrl: 'http://localhost.bbc.com:7080',
    assetUrl: 'http://localhost.bbc.com:7080',
    assetOrigin: 'http://localhost.bbc.com:7080',
    atiAnalyticsWSBucket: '598343',
    atiAnalyticsGNLBucket: '598290',
    atiAnalyticsDefaultBucket: '596068',
    atiUrl: 'https://logws1363.ati-host.net?',
    chartbeatEnabled: false,
    liveRadioIframeBaseUrl: 'https://www.test.bbc.com',
  },
};

const geoLocate = (conf, isUk = false) => {
  if (!isUk) return conf;

  // eslint-disable-next-line no-param-reassign
  conf.baseUrl = conf.baseUrl.replace('.com', '.co.uk');
  // eslint-disable-next-line no-param-reassign
  conf.dataUrl = conf.dataUrl.replace('.com', '.co.uk');

  return conf;
};

module.exports =
  typeof Cypress !== 'undefined'
    ? geoLocate(config[Cypress.env('APP_ENV')], Cypress.env('UK'))
    : (env, uk) => geoLocate(config[env], uk);
