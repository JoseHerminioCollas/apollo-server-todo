/* eslint no-console: "off" */
const { graphql, buildSchema } = require('graphql')
const resolvers = require('../resolver')
const schema = require('../schema')

const executableSchema = buildSchema(schema)

describe('Doer', () => {
  test('doer is added', async () => {
    const args = { name: 'abc' }
    const d = await graphql(executableSchema,
      'mutation A($name: String!){ addDoer(name: $name) { name }}',
      resolvers.Mutation,
      args, // passed as variables // context
      args) // passed as parent // variables
    const doerA = await graphql(executableSchema,
      'query { doers { name, id } }',
      resolvers.Query)

    expect(d.data.addDoer.name).toBe(args.name)
    expect(doerA.data.doers[0].name).toBe(args.name)
  })
})
