const doer = require('./doer.js')

// todo
function Todo(title, description) {
  this.ID = null
  this.title = title
  this.description = description
}
const todos = []
function AddTodo(title = 'No title', description = 'No author') {
  const todo = new Todo(title, description)
  todos.push(todo)
  return todo
}
function getTodos(_, { first = 0 }) {
  return todos.slice(first)
}
const resolvers = {
  Query: {
    todos: getTodos,
    doers: doer.get,
  },
  Mutation: {
    addTodo:
      async (_, { title = 'none', description = 'none' }) => AddTodo(title, description),
    addDoer:
      async (_, { name = 'abc' }) => doer.add(name),
  },
}

module.exports = resolvers
