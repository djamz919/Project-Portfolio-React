import React, { useState } from 'react';
import Nav from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
// import Header from './components/Header';
// import Project from './components/Project';
// Import Skill from './components/Skill';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: 'projects', description: 'display of projects' },
    { name: 'skills', descriptions: 'list of credentials and skills'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
