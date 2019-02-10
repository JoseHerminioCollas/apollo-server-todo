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
const todo = (function createTodo() {
  const todos = []
  function add(title, description = ' - ') {
    const t = new Todo(todos.length, title, description)
    t.addDoer({ id: 111, name: 'doername' })
    todos.unshift(t)
    return todos[0]
  }
  const deleteTodo = (id) => {
    const tI = todos.findIndex(t => t.id === id)
    todos.splice(tI, 1)
    return true
  }
  function getTodo(_, { first = 0, offset = 2 }) {
    return {
      todos: todos.slice(first, first + offset),
      totalCount: todos.length,
    }
  }
  function clearList() {
    todos.splice(0)
    return true
  }
  async function addTodoDoer() {
  // async function addTodoDoer (_, todoID, doerID, context) {
    // console.log('di: ', todoID, doerID)
    // console.log('xx', context.rootValue)
    /*
      const doer = context.getDoer(doerID)
      const todo = get(id)
      todo.addDoer(doer)
    */
    // where do I get the doer from, if I just pass the ID????
    // const td = doers[doerID]
    // td.addDoer()
    return true
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
}()) // pass in shared data?

module.exports = todo
