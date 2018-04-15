import {Router} from 'express'
import {create, retrieve, update, destroy, get} from './controllers'
import {createAuth, retrieveAuth, updateAuth, destroyAuth, getAuth} from './authorizations'

// tasks
import {
  retrieve as preRetrieveTasks,
  update as preUpdateTasks,
  destroy as preDestroyTasks,
  get as preGetTasks,
  create as preCreateTasks
} from './tasks/pre'

import {
  retrieve as postRetrieveTasks,
  update as postUpdateTasks,
  destroy as postDestroyTasks,
  get as postGetTasks,
  create as postCreateTasks
} from './tasks/post'

const bodyParser = require('body-parser')

let router = new Router()

router.get('/', retrieveAuth, preRetrieveTasks, retrieve, postRetrieveTasks)
router.post('/', bodyParser.json(), createAuth, preCreateTasks, create, postCreateTasks)
router.get('/:id', getAuth, preGetTasks, get, postGetTasks)
router.put('/:id', bodyParser.json(), updateAuth, preUpdateTasks, update, postUpdateTasks)
router.delete('/:id', destroyAuth, preDestroyTasks, destroy, postDestroyTasks)

export default router
