const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        todos: [Todo]    
        abc: String
    }
    type Mutation {
        a(z: String): Todo
        b(z: String): String
    }
    type Todo {
        title: String
        description: String
    }
    mutation AddTodo($type: String!) {
        addTodo(type: $type) {
        id
        type
        }
    }
`
module.exports = typeDefs
/*
  mutation ABC{
  b(z: "the next title")
}
{
  books {
    title
    author
  }
}
{
  abc
}
mutation {
  a {
    title
  }
}
mutation {
  b
}
*/
