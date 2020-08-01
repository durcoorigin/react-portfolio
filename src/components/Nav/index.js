import React from 'react';

function Nav(props) {

    const {
        contactSelected,
        setContactSelected
      } = props;

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
                    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About Me
                    </a>
                </li>
                <li className={`mx-1 ${!contactSelected && `navActive`}`}>
                    <a href="#porfolio">
                    <span onClick={() => setContactSelected(false)}>Porfolio</span>
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <a href="#contact">
                    <span onClick={() => setContactSelected(true)}>Contact</span>
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