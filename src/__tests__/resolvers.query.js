/* eslint no-console: "off" */
const { graphql, buildSchema } = require('graphql')
const resolvers = require('../resolver')
const schema = require('../schema')

describe('Todo Schema and Database', () => {
  describe('Query', () => {
    it('returns an array of todos', async () => {
      // const res = await resolvers.Query.todos(null, {}, {})
      // expect(Array.isArray(res)).toEqual(true)
    })
    it('returns an array of doers', async () => {
      const res = await resolvers.Query.doers(null, {}, {})
      expect(Array.isArray(res)).toEqual(true)
    })
    it('adds a Todo and retrieves the Todo', async () => {
      const expectedTitle = 'abc'
      const schemaC = buildSchema(schema)
      const a = await graphql(schemaC,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0 })

      await graphql(schemaC,
        'mutation { addTodo { title } }',
        resolvers.Mutation,
        { title: expectedTitle })
      const d = await graphql(schemaC,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0 })

      expect(a.data.todos.length).toBe(0)
      expect(d.data.todos.length).toBe(1)
      expect(d.data.todos[0].title).toBe(expectedTitle)
    })
  })
})
