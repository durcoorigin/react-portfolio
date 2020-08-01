import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>

      <main>
      <div>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
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
