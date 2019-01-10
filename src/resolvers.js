function Book(title, author) {
    this.title = title
    this.author = author
}
const books = [
    {
        title: 'Abc',
        author: 'x yZ',
    },
];
function addBook(title = "No title", author = "No author") {
    const book = new Book(title, author)
    books.push(book)
}

const resolvers = {
    Query: {
        books: () => books,
        abc: () => 'abcxxxx'
    },
    Mutation: {
        a: () => books[1],
        b:  (_, {z = 'abc'}) => {
            console.log(z)
            addBook(z)
            return books[books.length - 1].title
        }
    }
};

module.exports = resolvers