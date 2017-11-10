const merge = require('webpack-merge')
const base = require('./webpack.client.config')

module.exports = merge(base, {
  target: 'node',
  output: {
    filename: 'index.server.js'
  }
})
