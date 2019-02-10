const doer = require('./doer') // Doer
const todo = require('./todo')

const resolvers = {
  Query: {
    todos: todo.getTodos,
    doers: doer.getDoers,
    todo: todo.getTodo,
    doer: doer.getDoer,
  },
  Mutation: {
    addTodo:
      async (
        _,
        { title = 'none', description = 'none' }) => todo.add(title, description),
    addTodoDoer:
      async (
        prev,
        { todoID, doerID },
        context) => todo.addTodoDoer(prev, doerID, todoID, context),
    addDoer:
      async (
        _,
        { name = 'abc' }) => doer.addDoer(name),
    clearTodoList: todo.clearList,
    deleteTodo:
      async (
        _,
        { id }) => todo.deleteTodo(id),
  },
}

module.exports = resolvers
