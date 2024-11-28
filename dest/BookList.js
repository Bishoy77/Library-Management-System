"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookList = void 0;
class BookList {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        this.books = this.books.filter((element) => {
            return element.id != id;
        });
    }
    searchBooks(query) {
        let searchedBooks = this.books.filter((book) => {
            return book.title === query || book.author === query;
        });
        return searchedBooks;
    }
    markAsBorrowed(id, borrower) {
        this.books = this.books.map((book) => {
            if (book.id === id) {
                book.isBorrowed = true;
                book.borrowedBy = borrower;
                return book;
            }
            return book;
        });
    }
    markAsReturned(id) {
        this.books = this.books.map((book) => {
            if (book.id === id) {
                book.isBorrowed = false;
                book.borrowedBy = "";
                return book;
            }
            return book;
        });
    }
    getBorrowedBooks() {
        let borrowedBooks = this.books.filter((book) => {
            return book.isBorrowed;
        });
        return borrowedBooks;
    }
    printBooks() {
        this.books.forEach((book) => {
            console.log(book);
        });
    }
}
exports.BookList = BookList;
// src/BookList.ts
