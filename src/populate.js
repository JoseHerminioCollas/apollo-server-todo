const resolvers = require('./resolver')

function populate() {
  resolvers.Mutation.addTodo(null, { title: 'aaaaa' })
  resolvers.Mutation.addTodo(null, { title: 'bbbb' })
  for (let i = 0; i < 10; i += 1) {
    const t = `title ${i}`
    resolvers.Mutation.addTodo(null, { title: t })
    //    console.log(i)
  }
}

module.exports = populate
