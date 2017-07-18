import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class SearchBooks extends React.Component {
  // this is used for display the page
  render() {
    const { search,books,handleShelfChange } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={search}/>
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf  books={books} handleShelfChange={handleShelfChange}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks
