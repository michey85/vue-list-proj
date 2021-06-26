module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-list-proj/' : '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vue resources App';
      return args;
    });
  },
};
