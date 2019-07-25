module.exports = app => {
  console.log('app.config.module', app.config.module)
  console.log('this.options.baseDir', app.loader.options.baseDir)
  app.loader.loadRouter()
};
