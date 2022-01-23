import React from 'react';

function Skills() {
    return (
        <div>
            <section id="Credentials" class="credentials">
                <h2 class="section-title primary-border">
                    Credentials
                </h2>

                <div class="credentials-content">
                    <div class="education">
                        <h3>Education</h3>
                        <div class="secondary-border">
                            <h4>Rutgers Coding Bootcamp</h4>
                            <p class="date">Feb 2022</p>
                            <p class="subcontent">Full Stack Web Development</p>
                        </div>
                        <div>
                            <h4>Rutgers University - New Brunswick</h4>
                            <p class="date">May 2019</p>
                            <p class="subcontent">B.S. Chemical Engineering</p>
                        </div>
                    </div>

                    <div class="certifications">
                        <h3>Certifications</h3>
                        <a target="_blank" rel="noreferrer"
                            href="https://www.credly.com/badges/81acb89a-269f-41a0-afb3-b630dcd3b548?source=linked_in_profile">
                            <div class="secondary-border">
                                <h4>AWS Certified Cloud Practitioner</h4>
                                <p class="date">Apr 2021</p>
                                <p class="subcontent">Amazon Web Services (AWS)</p>
                            </div>
                        </a>
                        <a target="_blank" rel="noreferrer"
                            href="https://execedcertificate.kellogg.northwestern.edu/ffaceacd-93d5-47ae-b981-c9389d676eac#gs.a5a1hs">
                            <div>
                                <h4>Northwestern University 101: Leading with Analytics</h4>
                                <p class="date">Mar 2021</p>
                                <p class="subcontent">Kellogg Executive Education</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section id="Skills" class="skills">
                <h2 class="section-title primary-border">
                    Skills
                </h2>
                <div class="skillcontainer">
                    <div>
                        <h3>Front-End</h3>
                        <ul class="listskill">
                            <li class="secondary-border">HTML5</li>
                            <li class="secondary-border">CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Back-End</h3>
                        <ul class="listskill">
                            <li>Java</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Other Technology</h3>
                        <ul class="listskill">
                            <li class="secondary-border">Github</li>
                            <li class="secondary-border">Postman</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </div>
            </section>
            </div> 
    );
}

export default Skills;
