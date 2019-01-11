const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        todos: [Todo]    
        doers: [Doer]
        me: Doer
    }
    type Mutation {
        addTodo(title: String description: String): Todo
        addDoer(name: String): Doer
    }
    type Todo {
        title: String
        description: String
    }
    type Doer {
      name: String
    }
`
module.exports = typeDefs
