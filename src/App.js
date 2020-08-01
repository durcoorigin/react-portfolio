import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);



  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        PortfolioSelected={PortfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        AboutSelected={AboutSelected}
        setAboutSelected={setAboutSelected}
        >
      </Nav>

      <main>
      <div>
        {!AboutSelected ? (
          <>
          </>
        ) : (
            <About></About>
          )}
        {!PortfolioSelected ? (
          <>
          </>
        ) : (
          <Portfolio></Portfolio>
          )}

        {!contactSelected ? (
          <>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}

        </div>
      </main>
    </div>

  );
}

export default App;
