import React from 'react'
import { Icon } from 'react-fa'

const SearchBar = ({ word, onInputChange, onSearchAction }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <form
      className="container"
      role="search"
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      <div className="input-group add-on">
        <input
          className="form-control text-center"
          name="word"
          id="word"
          type="text"
          placeholder="Search"
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e => (e.target.placeholder = 'Search')}
          onChange={onInputChange}
          value={word}
        />
        <div className="input-group-btn">
          <button className="btn btn-default" onClick={onSearchAction}>
            <Icon name="search" />
          </button>
        </div>
      </div>
    </form>
  </nav>
)

export default SearchBar
