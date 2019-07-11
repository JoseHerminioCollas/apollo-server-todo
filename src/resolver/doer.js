function Doer(name, todos = [], todoIds = [], id) {
  this.id = id
  this.name = name
  this.todos = todos
  this.todoIds = todoIds
}
let count = 0
const doer = (model) => {
  function getTodo(todoId) {
    return  model.todos.filter(td => todoId === td.id)[0]
  }

  return {
    get: () => model.doers,
    add(name, todoIds) {
      // get the todos from the model and populate
      const todosArg = []
      for (let i = 0; i < todoIds.length; i++) {
        const todo = getTodo(todoIds[i])
        // todo.doerIds.push(todoIds[i])
        todosArg.push(toddo)
      }
      const doer = new Doer(name, todosArg, todoIds,  count++)
      model.doers.push(doer)
      return doer
    },
  }
}

module.exports = doer
