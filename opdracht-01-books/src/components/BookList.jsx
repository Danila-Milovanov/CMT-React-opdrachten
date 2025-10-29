import Book from "./Book";


function BookList(){
    return(
        <div className="book-list">
            <h2>Amazon Best Books</h2>
            <div className="books">
                <Book title="Harry Potter And The Sorcerers Stone" author="Joanne Rowling" image="./images/book-1.png" />
                <Book title="Fantasia VI" author="Geronimo Stilton" image="./images/book-2.png" />
                <Book title="The Hunger Games" author="Suzanne Collins" image="./images/book-3.png" />
            </div>
        </div>
    );
}


export default BookList;