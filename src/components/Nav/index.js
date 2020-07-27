import React from 'react';

function Nav() {

    return(
    <header>
        <h2>
            Short Designs
        </h2>
        <nav>
            <ul className="flex-row">
                <li>
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#resume">
                        Resume
                    </a>
                </li>

            </ul>
        </nav>
    </header>
    )
}

export default Nav;