import {filterFor} from './query-builder'
import <%= modelName %> from './model'
import httpCodes from '../../../http-codes'

export function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = filterFor(req)
  query.exec((err, <%= collection %>) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'Todos los <%= collection %> fueron recuperados', {<%= collection %>})
    next()
  })
}

export function create (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  let <%= concept %> = new <%= modelName %>(req.body)
  <%= concept %>.save((err, <%= concept %>Created) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.CREATED, 'El <%= modelName %> fue creado correctamente', {<%= concept %>Created})
    next()
  })
}

export function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  <%= modelName %>.findById(req.params.id, (err, <%= concept %>) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El <%= modelName %> fue recuperado correctamente', {<%= concept %>})
    next()
  })
}

export function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  <%= modelName %>.findByIdAndUpdate(req.params.id, {$set}, (err, <%= concept %>) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El <%= modelName %> fue actualizado correctamente', {<%= concept %>})
    next()
  })
}

export function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  <%= modelName %>.findByIdAndRemove(req.params.id, (err, <%= concept %>) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El <%= modelName %> fue eliminado correctamente', {<%= concept %>})
    next()
  })
}
