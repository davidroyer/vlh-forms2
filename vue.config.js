module.exports = {
  lintOnSave: false,
  // css: {
  //   extract: false
  // },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
  // configureWebpack: {
  //   output: {
  //     library: "VlhForms",
  //     filename: "vlh-forms.js",
  //     libraryExport: "default"
  //   }
  // }
};
