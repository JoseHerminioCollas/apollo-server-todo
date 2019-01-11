// todo
function Todo(title, description) {
  this.title = title
  this.description = description
}
const todos = []
function AddTodo(title = 'No title', description = 'No author') {
  const todo = new Todo(title, description)
  todos.push(todo)
  return todo
}

// doer
function Doer(name) {
  this.name = name
}
const Doers = {
  doers: [],
  add(name = 'No Name') {
    const doer = new Doer(name)
    this.doers.push(doer)
    return doer
  },
}
Doers.add('me')
const resolvers = {
  Query: {
    todos: () => todos,
    doers: () => Doers.doers,
    me: async () => Doer.doers[0],
  },
  Mutation: {
    addTodo:
      async (_, { title = 'none', description = 'none' }) => AddTodo(title, description),
    addDoer:
      async (_, { name = 'abc' }) => Doers.add(name),
  },
}

module.exports = resolvers
