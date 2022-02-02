import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skill';
import ContactForm from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

function App() {

  const [aboutMeSelected, setAboutMeSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [skillsSelected, setSkillsSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        setAboutMeSelected={setAboutMeSelected}
        setProjectsSelected = {setProjectsSelected}
        setSkillsSelected = {setSkillsSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        <Hero></Hero>
        {(() => {
          if (aboutMeSelected && !projectsSelected && !skillsSelected && !contactSelected) {
            console.log(aboutMeSelected + ' ' + projectsSelected + ' ' + skillsSelected + ' ' + contactSelected);
            return (<About></About>)
          } else if (!aboutMeSelected && projectsSelected && !skillsSelected && !contactSelected) {
            return (<Portfolio></Portfolio>)
          } else if (!aboutMeSelected && !projectsSelected && skillsSelected && !contactSelected) {
            return (<Skills></Skills>)
          } else if (!aboutMeSelected && !projectsSelected && !skillsSelected && contactSelected) {
            return (<ContactForm></ContactForm>)
          } else {
            return (<About></About>)
          }
        })()}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
