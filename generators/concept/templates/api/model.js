const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  <% attrs.forEach(function (attr) {%>
    <%= attr %>: {

    },
  <%})%>
})

class <%= modelName %>Class {}

schema.loadClass(<%= modelName %>Class)

let <%= collection %>Model = mongoose.model('<%= modelName %>', schema)

export default <%= collection %>Model
