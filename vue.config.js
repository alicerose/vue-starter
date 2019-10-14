module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/assets/scss/common.scss";`,
      },
    },
  },
};
