import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [ResumeSelected, setResumeSelected] = useState(false);
  const [ContactSelected, setContactSelected] = useState(false);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);



  return (
    <div>
      <Nav        
        ResumeSelected={ResumeSelected}
        setResumeSelected={setResumeSelected}
        ContactSelected={ContactSelected}
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

        {!ContactSelected ? (
          <>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}

        {!ResumeSelected ? (
          <>
          </>
        ) : (
            <Resume></Resume>
          )}    

        </div>
      </main>
    </div>

  );
}

export default App;
