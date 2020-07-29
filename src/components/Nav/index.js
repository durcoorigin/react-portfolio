import React from 'react';

function Nav() {

    return(
    <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
                Chris Short
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li>
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#porfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact Info
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