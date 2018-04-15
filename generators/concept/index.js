const capitalize = require('capitalize'), lowerCase = require('lower-case'), pluralize = require('pluralize')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.argument('concept', {type: String})
    this.argument('attrs', {type: String})
    this.options.attrs = this.options.attrs.split(' ')
    this.options.concept = lowerCase(this.options.concept)
    this.options.modelName = capitalize(this.options.concept)
    this.options.collection = pluralize(this.options.concept)

    console.log(this.options.concept, this.options.attrs, this.options.modelName, this.options.collection)
  }
  copyFiles() {
    const sourceApi = this.templatePath('api/**')
    const sourceViews = this.templatePath('views')

    this.fs.copyTpl(sourceApi, this.destinationPath('server/api/concepts/' + this.options.collection), this.options)
    this.fs.copyTpl(sourceViews, this.destinationPath('pages/' + this.options.collection), this.options)
  }
}
