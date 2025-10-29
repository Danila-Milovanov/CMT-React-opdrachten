import React, { useState } from "react";

function BookList () {
    const [books, setBooks] = useState([
        { id: 1, title: "Harry Potter And The Sorcerers Stone", author: "Joanne Rowling"},
        { id: 2, title: "Fantasia VI", author: "Geronimo Stilton"},
        { id: 3, title: "The Hunger Games", author: "Suzanne Collins"},
    ]);



    return (
        <div>
            <h1>Boekenlijst</h1>
            <ul>
                {books.map((book) => (
                    <li>
                        <strong>{book.title}</strong> - {book.author}
                    </li>
            ))}
            </ul>
        </div>
    );
};

export default BookList;