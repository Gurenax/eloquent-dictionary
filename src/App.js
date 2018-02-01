import React, { Component } from 'react'
// import logo from './logo.svg';

import SearchBar from './components/SearchBar'

import './App.css'

class App extends Component {
  state = {
    word: ''
  }

  onWordChange = event => {
    const { value } = event.target
    this.setState({
      word: value
    })
  }

  onWordSearch = event => {
    console.log('Clicked!')
  }

  render() {
    const { word } = this.state

    return (
      <div className="App">
        <h1>Eloquent Dictionary</h1>
        <SearchBar word={word} onInputChange={this.onWordChange} onButtonClick={this.onWordSearch} />
        {/* Result */}
      </div>
    )
  }
}

export default App
