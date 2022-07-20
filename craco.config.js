const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(31, 199, 212)',
              '@font-size-base': '16px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
