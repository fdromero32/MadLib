import React, { Component } from 'react'
// importing the Greeter component
import Input from './Components/Input'

class App extends Component{
  render() {
    return (
      <div>
        <h1> Mad Libs </h1>
        <Input/>
      </div>
    )
  }
}

export default App
