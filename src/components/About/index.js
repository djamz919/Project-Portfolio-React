import React from 'react';
import selfieImage from '../../assets/images/Daryll-Munoz-Selfie.jpg';

function About() {
  return (
    <section id="About-Me" class="aboutme">
      <img src={selfieImage} alt="Daryll Munoz Selfie"/>
        <div class="aboutmecontainer">
          <h2 class="section-title primary-border">
            About Me
          </h2>
          <div class="text">
            <p>
              Daryll is currently a Visualization and Interaction Science Consultant based in the New York Metro area with experience in
              project management, quality assurance, user-acceptance testing, automation testing, and the cloud. He is currently staffed as a QA Engineer
              at one of the nation's largest telecommunication companies in their customer experience domain.
            </p>
            <p>
              He graduated with a B.S. in Chemical Engineering with highest honors from Rutgers University and is
              currently enrolled in Rutgers Full Stack Coding Bootcamp.
            </p>
            <p>
              He aspires to be an effective full-stack developer proficient in current technologies.
              Outside of work, Daryll enjoys traveling, learning languages, playing instruments, and spending time
              with family and friends.
            </p>
          </div>
        </div>
    </section>
  );
}

export default About;
