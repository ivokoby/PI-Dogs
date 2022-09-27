import React from "react";
import { Link } from "react-router-dom";
import "./menu.css"
import github from '../../img/github.gif'
import linkedin from '../../img/linkedin.gif'

const Menu = () => {
    return (
        <div className="carga">
            <Link to="/Home">
                <button className="button">
                    DOGS
                </button>
            </Link>
            <div className="logos">
                <p class="subtitle">BY IVOKOBY</p>
                <a href="https://www.linkedin.com/in/ivan-kobyla%C3%B1sky-2126b8238/" target="_blank" rel="noreferrer">
                    <img className="icons" src={linkedin} alt="L"/>
                </a>
                <a href="https://github.com/ivokoby" target="_blank" rel="noreferrer">
                    <img className="icons" src={github} alt="L"/>
                </a>
            </div>
        </div>
    )
}

export default Menu;