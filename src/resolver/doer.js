function Doer(name) {
  this.name = name
  this.todos = []
}
const doer = (model) => {
  const doers = []

  doers.push({ name: 'you' , todos: [model.todos[0]]}, { name: 'me', todos: [] })

  function getOwnTodos(doerId) {
    return model.todos.filter(e => 1 === e.id)
  }
  return {
    get: () => doers,
    getTodos: () => getOwnTodos(),
    add(name) {
      const d = new Doer(name)
      doers.push(d)
      return d
    },
  }
}

module.exports = doer
