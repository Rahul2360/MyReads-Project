import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookDetails from './BookDetails'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends React.Component {
  static PropTypes = {
   updatedata: PropTypes.func.isRequired,
 }
  // three states are defined for three shelfs.
  state ={
    currentlyReading:[],
    wantToRead:[],
    read:[]
  }
  // this function get our book data by API .
  componentDidMount() {
     this.getdata();
  }
  getdata(){
    return(
      BooksAPI.getAll().then((books) => {
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
        const wantToRead = books.filter(book => book.shelf === "wantToRead")
        const read = books.filter(book => book.shelf === "read")
        this.setState({currentlyReading,wantToRead,read})
     }))
  }

   // This function helps us to updating the data in the three shelfs.

   // this functions arrange the books in their respective shelfs.
   booksdata(title,books){
     return(
       <div className="bookshelf">
         <h2 className="bookshelf-title">{title}</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
             {books.map((book,key) =>
               <BookDetails book={book} key={key} updatedata={this.updatedata} />
               // we are declaring react Component via using ES6 so react no longer autobinds so we bind in render by this method
               // other way is onChange={e=>this.handlechange(e)}
             )}
           </ol>
           <p className="books-length">Total books : {books.length}</p>
         </div>
       </div>
     );
   }
   render() {
    const { currentlyReading,wantToRead,read }  = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
             {this.booksdata("Currently Reading",currentlyReading)}
             {this.booksdata("Want To Read",wantToRead)}
             {this.booksdata("Read",read)}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
      )
    }
}

export default ListBooks
