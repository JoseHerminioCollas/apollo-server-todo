function Doer(name) {
  this.name = name
}
const doer = (model) => {
  const doers = []
  doers.push({ name: 'you' }, { name: 'me' })
  return {
    get: () => doers,
    getTodos: () => model.todos,
    add(name) {
      const d = new Doer(name)
      doers.push(d)
      return d
    },
  }
}

module.exports = doer
