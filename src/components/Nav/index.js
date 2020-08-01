import React from 'react';



function Nav(props) {

    const {
        ResumeSelected,
        setResumeSelected,        
        ContactSelected,
        setContactSelected,
        PortfolioSelected,
        setPortfolioSelected,
        AboutSelected,
        setAboutSelected
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
                <li className={`mx-1 ${AboutSelected && `navActive`}`}>
                    <a href="#about">
                        <span onClick={() => {
                            setAboutSelected(true); 
                            setContactSelected(false); 
                            setPortfolioSelected(false);
                            setResumeSelected(false)
                            }} 
                        >
                            About Me
                        </span>
                    </a>
                </li>
                <li className={`mx-1 ${PortfolioSelected && `navActive`}`}>
                    <a href="#porfolio">
                        <span onClick={() => {
                            setAboutSelected(false); 
                            setContactSelected(false); 
                            setPortfolioSelected(true);
                            setResumeSelected(false)
                            }}
                        >
                            Portfolio
                        </span>
                    </a>
                </li>
                <li className={`mx-2 ${ContactSelected && 'navActive'}`}>
                    <a href="#contact">
                        <span onClick={() => {
                            setAboutSelected(false); 
                            setContactSelected(true); 
                            setPortfolioSelected(false);
                            setResumeSelected(false)
                            }}
                        >
                            Contact
                        </span>
                    </a>
                </li>
                <li className={`mx-2 ${ResumeSelected && 'navActive'}`}>
                    <a href="#resume">
                        <span onClick={() => {
                            setAboutSelected(false); 
                            setContactSelected(false); 
                            setPortfolioSelected(false);
                            setResumeSelected(true)
                            }}
                        >
                            Resume
                        </span>
                    </a>
                </li>

            </ul>
        </nav>
    </header>
    )
}

export default Nav;