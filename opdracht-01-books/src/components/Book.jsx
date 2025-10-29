import React, {useState} from "react";

export default function Book({ title, author }) {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

    function verhoogTeller() {
        setAantalKeerGelezen(prev => prev + 1);
    }


    return (
        <article>
            <h2>{title}</h2>
            <h3>{author}</h3>


            <div>
                <button type="button" onClick={verhoogTeller}>
                    Keer gelezen: {aantalKeerGelezen}
                </button>
            </div>
        </article>
    );
};