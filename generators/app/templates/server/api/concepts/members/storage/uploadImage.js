const path = require('path')
const multer = require('multer')

const PATH_TO_ARTICLES_IMAGES = path.join(__dirname, '../../../../assets/img/articles')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PATH_TO_ARTICLES_IMAGES)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

let upload = multer({ storage: storage })

export default upload
