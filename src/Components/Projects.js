import React from "react"; 

function Projects(props) { 
    return (
        <div>{props.projects.map(project => <div>{project.name} | {project.status} | {project.difficulty}</div>)}</div> 
    ); 
} 

export default Projects; 