/* eslint no-console: "off" */
const { graphql, buildSchema } = require('graphql')
const resolvers = require('../resolver')
const schema = require('../schema')

describe('Todos', () => {
  describe('Add and Retrieve Todos', () => {
    test('add a Todo and retrieves the Todo', async () => {
      const expectedTitle = 'abc'
      const executablechema = buildSchema(schema)
      const beforeState = await graphql(executablechema,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0 })

      await graphql(executablechema,
        'mutation { addTodo { title } }',
        resolvers.Mutation,
        { title: expectedTitle })

      const afterState = await graphql(executablechema,
        'query { todos { title } }',
        resolvers.Query,
        { first: 0 })

      expect(beforeState.data.todos.length).toBe(0)
      expect(afterState.data.todos.length).toBe(1)
      expect(afterState.data.todos[0].title).toBe(expectedTitle)
    })
    test('add five Todos and retrieve correct count of Todos', async () => {

    })
  })
})
/*
add todos
add 5 todos
0 5
4 5
*/
