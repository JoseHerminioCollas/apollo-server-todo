function Doer(name) {
  this.name = name
}
const doer = (model) => {
  const doers = []
  const todoIds = [0]
  doers.push({ name: 'you' }, { name: 'me' })

  return {
    get: () => doers,
    getTodos: () => model.todos.filter(e => todoIds.includes(e.id) ),
    getDoerAll: () => 'xxxxxx',
    add(name) {
      const d = new Doer(name)
      doers.push(d)
      return d
    },
  }
}

module.exports = doer
