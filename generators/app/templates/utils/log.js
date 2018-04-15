const chalk = require('chalk')

const LOG_LEVELS = {
  'error': chalk.bold.red,
  'info': chalk.bold.green,
  'debug': chalk.bold.yellow
}
const NOT_LOGS_IN_PRODUCTION = ['debug']
const FORMAT_MESSAGE = chalk.bold

let messagesCount = 0

export default function logFactory (headMainText) {
  return function log (LOG_LEVEL, message) {
    const NOT_LOG_IN_PRODUCTION = NOT_LOGS_IN_PRODUCTION.indexOf(LOG_LEVEL) !== -1
    const notLog = NOT_LOG_IN_PRODUCTION && process.env.NODE_ENV === 'production'

    if (notLog) return

    const header = LOG_LEVELS[LOG_LEVEL](
      headMainText + ' - ' +
            new Date().toLocaleString() +
            ` (${messagesCount++}): `)

    console.log(header, FORMAT_MESSAGE(message))
  }
}
