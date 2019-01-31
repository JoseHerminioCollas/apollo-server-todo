function Todo(id, title, description) {
  this.id = id
  this.title = title
  this.description = description
}
const todo = (function createTodo() {
  const todos = []
  function add(title, description = ' - ') {
    todos.push(new Todo(todos.length, title, description))
    return todos[todos.length - 1]
  }
  const deleteTodo = (id) => {
    const tI = todos.findIndex(t => t.id === id)
    todos.splice(tI, 1)
    return true
  }
  function get(_, { first = 0, offset = 0 }) {
    return todos.slice(first, first + offset)
  }
  function clearList() {
    todos.splice(0)
    return true
  }
  return {
    add,
    get,
    clearList,
    deleteTodo,
  }
}())

module.exports = todo
