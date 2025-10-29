import React, { useState } from "react";
import BookCounter from "./BookCounter";

function BookList ({books}) {
    return (
        <section>
        <BookCounter aantal={books.length} />

        {books.map((book) => (
            <p key={book.id}>{book.title}</p>
        ))}
        </section>
    );
}

export default BookList;