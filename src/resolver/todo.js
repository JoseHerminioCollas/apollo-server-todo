function Todo(id, title, description) {
  this.id = id
  this.title = title
  this.description = description
  this.doers = []
}
Todo.prototype.addDoer = (doer) => {
  this.doers.push(doer)
  return doer
}
const todo = (function createTodo() {
  const todos = []
  function add(title, description = ' - ') {
    todos.unshift(new Todo(todos.length, title, description))
    return todos[0]
  }
  const deleteTodo = (id) => {
    const tI = todos.findIndex(t => t.id === id)
    todos.splice(tI, 1)
    return true
  }
  function get(_, { first = 0, offset = 2 }) {
    return {
      todos: todos.slice(first, first + offset),
      totalCount: todos.length,
    }
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
