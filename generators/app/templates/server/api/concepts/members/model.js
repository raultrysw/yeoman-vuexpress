const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  name: {

  },
  surname: {

  },
  email: {

  },
  password: {

  }
})

class MemberClass {}

schema.loadClass(MemberClass)

let membersModel = mongoose.model('Member', schema)

export default membersModel
