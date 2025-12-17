import React, { useState } from "react";
import BookCounter from "./BookCounter";
import Book from "./Book";

function BookList() {
    const [books] = useState([
        { id: 1, title: "Harry Potter And The Sorcerers Stone", author: "Joanne Rowling" },
        { id: 2, title: "Fantasia VI", author: "Geronimo Stilton" },
        { id: 3, title: "The Hunger Games", author: "Suzanne Collins" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section>
            <input
                type="text"
                placeholder="Zoek een boek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
            />

            
            <BookCounter aantal={filteredBooks.length} />

            {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                    <Book key={book.id} title={book.title} author={book.author} />
                ))
            ) : (
                <p>Geen boeken gevonden.</p>
            )}
        </section>
    );
}

export default BookList;
