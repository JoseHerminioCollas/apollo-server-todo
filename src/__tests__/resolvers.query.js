const resolvers = require('../resolvers');

describe('[Query.todos]', () => {

  it('returns an array', async () => {
    const res = await resolvers.Query.books(null, {}, {});
    expect(Array.isArray(res)).toEqual(true);
  });

});
