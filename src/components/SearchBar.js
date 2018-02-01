import React from 'react'

const SearchBar = ({ word, onInputChange, onButtonClick }) => {
  return (
    <div>
      <input name="word" type="text" onChange={onInputChange} value={word} />
      <p>{word}</p>
      <button onClick={onButtonClick}>Search</button>
    </div>
  )
}

export default SearchBar
