const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const webpackConfPromise = require('./webpack.dev.conf')
webpackConfPromise
  .then((config) => {
    const compiler = webpack(config)
    const express = require('express')
    const app = express()
    app.use(
      middleware(compiler, {
        // webpack-dev-middleware options
      })
    )
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
  })
  .catch((err) => {
    console.log(err)
  })
