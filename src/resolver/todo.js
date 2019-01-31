function Todo(title, description) {
  this.ID = null
  this.title = title
  this.description = description
}
const todo = (function createTodo() {
  const todos = []
  function add(title, description = ' - ') {
    todos.push(new Todo(title, description))
    return todos[todos.length - 1]
  }
  function get(_, { first = 0 }) {
    return todos.slice(first)
  }
  function clearList() {
    todos.splice(0)
    return true
  }
  return {
    add,
    get,
    clearList,
  }
}())

module.exports = todo
