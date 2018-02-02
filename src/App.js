import React, { Component } from 'react'
// import logo from './logo.svg';
import fetchWord from './api/words'
import SearchBar from './components/SearchBar'
import Result from './components/Result'
import './App.css'

class App extends Component {
  state = {
    word: '',
    result: null
  }

  onWordChange = event => {
    const { value } = event.target
    this.setState({
      word: value
    })
  }

  onWordSearch = async event => {
    const { word } = this.state
    const response = await fetchWord(word)
    const data = response.data
    this.setState({
      result: data
    })
  }

  render() {
    const { word, result } = this.state

    return (
      <div className="App">
        <SearchBar
          word={word}
          onInputChange={this.onWordChange}
          onSearchAction={this.onWordSearch}
        />
        <Result data={result} />
      </div>
    )
  }
}

export default App
