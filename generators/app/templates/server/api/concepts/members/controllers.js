import {filterFor} from './query-builder'
import Member from './model'
import httpCodes from '../../../http-codes'

export function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = filterFor(req)
  query.exec((err, members) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'Todos los miembros fueron recuperados', {members})
    next()
  })
}
export function create (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  let member = new Member(req.body)
  member.save((err, memberCreated) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.CREATED, 'El miembro fue creado correctamente', {memberCreated})
    next()
  })
}

export function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Member.findById(req.params.id, (err, member) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El miembro fue recuperado correctamente', {member})
    next()
  })
}

export function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  Member.findByIdAndUpdate(req.params.id, {$set}, (err, member) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El miembro fue actualizado correctamente', {member})
    next()
  })
}

export function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  Member.findByIdAndRemove(req.params.id, (err, member) => {
    if (err) {
      res.locals = createBadResponse(httpCodes.INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(httpCodes.OK, 'El miembro fue eliminado correctamente', {member})
    next()
  })
}
