import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookDetails from './BookDetails'

class ListBooks extends React.Component {
  render() {
    return (
      <div className="bookshelf">
            <h2 className="bookshelf-title">My Reads</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              	{this.props.books.map(book => (
	                <BookDetails book={book} key={book.id}/>
                ))}
              </ol>
            </div>
          </div>
    )
  }
}
export default ListBooks
