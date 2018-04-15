const Generator = require('yeoman-generator')
const {readdirSync, copyFileSync} = require('fs')
const path = require('path')
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.argument('projectName', {type: String})
    this.sourcePathRoot = this.templatePath()
    this.targetPathRoot = this.destinationRoot();

    this.filesToCopy = readdirSync(this.sourcePathRoot)

    this.callArguments = {
      name: this.options.projectName
    }
  }
  copyPackageJson() {
    const source = path.join(this.sourcePathRoot, 'package.json'),
      target = path.join(this.targetPathRoot, 'package.json')
    
    copyFileSync(source, target)
    this.filesToCopy.splice(this.filesToCopy.indexOf('package.json'), 1)
    console.log('copaido package json');
  }
  questionAboutBasicThings() {
    const done = this.async()
    this.prompt([
      question('input', 'defaultPort', 'Cual quieres que sea el puerto', '3000'),
      question('input', 'db', 'Base de datos para produccion'),
      question('input', 'devDB', 'Base de datos para desarrollo')
    ]).then(({defaultPort, db, devDB}) => {
      this.callArguments.defaultPort = defaultPort
      this.callArguments.DB = db
      this.callArguments.devDB = devDB
      console.log(this.callArguments)
      done()
    })
  }
  copyAll() {
    const [source, target] = [this.sourceRoot(), this.destinationPath()]

    this.fs.copyTpl(this.templatePath('.*'), this.destinationPath(this.callArguments.name), this.callArguments)
    this.fs.copyTpl(this.templatePath('**'), this.destinationPath(this.callArguments.name), this.callArguments)
    // this.npmInstall()
  }
}

function question(type, name, message, defaultValue) {
  return {type, name, message, defaultValue}
}

function callArguments({projectName}) {
  return {projectName}
}











const template = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.argument('projectName', {type: String})

    this.callArguments = callArguments(this.options)
    console.log(this.callArguments)
  }
  method1() {
    
  }
}