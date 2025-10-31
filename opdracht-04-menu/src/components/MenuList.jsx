import React, {useState, useEffect} from "react";
import menu from '../data';
import Menu from "./Menu";

const MenuList = () => {
    const [gerechten, setGerechten] = useState(menu);


    return (
        <section className="menu-container">
            {gerechten.map((gerecht) => (
                <Menu key={gerecht.id} {...gerecht} />
            ))}
        </section>
    );
};



export default MenuList;
