import {PORT, HOST} from '../settings'

import axios from 'axios'
axios.defaults.baseURL = `http://${HOST}:${PORT}/api`

function makeRequest ({url, data, options}, method, cb, errorCb) {
  console.log('haciendo peticion a', url)
  axios[method](url, data, options).then(({data}) => {
    console.log(data.message)
    debugger //eslint-disable-line
    cb(data.items)
  }).catch((response) => {
    debugger // eslint-disable-line
    console.log('An error was dispatched', response)
  })
}

export default {
  methods: {
    makeRequest
  }
}
