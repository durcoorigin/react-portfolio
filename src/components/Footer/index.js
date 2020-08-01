import React from 'react';
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import stackoverflow from "../../assets/icons/stackoverflow.png";



function Footer() {
    
    return(
        <footer className="my-1">
            <a href="https://www.linkedin.com/in/christopher-short-7852581a2/">
                <img src={linkedin} alt=""></img>
            </a>
            <a href="https://github.com/durcoorigin/">
                <img src={github} alt=""></img>
            </a>
            <a href="https://stackoverflow.com/users/12909231/chris-short">
                <img src={stackoverflow} alt=""></img>
            </a>
        </footer>
    )
}

export default Footer;