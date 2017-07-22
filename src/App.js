import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
    // three states are defined for three shelfs.
    state ={
        books:[],
        searchedBooks:[],
        results:[]
    }
    // this function get our book data by API .
    componentDidMount() {
        this.getdata();
    }
    getdata(){
        return(
            BooksAPI.getAll().then((books) => {
                this.setState({books})
            }))
    }
    // This function helps us to updating the data in the three shelfs.
/*    updatedata(book, shelf){
        if (book.shelf !== shelf) {
            BooksAPI.update(book, shelf).then(() => {
                book.shelf = shelf
                // Filter out the book and append it to the end of the list
                // so it appears at the end of whatever shelf it was added to.
                this.setState((state) => {
                    books: state.books.filter(b => b.id !== book.id).concat([ book ])
                })
            })
        }
    }*/
    updatedata = (book,shelf) => {
      BooksAPI.update(book,shelf).then((books) => {
        this.getdata();
      })
    }

    updateSearchedBooks = (searchedBooks,books) => {
    const results =searchedBooks.map((result) => {
      for(let book of books){
        if(result.id === book.id){
          result.shelf = book.shelf
          return book
        } else {
          result.shelf = 'none'
        }
      }
      return true
    })
    this.setState({results,searchedBooks})
  }

    // this helps us to search in the search box
    searchquery = (event) => {
      let query= event.target.value;
      BooksAPI.search(query).then((searchedBooks) => {
        if(searchedBooks.length >= 1){
          this.updateSearchedBooks(searchedBooks,this.state.books)
        } else {
        this.setState({searchedBooks});
      }
      })
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (

                    <ListBooks
                        books={this.state.books}
                        handleShelfChange={this.updatedata}
                    />

                )}/>
                <Route path="/search" render={() => (
                    <SearchBooks
                      books={this.state.searchedBooks}
                      search={this.searchquery}
                      handleShelfChange={this.updatedata}/>
                )}/>
            </div>
        )
    }
}
export default BooksApp
