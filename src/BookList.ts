import {Book} from "./Book"


export class BookList {
    private books: Book[]= [];
    addBook(book:Book):void {
        this.books.push(book);
    }
    removeBook(id: number):void{
        this.books = this.books.filter((element)=>{
                        return element.id != id;
                    })
        
    }
    searchBooks(query: string):Book[]{
        let searchedBooks: Book[] = this.books.filter((book:Book):boolean => {
            return book.title === query || book.author === query;
        })
        
        return searchedBooks;
    }
    markAsBorrowed(id: number, borrower: string): void{
        this.books = this.books.map((book:Book):Book => {
            if(book.id === id){
                book.isBorrowed = true;
                book.borrowedBy = borrower;
                return book;
            }
            return book;
        })
    }
    markAsReturned(id: number): void{
        this.books = this.books.map((book:Book):Book => {
            if(book.id === id){
                book.isBorrowed = false;
                book.borrowedBy = "";
                return book;
            }
            return book;
        })
    }
    getBorrowedBooks(): Book[]{
        let borrowedBooks: Book[] = this.books.filter((book:Book):boolean => {
            return book.isBorrowed;
        })
        return borrowedBooks;
    }
    printBooks(): void{
        this.books.forEach((book:Book):void => {
            console.log(book);
        })
    }
}
// src/BookList.ts