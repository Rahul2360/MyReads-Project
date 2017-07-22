import React from 'react'
import BookShelf from './BookShelf'
import './App.css'
import {Link} from 'react-router-dom'

class ListBooks extends React.Component {

   // this functions arrange the books in their respective shelfs.
    render() {
        const { books,handleShelfChange } = this.props

        const wantBooks = books.filter(book => book.shelf === "wantToRead")
        const currentBooks = books.filter(book => book.shelf === "currentlyReading")
        const readBooks = books.filter(book => book.shelf === "read")

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf shelfName="Currently Reading"
                               books={currentBooks}
                               handleShelfChange={handleShelfChange}
                    />
                    <BookShelf shelfName="Want to Read"
                               books={wantBooks}
                               handleShelfChange={handleShelfChange}
                    />
                    <BookShelf shelfName="Read"
                               books={readBooks}
                               handleShelfChange={handleShelfChange}
                    />
                </div>
                <div className="open-search">
                  <Link to="/search" onClick={this.props.clear}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
