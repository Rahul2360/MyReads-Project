import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookDetails from './BookDetails'

class ListBooks extends React.Component {
  state ={
    currentlyReading:[],
    wantToRead:[],
    read:[]
  }

   componentDidMount() {
     BooksAPI.getAll().then((books) => {
       const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
       const wantToRead = books.filter(book => book.shelf === "wantToRead")
       const read = books.filter(book => book.shelf === "read")
      this.setState({currentlyReading,wantToRead,read})
   })}

   booksdata(title,books){
     return(
       <div className="bookshelf">
             <h2 className="bookshelf-title">{title}</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
                 {books.map((book,key) =>
                   <BookDetails book={book} key={key}/>
                 )}
               </ol>
             </div>
       </div>
);
   }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
             {this.booksdata("Currently Reading",this.state.currentlyReading)}
             {this.booksdata("Want To Read",this.state.wantToRead)}
             {this.booksdata("Read",this.state.read)}
          </div>
        </div>
      </div>

    )
  }
}
export default ListBooks
