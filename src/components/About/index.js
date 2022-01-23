import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      {/* <img src="assets/images/Daryll-Munoz-Selfie.jpg" alt="Daryll Munoz Selfie"> */}
      <div className="my-2">
        <p>
        Daryll is currently a business analyst based in the New York Metro area with experience in user-acceptance testing, automation testing, and the cloud.
        He graduated with a B.S. in Chemical Engineering with highest honors from Rutgers University and is currently enrolled in Rutgers Full Stack Coding Bootcamp.
        He aspires to be an effective full-stack developer proficient in current technologies. Outside of work, Daryll enjoys traveling, learning languages, playing instruments, and spending time with family and friends.
        </p>
      </div>
    </section>
  );
}

export default About;
