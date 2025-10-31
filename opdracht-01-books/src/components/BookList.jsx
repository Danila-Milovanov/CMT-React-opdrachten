import React, { useState } from "react";
import BookCounter from "./BookCounter";
import Book from "./Book";

function BookList () {
       const [books, setBooks] = useState([
        { id: 1, title: "Harry Potter And The Sorcerers Stone", author: "Joanne Rowling"},
        { id: 2, title: "Fantasia VI", author: "Geronimo Stilton"},
        { id: 3, title: "The Hunger Games", author: "Suzanne Collins"},
    ]);
    return (
        <section>
        <BookCounter aantal={books.length} />

        {books.map((book) => (
           <Book key={book.id} title={book.title} author={book.author}/>
        ))}
        </section>
    );
}

export default BookList;