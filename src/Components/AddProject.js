import React, { Component } from 'react';;

class AddProject extends Component { 
    state = { 
        name: "", 
        status: "", 
        difficulty: ""
    } 

    handleChange = e => { 
        this.setState({
            [e.target.id]: e.target.value
        }); 
    }

    handleSubmit = e => { 
        e.preventDefault(); 
        this.props.addProject(this.state); 
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="name" onChange={this.handleChange} />     
                    <input type="text" id="status" onChange={this.handleChange} />     
                    <input type="text" id="difficulty" onChange={this.handleChange} />     
                    <button>Submit</button>  
                </form> 
            </div> 
        )
    }
}

export default AddProject; 