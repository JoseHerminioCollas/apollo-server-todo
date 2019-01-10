const resolvers = require('../resolvers')

describe('[Mutation.addTodo]', () => {
  it('returns true if booking succeeds', async () => {
    const res = await resolvers.Mutation.addTodo(
      null,
      { z: 'xxx' },
    )
    expect(res).toEqual('xxx')
  })
})
