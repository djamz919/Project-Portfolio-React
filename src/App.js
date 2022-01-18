import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Project';
import Skills from './components/Skill';
import ContactForm from './components/Contact';

function App() {

  const [aboutMeSelected, setAboutMeSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [skillsSelected, setSkillsSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        aboutMeSelected={aboutMeSelected}
        setAboutMeSelected={setAboutMeSelected}
        projectsSelected = {projectsSelected}
        setProjectsSelected = {setProjectsSelected}
        skillsSelected = {skillsSelected}
        setSkillsSelected = {setSkillsSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {() => {
          if (aboutMeSelected && !projectsSelected && !skillsSelected && !contactSelected) {
            return (<About></About>)
          } else if (!aboutMeSelected && projectsSelected && !skillsSelected && !contactSelected) {
            return (<Projects></Projects>)
          } else if (!aboutMeSelected && !projectsSelected && skillsSelected && !contactSelected) {
            return (<Skills></Skills>)
          } else if (!aboutMeSelected && !projectsSelected && !skillsSelected && contactSelected) {
            return (<ContactForm></ContactForm>)
          } else {
            return (<About></About>)
          }
        }

        }
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
