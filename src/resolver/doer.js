function Doer(name) {
  this.name = name
}
const doer = (model) => {
  const doers = [{ name: 'me' }]
  doers.push({ name: 'you' })
  const todos = [{ id: 23, title: 'title three' }]
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
