function Todo(id, title, description) {
  this.id = id
  this.title = title
  this.description = description
  this.doers = []
}
Todo.prototype.addDoer = function addDoer(doer) {
  this.doers.push(doer)
  return doer
}
const createTodo = function createTodo(doer) {
  if (!doer) throw new Error('must supply doers object')
  const todos = []
  function add(title, description = ' - ') {
    const t = new Todo(todos.length, title, description)
    todos.unshift(t)
    return todos[0]
  }
  const deleteTodo = (id) => {
    const tI = todos.findIndex(t => t.id === id)
    todos.splice(tI, 1)
    return true
  }
  function getTodo() {
    return todos[0]
  }
  function clearList() {
    todos.splice(0)
    return true
  }
  async function addTodoDoer(todoID, doerID) {
    const t = getTodo(todoID)
    const d = doer.getDoer(doerID)
    t.addDoer(d)
    return t
  }
  function getTodos(_, { first = 0, offset = 2 }) {
    return {
      todos: todos.slice(first, first + offset),
      totalCount: todos.length,
    }
  }
  return {
    add,
    getTodo,
    getTodos,
    clearList,
    deleteTodo,
    addTodoDoer,
  }
} // pass in shared data?

module.exports = createTodo
