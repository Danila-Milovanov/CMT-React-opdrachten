const Animal = ({ animal, onShowDetail}) => {
    return (
        <section>
            <h2>{animal.name}</h2>
            <p>{animal.imageUrl}</p>
            <p>{animal.description}</p>
            <button onClick={() => onShowDetail(product.id)}>
                Meer info
            </button>
        </section>
    );
};