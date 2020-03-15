import React, { Component } from 'react'
import Story from './Story.js'
import './Input.css'

class Input extends Component {
    constructor(props){
      super(props)
      this.state = {
              noun: "",
              adj: "",
              verb: "",
              noun2: "",
              adj2: "",
              noun3: "",
          }
      }

  handleFormChange = (event) => {
    // method that takes the value from the input and calls updateName
    this.setState ({noun: event.target.value})
  }

  handleFormChange2 = (event) => {
    // method that takes the value from the input and calls updateName
    this.setState({adj: event.target.value})
  }

  handleFormChange3 = (event) => {
    // method that takes the value from the input and calls updateName
    this.setState({verb: event.target.value})
  }

  handleFormChange4 = (event) => {
    // method that takes the value from the input and calls updateName
    this.setState({noun2: event.target.value})
  }

  handleFormChange5 = (event) => {
    // method that takes the value from the input and calls updateName
    this.setState({adj2: event.target.value})
  }

  handleFormChange6 = (event) => {
    // method that takes the value from the input and calls updateName
    this.setState({noun3: event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault()

let storyRender = (<Story
        noun= {this.state.noun}
        adj = {this.state.adj}
        verb = {this.state.verb}
        noun2 = {this.state.noun2}
        adj2 = {this.state.adj2}
        noun3 = {this.state.noun3}
        />)
    this.setState({storyRender: storyRender})
       }


  render() {
    let { noun, adj, verb, noun2, adj2, verb2 } = this.state
    // the JSX tag <input /> has the value of name coming as props from App.js
    return (
        <div className="main-div">
            <h1>MadLibs!</h1>
            <p className="paragraph"> Noun: </p>
            <input
                value = {noun}
                onChange = {this.handleFormChange}
            />

            <p className="paragraph"> Adjective </p>
            <input
                value = {adj}
                onChange = {this.handleFormChange2}
            />

            <p className="paragraph"> Verb </p>
            <input
                value = {verb}
                onChange = {this.handleFormChange3}
            />

            <p className="paragraph"> Noun2 </p>
            <input
                value = {noun2}
                onChange = {this.handleFormChange4}
            />

            <p className="paragraph"> Adj 2 </p>
            <input
                value = {adj2}
                onChange = {this.handleFormChange5}
            />

            <p className="paragraph"> Noun 3 </p>
            <input
                value = {verb2}
                onChange = {this.handleFormChange6}
            />

            <form  onSubmit={this.handleSubmit}>
                <button type="submit">Submit Form</button>
            </form>

            <form >
                <button type="submit">Clear Form</button>
            </form>
            
            {this.state.storyRender}
        </div>
    )
  }
}

export default Input
