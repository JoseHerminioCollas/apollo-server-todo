const doer = require('./doer') // Doer
const todo = require('./todo')

const resolvers = {
  Query: {
    todos: todo.get,
    doers: doer.get,
  },
  Mutation: {
    addTodo:
      async (
        _,
        { title = 'none', description = 'none' }) => todo.add(title, description),
    addTodoDoer: async () => doer.get()[0],
    addDoer:
      async (
        _,
        { name = 'abc' }) => doer.add(name),
    clearTodoList: todo.clearList,
    deleteTodo:
      async (
        _,
        { id }) => todo.deleteTodo(id),
  },
}

module.exports = resolvers
