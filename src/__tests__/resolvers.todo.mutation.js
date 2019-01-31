/* eslint no-console: "off" */
const { graphql, buildSchema } = require('graphql')
const resolvers = require('../resolver')
const schema = require('../schema')

const executableSchema = buildSchema(schema)

describe('Todos', () => {
  describe('Mutation', () => {
    test('add a Todo', async () => {
      const beforeState = await graphql(executableSchema,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0 })

      await graphql(executableSchema,
        'mutation { addTodo { title } }',
        resolvers.Mutation,
        { title: 'xxxx' })

      const afterState = await graphql(executableSchema,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0, offset: 1 })

      expect(beforeState.data.todos.length).toBe(0)
      expect(afterState.data.todos.length).toBe(1)
    })
    test('delete a Todo', async () => {
      await graphql(executableSchema,
        'mutation { clearTodoList }',
        resolvers.Mutation)

      await graphql(executableSchema,
        'mutation { addTodo { title } }',
        resolvers.Mutation,
        { title: 'aaa', description: 'ddd' })

      const beforeState = await graphql(executableSchema,
        'query { todos { title, id } }',
        resolvers.Query,
        { first: 0, offset: 1 })
      await graphql(executableSchema,
        'mutation { deleteTodo }',
        resolvers.Mutation,
        { id: 0 })

      const afterState = await graphql(executableSchema,
        'query { todos { title, id } }',
        resolvers.Query,
        { first: 0, offset: 1 })

      expect(beforeState.data.todos.length).toBe(1)
      expect(afterState.data.todos.length).toBe(0)
    })
    test('delete all Todos', async () => {
      await graphql(executableSchema,
        'mutation { clearTodoList }',
        resolvers.Mutation)

      await graphql(executableSchema,
        'mutation { addTodo { title } }',
        resolvers.Mutation,
        { title: 'xxxx' })

      const beforeState = await graphql(executableSchema,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0, offset: 1 })

      await graphql(executableSchema,
        'mutation { clearTodoList }',
        resolvers.Mutation)

      const afterState = await graphql(executableSchema,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0, offset: 1 })

      expect(beforeState.data.todos.length).toBe(1)
      expect(afterState.data.todos.length).toBe(0)
    })
  })
})
