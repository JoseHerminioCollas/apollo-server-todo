const model = {todos: []}
const doer = require('./doer')(model)
const todo = require('./todo')(model)

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
    addDoer:
      async (
        _,
        { name = 'abc', todoIds } ) => doer.add(name, todoIds),
    clearTodoList: todo.clearList,
    deleteTodo:
      async (
        _,
        { id }) => todo.deleteTodo(id),
  },
}

module.exports = resolvers
