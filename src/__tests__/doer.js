/* eslint no-console: "off" */
const { graphql, buildSchema } = require('graphql')
const resolvers = require('../resolver')
const schema = require('../schema')

const executableSchema = buildSchema(schema)

describe('Doer', () => {
  test('doer is added', async () => {
    const expectedName = 'abc'
    const d = await graphql(executableSchema,
      'mutation A($name: String!){ addDoer(name: $name) { name }}',
      resolvers.Mutation,
      {},
      { name: expectedName })
    const doerA = await graphql(executableSchema,
      'query { doers { name, id } }',
      resolvers.Query)

    expect(d.data.addDoer.name).toBe(expectedName)
    expect(doerA.data.doers[0].name).toBe(expectedName)
  })
})
