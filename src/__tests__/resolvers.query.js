/* eslint no-console: "off" */
const { graphql, buildSchema } = require('graphql')
const resolvers = require('../resolver')
const schema = require('../schema')

const executableSchema = buildSchema(schema)

describe('Todos', () => {
  describe('Query', () => {
    test('add a Todo and retrieves the Todo', async () => {
      const expectedTitle = 'abc'
      const beforeState = await graphql(executableSchema,
        'query { todos { todos { title } } }',
        resolvers.Query,
        { first: 0 })

      await graphql(executableSchema,
        'mutation { addTodo { title } }',
        resolvers.Mutation,
        { title: expectedTitle })

      const afterState = await graphql(executableSchema,
        'query { todos { todos { title } } }',
        resolvers.Query,
        { first: 0, offset: 1 })

      expect(beforeState.data.todos.todos.length).toBe(0)
      expect(afterState.data.todos.todos.length).toBe(1)
      expect(afterState.data.todos.todos[0].title).toBe(expectedTitle)
    })
    test('add five Todos and retrieve correct count of Todos', async () => {
      const expectedCount = 5
      const expectedCountB = 3
      const expectedCountC = 2
      const titles = Array.from(new Array(expectedCount)).map(() => Math.random())
      async function addTodo(s, t = 'None') {
        await graphql(s,
          'mutation { addTodo { title } }',
          resolvers.Mutation,
          { title: `${t}` })
      }

      await graphql(executableSchema,
        'mutation { clearTodoList }',
        resolvers.Mutation)

      const beforeState = await graphql(executableSchema,
        'query { todos { todos { title } } }',
        resolvers.Query,
        { first: 0, offset: 3 })

      await Promise.all(titles.map(t => addTodo(executableSchema, t)))
        .catch(e => console.log('error: ', e))

      const afterState = await graphql(executableSchema,
        'query { todos { todos { title } } }',
        resolvers.Query,
        { first: 0, offset: expectedCount })

      const afterStateB = await graphql(executableSchema,
        'query { todos { todos { title } } }',
        resolvers.Query,
        { first: 0, offset: expectedCountB })

      const afterStateC = await graphql(executableSchema,
        'query { todos { todos { title } } }',
        resolvers.Query,
        { first: 3, offset: 5 })

      expect(titles.length).toBe(expectedCount)
      expect(beforeState.data.todos.todos.length).toBe(0)
      expect(afterState.data.todos.todos.length).toBe(expectedCount)
      expect(afterStateB.data.todos.todos.length).toBe(expectedCountB)
      expect(afterStateC.data.todos.todos.length).toBe(expectedCountC)
    })

    test('retrieve expected Doer from Todo', async () => {
      const expectedName = 'abc'
      // clear
      await graphql(executableSchema,
        'mutation { clearTodoList }',
        resolvers.Mutation)
      // add doer
      await graphql(executableSchema,
        'mutation { addDoer { name }}',
        resolvers.Mutation,
        { name: expectedName })
      const doerA = await graphql(executableSchema,
        'query { doers { name, id } }',
        resolvers.Query)
      // add todo
      await graphql(executableSchema,
        'mutation { addTodo { title } }',
        resolvers.Mutation,
        { title: 'x' })
      const todoA = await graphql(executableSchema,
        'query { todos {todos { title } } }',
        resolvers.Query,
        { first: 0 })
      const todoWDoer = await graphql(executableSchema,
        'mutation { addTodoDoer { title, doers { name }} }',
        { addTodoDoer: resolvers.Mutation.addTodoDoer },
        { todoID: '0', doerID: '0' })

      expect(doerA.data.doers[0].name).toBe(expectedName)
      expect(todoA.data.todos.todos.length).toBe(1)

      expect(todoWDoer.data.addTodoDoer.doers[0].name)
        .toBe(expectedName)
    })
  })
})
