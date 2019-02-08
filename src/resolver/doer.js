function Doer(id, name) {
  this.id = id
  this.name = name
}
const doer = (() => {
  const doers = []
  return {
    get: () => doers,
    add(name) {
      const d = new Doer(doers.length, name)
      doers.push(d)
      return d
    },
  }
})()

module.exports = doer
