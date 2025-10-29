function Book ({ title, author, image }) {
    return (
        <div className="Book">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p3>{author}</p3>
        </div>
    );
}

export default Book;
