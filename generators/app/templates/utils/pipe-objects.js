export function pipe (theObject, execFN) {
  function through (conditionsWithFNS) {
    for (let i = 0; i < conditionsWithFNS.length; i++) {
      let [condition, fn] = conditionsWithFNS[i]
      if (condition) theObject = fn(theObject)
      if (condition && theObject === undefined) {
        throw new Error('No function can return undefined')
      }
    }
  }


  const retrieve = () => theObject
  const fns = {through, retrieve}

  return execFN.bind(fns)()
}
