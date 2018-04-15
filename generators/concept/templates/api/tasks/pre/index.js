function preTask1 (req, res, next) {
  next()
}

function preTask2 (req, res, next) {
  next()
}

const get = []
const create = []
const update = []
const retrieve = [preTask1, preTask2]
const destroy = []

export {get, create, update, retrieve, destroy}
