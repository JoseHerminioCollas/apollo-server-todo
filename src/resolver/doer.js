function Doer(id, name) {
  this.id = id
  this.name = name
}
const doer = (() => {
  const doers = []
  const getDoer = () => doers[0]
  const getDoers = () => doers
  const addDoer = (name) => {
    const d = new Doer(doers.length, name)
    doers.push(d)
    return d
  }
  return {
    getDoers,
    getDoer,
    addDoer,
  }
})()

module.exports = doer
