import React, { Component } from 'react'
// import logo from './logo.svg';
import fetchWord from './api/words'
import SearchBar from './components/SearchBar'
import Result from './components/Result'
import './App.css'

class App extends Component {
  /*
  * App State
  * word - String - Input from User
  * result - Object - Data from Words API
  * error - Object - Error returned from calling Words API
  */
  state = {
    word: '',
    result: null,
    error: null
  }

  /*
  * Handles word input event
  */
  onWordChange = event => {
    const { value } = event.target
    this.setState({
      word: value,
      error: null
    })
  }

  /*
  * Handles search event for the input word
  */
  onWordSearch = async event => {
    try {
      const { word } = this.state
      const response = await fetchWord(word)
      const data = response.data
      this.setState({
        result: data,
        error: null
      })
    } catch (error) {
      this.setState({
        result: null,
        error: error
      })
    }
  }

  render() {
    const { word, result, error } = this.state

    return (
      <div className="App">
        <SearchBar
          word={word}
          onInputChange={this.onWordChange}
          onSearchAction={this.onWordSearch}
        />
        <Result data={result} error={error} />
      </div>
    )
  }
}

export default App
