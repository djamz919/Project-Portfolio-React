import React from 'react';
import Project from "../Project";
import projects from "./Projects.json";


function Portfolio() {
    return (
        <section id="Projects" class="projects">
            <h2 class="section-title primary-border">
                Portfolio
            </h2>
            <div class="projectcontainer">
                {
                    projects.map((project) => (
                        <Project
                            key={project.id}
                            name={project.name}
                            class={project.class}
                            github={project.github}
                            app={project.app}
                            technologies={project.technologies}
                        />
                    ))
                }
            </div>

        </section>

    );
}

export default Portfolio;
