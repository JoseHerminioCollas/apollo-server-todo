const resolvers = require('../resolvers')

describe('Todo Schema and Database', () => {
  describe('Query', () => {
    it('returns an array of todos', async () => {
      const res = await resolvers.Query.todos(null, {}, {})
      expect(Array.isArray(res)).toEqual(true)
    })
    it('returns an array of doers', async () => {
      const res = await resolvers.Query.doers(null, {}, {})
      expect(Array.isArray(res)).toEqual(true)
    })
  })
})
