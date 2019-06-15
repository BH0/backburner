import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Projects from "./Components/Projects"; 
import AddProject from "./Components/AddProject"; 

class App extends Component {
    constructor(props) { 
      super(props); 
      this.addProject = this.addProject.bind(this);
  }

  state = { 
    projects: [
        {
          name: "test", difficulty: "easy", status: "not started"
        }, 
        {
          name: "test2", difficulty: "hard", status: "started"
        }, 
        {
          name: "test3", difficulty: "hard", status: "postponed"
        }, 
    ] // will come from Firebase 
  } 

  addProject(project) { 
    console.log(project); 
    this.setState({
      projects: [...this.state.projects, project]
    })
  } 

  render() { 
    return (
      <div className="App">
        <Projects projects={this.state.projects} /> 
        <AddProject addProject={this.addProject}/> 
      </div> 
    ); 
  } 
}

export default App;
