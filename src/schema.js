const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        todos: [Todo]    
        doers: [Doer]
        me: Doer
    }
    type Mutation {
        addTodo(z: String): String
    }
    type Todo {
        title: String
        description: String
    }
    type Doer {
      name: String
    }
    mutation AddTodo($type: String!) {
        addTodo(type: $type) {
        id
        type
        }
    }
`
module.exports = typeDefs
