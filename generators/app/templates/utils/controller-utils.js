export function getMongoDocumentErrors (error) {
  let errors = error.errors
  let errorsFormatted = []
  for (let i in errors) {
    let error = errors[i].message
    errorsFormatted.push(error)
  }
  return errorsFormatted
}
