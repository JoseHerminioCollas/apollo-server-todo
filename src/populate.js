const resolvers = require('./resolvers')

function populate() {
  resolvers.Mutation.addTodo(null, { z: 'xxxxxx' })
}

module.exports = populate
