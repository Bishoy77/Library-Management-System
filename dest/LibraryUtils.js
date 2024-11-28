"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
exports.validateBook = validateBook;
let currentId = 0;
// Generate a unique ID for a book
function generateId() {
    currentId += 1;
    return currentId;
}
function validateBook(book) {
    return book.title.length > 0 && book.author.length > 0 && book.year > 0 && book.category.length > 0;
}
