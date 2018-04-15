// const cors = require('cors')

function middleware1 (req, res, next) {
  next()
}

function middleware2 (req, res, next) {
  next()
}

export default [middleware1, middleware2]
