function Todo(title, description) {
  this.title = title
  this.description = description
}
const todos = []

function Doer(name) {
  this.name = name
}
const doers = []

function addTodo(title = 'No title', description = 'No author') {
  const todo = new Todo(title, description)
  todos.push(todo)
}
const me = new Doer('me')

const resolvers = {
  Query: {
    todos: () => todos,
    doers: () => doers,
    me: async (_, __, { z }) => me + z,
  },
  Mutation: {
    addTodo: async (_, { z = 'abc' }) => {
      addTodo(z)
      return todos[todos.length - 1].title
    },
  },
}

module.exports = resolvers
