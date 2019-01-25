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
function getTodos(_, { first }) {
  return todos.slice(first)
}

function Doer(name) {
  this.name = name
}
const doer = (() => {
  const doers = [{ name: 'me' }]
  return {
    get: () => doers,
    add(name) {
      const d = new Doer(name)
      doers.push(d)
      return d
    },
  }
})()
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
