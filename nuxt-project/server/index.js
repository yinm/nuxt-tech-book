const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.set('port', port)
app.use('/api/', bodyParser.json())

const config = require('../nuxt.config')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder
  builder.build()
}

app.use(nuxt.render)
app.listen(port, host)

console.log(`Server listening on ${host}:${port}`)
