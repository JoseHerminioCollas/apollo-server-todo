const model = {todos: [{id: 3333333333, completed: true}]}
const doer = require('./doer')(model)
const todo = require('./todo')(model)

model.todos.push({id: 33, completed: true})

const resolvers = {
  Query: {
    todos: todo.get,
    doers: doer.get,
    doersTodos: doer.getTodos,
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
    deleteTodo:
      async (
        _,
        { id }) => todo.deleteTodo(id),
  },
}

module.exports = resolvers
