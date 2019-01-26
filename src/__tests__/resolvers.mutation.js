const resolvers = require('../resolver')

describe('[Mutation.addTodo]', () => {
  it('add a Todo and return the Todo', async () => {
    const expected = { title: 'title', description: 'description' }
    const res = await resolvers.Mutation.addTodo(
      null,
      expected,
    )
    expect(res.title).toEqual(expected.title)
  })
})
describe('[Mutation.addDoer]', () => {
  it('add a Doer and return the Doer', async () => {
    const expected = { name: 'Doer Name' }
    const result = await resolvers.Mutation.addDoer(
      null,
      expected,
    )
    expect(result.name).toEqual(expected.name)
  })
})
