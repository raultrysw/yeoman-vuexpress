const developing = process.env.NODE_ENV !== 'production'

const dbs = {
  test: 'mongodb://localhost/<%= devDB %>',
  prod: 'mongodb://localhost/<%= DB %>'
}

const PORT = process.env.PORT || <%= defaultPort %>
const HOST = process.env.HOST || 'localhost'
const DB = developing ? dbs.test : dbs.prod

export {PORT, HOST, DB}
