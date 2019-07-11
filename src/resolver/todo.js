function Todo(id, title, description) {
  this.id = id
  this.title = title
  this.description = description
  this.doerIds = [1]
  this.doers = []
}
const todo = (model) => {
  function add(title, description = ' - ') {
    model.todos.unshift(new Todo(model.todos.length, title, description))
    return model.todos[0]
  }
  const deleteTodo = (id) => {
    const tI = model.todos.findIndex(t => t.id === id)
    model.todos.splice(tI, 1)
    return true
  }
  function get(_, { first = 0, offset = 20 }) {
    return {
      todos: model.todos.slice(first, first + offset),
      totalCount: model.todos.length,
    }
  }
  function clearList() {
    model.todos.splice(0)
    return true
  }
  return {
    add,
    get,
    clearList,
    deleteTodo,
  }
}

module.exports = todo
