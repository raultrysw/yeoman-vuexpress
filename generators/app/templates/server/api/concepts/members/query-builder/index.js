import Member from '../model'
import {pipe} from '../../../../../utils/pipe-objects'
import {} from './filters'

function buildQuery ({isJustVocal, isAdmin, notPutEvents, user, requestAll}) {
  let query = Member.aggregate()
  query.match({})

  let filters = [
  ]

  return pipe(query, function () {
    this.through(filters)
    return this.retrieve()
  })
}

export function filterFor ({query, params, user, loginLvl}) {
  const state = {
  }

  return buildQuery(state)
}
