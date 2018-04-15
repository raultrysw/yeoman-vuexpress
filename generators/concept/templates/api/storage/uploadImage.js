const path = require('path')
const multer = require('multer')

const PATH = path.join(__dirname, '../../../../assets/img/<%= collection %>')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PATH)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

let upload = multer({ storage: storage })

export default upload
