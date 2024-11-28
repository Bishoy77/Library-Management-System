// import { BookList } from "./BookList";
// import { generateId, validateBook } from "./LibraryUtils";

// const library = new BookList();



// library.addBook({
//     id: generateId(),
//     title: "The Hobbit",
//     author: "bashbosh",
//     year: 1937,
//     category: "Fantasy",
//     isBorrowed: false,
//     borrowedBy: "",
// });

// library.addBook({
//     id: generateId(),
//     title: "The Lord of the Rings",
//     author: "bahboh",
//     year: 1954,
//     category: "Fantasy",
//     isBorrowed: false,
//     borrowedBy: "",
// });

// library.addBook({
//     id: generateId(),
//     title: "The Silmarillion",
//     author: "J.R.R. Tolkien",
//     year: 1977,
//     category: "Fantasy",
//     isBorrowed: false,
//     borrowedBy: "",
// });

// library.addBook({
//     id: generateId(),
//     title: "The Hobbit",
//     author: "thomayoso",
//     year: 1937,
//     category: "Fantasy",
//     isBorrowed: false,
//     borrowedBy: "",
// });

// library.addBook({
//     id: generateId(),
//     title: "The Lord of the Rings",
//     author: "gelgel",
//     year: 1954,
//         category: "Fantasy",
//     isBorrowed: true,
//     borrowedBy: "",
// });

// src/Index.ts
import { BookList } from './BookList';
import { generateId, validateBook } from './LibraryUtils';
import { Book } from './Book';

// Initialize the Library
const library = new BookList();

// Adding Books to the Library
const booksToAdd: Omit<Book, 'id'>[] = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isBorrowed: false, year: 1925, borrowedBy: "", category: "Fiction" },
    { title: "A Brief History of Time", author: "Stephen Hawking", isBorrowed: false, year: 1988, borrowedBy: "", category: "Science" },
    { title: "1984", author: "George Orwell", isBorrowed: false, year: 1949, borrowedBy: "", category: "Dystopian" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: false, year: 1960, borrowedBy: "", category: "Fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", isBorrowed: false, year: 1937, borrowedBy: "", category: "Fantasy" }
];

// Add books to the library after validation
booksToAdd.forEach(bookData => {
    const book = { ...bookData, id: generateId() };
    if (validateBook(book)) {
        library.addBook(book);
    }
});

// Search for a Book
const searchResults = library.searchBooks("Time");

searchResults.forEach(book => {
    console.log(book);
});

library.markAsBorrowed(1, "Sayed");
library.markAsBorrowed(5, "Alice");

library.markAsReturned(1);

library.removeBook(2);

library.printBooks();


console.log("Borrowed Books:");
const borrowedBooks = library.getBorrowedBooks();
borrowedBooks.forEach(book => {
    console.log(book);
});
