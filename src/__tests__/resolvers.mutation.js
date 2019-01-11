const resolvers = require('../resolvers')

describe('[Mutation.addTodo]', () => {
  it('add a Todo and return the Todo', async () => {
    const res = await resolvers.Mutation.addTodo(
      null,
      { z: 'xxx' },
    )
    expect(res).toEqual('xxx')
  })
})
describe('[Mutation.addDoer]', () => {
  it('add a Doer and return the Doer', async () => {
    const expected = { name: 'Doer Name' }
    const result = await resolvers.Mutation.addDoer(
      null,
      expected,
    )
    expect(result).toEqual(expected)
  })
})
