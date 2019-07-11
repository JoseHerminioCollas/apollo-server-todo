function Doer(name, todos = [], todoIds = []) {
  this.name = name
  this.todos = todos
  this.todoIds = todoIds
}
const doer = (model) => {
  function getTodo(todoId) {
    return  model.todos.filter(td => todoId === td.id)
  }

  return {
    get: () => model.doers,
    add(name, todoIds) {
      // get the todos from the model and populate
      const todosArg = []
      for (let i = 0; i < todoIds.length; i++) {
        todosArg.push(...getTodo(todoIds[i]))
      }
      const doer = new Doer(name, todosArg, todoIds)
      model.doers.push(doer)
      return doer
    },
  }
}

module.exports = doer
