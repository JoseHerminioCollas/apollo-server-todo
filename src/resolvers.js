// todo
function Todo(title, description) {
  this.title = title
  this.description = description
}
const todos = []
function AddTodo(title = 'No title', description = 'No author') {
  const todo = new Todo(title, description)
  todos.push(todo)
}

// doer
function Doer(name) {
  this.name = name
}
const Doers = {
  doers: [new Doer('me')],
  add(name = 'No Name') {
    this.doers.push(new Doer(name))
    return this.doers[this.doers.length - 1]
  },
}

const resolvers = {
  Query: {
    todos: () => todos,
    doers: () => Doers.doers,
    me: async () => Doer.doers[0],
  },
  Mutation: {
    addTodo: async (_, { z = 'abc' }) => {
      AddTodo(z)
      return todos[todos.length - 1].title
    },
    addDoer:
      async (_, { name = 'abc' }) => Doers.add(name),
  },
}

module.exports = resolvers
