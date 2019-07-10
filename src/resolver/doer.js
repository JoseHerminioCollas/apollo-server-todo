function Doer(name) {
  this.name = name
}
const doer = (model) => {
  const doers = []
  const todoIds = [0, 1]
  doers.push({ name: 'you' }, { name: 'me' })
  function getOwnTodos() {
    return model.todos.filter(e => todoIds.includes(e.id))
  }
  return {
    get: () => doers,
    getTodos: () => getOwnTodos(),
    getDoerAll: () => ({ name: 'xxx', todos: getOwnTodos() }),
    add(name) {
      const d = new Doer(name)
      doers.push(d)
      return d
    },
  }
}

module.exports = doer
