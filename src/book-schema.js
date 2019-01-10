const { gql } = require('apollo-server');
const typeDefs = gql`
    type Query {
        books: [Book]    
        abc: String
    }
    type Mutation {
        a(z: String): Book
        b(z: String): String
    }
    type Book {
        title: String
        author: String
    }
    mutation AddBook($type: String!) {
        addBook(type: $type) {
        id
        type
        }
    }
`;
module.exports = typeDefs
/*
  mutation ABC{
  b(z: "the next title")
}
{
  books {
    title
    author
  }
}
{
  abc 
}
mutation {
  a {
    title
  }
}
mutation {
  b 
}
*/
