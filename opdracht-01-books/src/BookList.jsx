import Book from "./Book";


function BookList(){
    return(
        <div className="book-list">
            <h2>Amazon Best Books</h2>
            <div className="books">
                <Book title="Harry Potter And The Sorcerers Stone" author="Joanne Rowling" image="//opdracht-01-books/public/images/book-1.pngx`" />
                <Book title="Fantasia VI" author="Geronimo Stilton" image="//opdracht-01-books/public/images/book-2.png" />
                <Book title="The Hunger Games" author="Suzanne Collins" image="//opdracht-01-books/public/images/book-3.png" />
            </div>
        </div>
    );
}


export default BookList;