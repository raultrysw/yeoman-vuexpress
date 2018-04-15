function postTask1 (req, res, next) {
  next()
}

function postTask2 (req, res, next) {
  next()
}

const get = []
const create = []
const update = []
const retrieve = [postTask1, postTask2]
const destroy = []

export {get, create, update, retrieve, destroy}
