import { Book } from "./Book";


let currentId = 0;

// Generate a unique ID for a book
function generateId(): number {
    currentId += 1;
    return currentId;
}
function validateBook(book: Book): boolean {
    return book.title.length > 0 && book.author.length > 0 && book.year > 0 && book.category.length > 0;
}
export { generateId, validateBook };