const typeDefs = `
type Query {
    todos(first: Int, offset: Int): TodosResult
    doers(first: Int, offset: Int): [Doer]
}
type Mutation {
    addTodo(title: String description: String): Todo
    deleteTodo(id: Int): Boolean
    setTodoComplete(id: String): Todo
    setTodoContent(id: String, title: String, description: String): Todo
    clearTodoList: Boolean
    addDoer(name: String, todoIds: [Int]): Doer
    deleteDoer(id: String): Doer
}
type Todo {
    id: ID!
    title: String
    description: String
    completed: Boolean!
    doerIds: [Int]
    doers: [Doer]
}
type TodosResult {
    todos: [Todo]
    totalCount: Int
}
type Doer {
    id: ID!
    name: String
    todos: [Todo]
}
`
module.exports = typeDefs
