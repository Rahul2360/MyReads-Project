import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import BookDetails from './BookDetails'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component {
  // This is used for implementing the history property
  static propTypes = {
		history : PropTypes.object.isRequired
	};
  state ={
    query:'',
    books:[]
  }
  // this helps us to search in the search box
  searchquery = (query) => {
    this.setState({query});
    BooksAPI.search(query).then((books) => this.setState({books}))
  }
  // This will update data in the main page in respective shelfs.
  updatedata(book, shelf) {
    const {history} = this.props
    BooksAPI.update(book, shelf).then(() =>history.push("/")
    )
}
  // this is used for display the page
  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={books.query} onChange={(event) => this.searchquery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book,key) =>
             <BookDetails book={book} key={key} updatedata={this.updatedata.bind(this)} />
           )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
