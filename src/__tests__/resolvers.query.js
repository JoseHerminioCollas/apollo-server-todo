const resolvers = require('../resolvers')

describe('[Query.todos]', () => {
  it('returns an array', async () => {
    const res = await resolvers.Query.todos(null, {}, {})
    expect(Array.isArray(res)).toEqual(true)
  })
})
