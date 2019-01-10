function Todo(title, description) {
  this.title = title
  this.description = description
}
const todos = []

function addTodo(title = 'No title', description = 'No author') {
  const todo = new Todo(title, description)
  todos.push(todo)
}

const resolvers = {
  Query: {
    todos: () => todos,
    abc: () => 'abcxxxx',
  },
  Mutation: {
    a: () => todos[1],
    b: (_, { z = 'abc' }) => {
      addTodo(z)
      return todos[todos.length - 1].title
    },
  },
}

module.exports = resolvers
