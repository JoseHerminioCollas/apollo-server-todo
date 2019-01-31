const doer = require('./doer')
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
    addDoer:
      async (
        _,
        { name = 'abc' }) => doer.add(name),
    clearTodoList: todo.clearList,
  },
}

module.exports = resolvers
