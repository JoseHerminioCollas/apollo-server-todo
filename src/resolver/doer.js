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
      console.log(todoIds)
      // get the todos from the model and populate
      const d = new Doer(name, null, todoIds)
      doers.push(d)
      return d
    },
  }
}

module.exports = doer
