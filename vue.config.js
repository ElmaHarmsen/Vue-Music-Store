module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/assets/global-style.scss";
                `
      }
    }
  },
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html"
    },
    notFound: {
      entry: "src/main.js",
      template: "public/404.html",
      filename: "404.html"
    }
  }
};
