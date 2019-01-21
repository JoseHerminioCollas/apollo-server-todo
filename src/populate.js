const resolvers = require('./resolvers')

function populate() {
  resolvers.Mutation.addTodo(null, { title: 'aaa' })
  resolvers.Mutation.addTodo(null, { title: 'bbbb' })
}

module.exports = populate
