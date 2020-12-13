import React from "react";



function Nav() {
    return (
        <nav>
        <h3>Logo</h3>
        <ul className="nav-links ">
        <li><a href="/components/form">Adicione ítens</a></li>
        <li><a href="/components/todolist">Lista</a></li>

            </ul>
        </nav>
    );
}

export default Nav;