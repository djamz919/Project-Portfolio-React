import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
function Projects() {
    return (
        <section id="Projects" class="projects">
        <h2 class="section-title primary-border">
            Projects
        </h2>
        <div class="projectcontainer">
            <a target="_blank" rel="noreferrer" href="rutgers-budget-better.herokuapp.com/" class="budget-better">
                <div class="mainproject">
                    <span>
                        <h3>Budget Better</h3>
                        <p>HTML, CSS, JavaScript, MySQL, Express, Sequelize, Handlebars</p>
                    </span>
                </div>
            </a>
            <div class="otherprojects">
                <a target="_blank" rel="noreferrer" href="https://djamz919.github.io/WeatherDashboard//" class="other-projects">
                    <div class="small-project weather-dashboard">
                        <span>
                            <h3>Weather Dashboard</h3>
                            <p>HTML, CSS, Javascript, Server-Side APIs</p>
                        </span>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://djamz919.github.io/javascriptCodeQuiz//" class="other-projects">
                    <div class="small-project coding-qiuz">
                        <span>
                            <h3>JavaScript Coding Quiz</h3>
                            <p>HTML, CSS, JavaScript, Web APIs</p>
                        </span>
                    </div>
                </a>
            </div>
        </div>
        <div class="projectcontainer">
            <a target="_blank" rel="noreferrer" href="https://djamz919.github.io/DollarFlights/" class="dollar-flights">
                <div class="mainproject">
                    <span>
                        <h3>Dollar Flights</h3>
                        <p>HTML, CSS, JavaScript, Server-Side APIs</p>
                    </span>
                </div>
            </a>
            <div class="otherprojects">
                <a target="_blank" rel="noreferrer" href="https://djamz919.github.io/password-generator/" class="other-projects">
                    <div class="small-project password-generator">
                        <span>
                            <h3>Password Generator</h3>
                            <p>JavaScript</p>
                        </span>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://djamz919.github.io/run-buddy/" class="other-projects">
                    <div class="small-project run-buddy">
                        <span>
                            <h3>Run Buddy</h3>
                            <p>HTML, CSS</p>
                        </span>
                    </div>
                </a>
            </div>
            
        </div>
    </section>

    );
}

export default Projects;
