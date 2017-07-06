import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookDetails from './BookDetails'

class ListBooks extends React.Component {
/*  state ={
    currentlyReading:[],
    wantToRead:[],
    read:[]
  }*/
  state = {
    books:[]
   }
   componentDidMount() {
     BooksAPI.getAll().then((books)=>
      this.setState({books}))
   }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Books</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{this.state.books.map(book => (
      	                <BookDetails book={book} key={book.id}/>
                      ))}
                    </ol>
                  </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
export default ListBooks
