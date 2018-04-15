import routes from './routes'

export {routes}

export function responseJson (req, res) {
  res.status(res.locals.status || 200).json(res.locals)
}

export function logError (err, req, res, next) {
  console.log('Hubo un error', err)
  console.log(err.message)
  res.locals = {
    message: 'Hubo un error interno'
  }
  if (!res.locals.status) res.locals.status = 500
  res.status(res.locals.status).json(res.locals)
}
