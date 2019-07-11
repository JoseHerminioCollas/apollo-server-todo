function Doer(name, todos = [], todoIds = []) {
  this.name = name
  this.todos = todos
  this.todoIds = todoIds
}
const doer = (model) => {
  const doers = []

  doers.push({ name: 'you' , todos: [model.todos[0]]}, { name: 'me', todos: [] })

  function getOwnTodos(doerId) {
    return model.todos.filter(e => 1 === e.id)
  }
  return {
    get: () => doers,
    add(name, todoIds) {
      // get the todos from the model and populate
      const todosArg = []
      for (let i = 0; i < todoIds.length; i++) {
        const a = model.todos.filter(td => todoIds[i] === td.id)
        todosArg.push(...a)
      }
      const d = new Doer(name, todosArg, todoIds)
      doers.push(d)
      return d
    },
  }
}

module.exports = doer
