const { gql } = require('apollo-server')

const typeDefs = gql`
type Query {
    todos(first: Int): [Todo]    
    doers: [Doer]
    allTodos(
        first: Int,
        offset: Int
    ): TodosResult
    me: Doer
}
type Mutation {
    addTodo(title: String description: String): Todo
    addDoer(name: String): Doer
}
type Todo {
    id: ID!
    title: String
    description: String
    completed: Boolean!
}
type TodosResult {
    todos: [Todo]
    totalCount: Int
}
type Doer {
    name: String
}
`
module.exports = typeDefs
