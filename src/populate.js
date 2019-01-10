const resolvers = require('./resolvers')

function populate() {
    resolvers.Mutation.b(null, { z: 'xxxxxx' })
}

module.exports = populate