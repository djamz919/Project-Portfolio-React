import React from "react";

function Project(props) {

    return (

        <a target="_blank" rel="noreferrer" href={props.app} class={props.class}>
            <div class="mainproject" >
                <span>
                    <h3>{props.name}</h3>
                    <p>{props.technologies}</p>
                    <a class="github-link" target="_blank" rel="noreferrer" href={props.github}>Github Link</a>
                </span>
            </div>
        </a>
    );
}

export default Project;

