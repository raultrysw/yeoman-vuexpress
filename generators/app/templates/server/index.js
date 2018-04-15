import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import {routes, responseJson, logError} from './api/'
import {PORT, HOST, DB} from '../settings/'
import * as defaults from './default-properties'
import middlewares from './middlewares'

const mongoose = require('mongoose')

// Config database

mongoose.connect(DB)

// Config express

// eslint-disable-next-line
for (const functionName in defaults) {
  const fn = defaults[functionName]
  express.request.__proto__[functionName] = fn //eslint-disable-line
}

const app = express()

app.set('port', PORT)

app.use(middlewares)

// Import API Routes
for (const route in routes) {
  const router = routes[route]
  const finalRoute = '/api' + route
  console.log('estableciendo ' + finalRoute)
  app.use(finalRoute, router)
}

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use('/api/*', responseJson, logError)
app.use(nuxt.render)

// Listen the server
app.listen(PORT, HOST)
console.log('Server listening on ' + HOST + ':' + PORT) // eslint-disable-line no-console
