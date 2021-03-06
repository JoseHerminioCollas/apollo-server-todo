function Doer(name) {
  this.name = name
}
const doer = (() => {
  const doers = [{ name: 'me' }]
  return {
    get: () => doers,
    add(name) {
      const d = new Doer(name)
      doers.push(d)
      return d
    },
  }
})()

module.exports = doer
