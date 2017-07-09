import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  updatedata = (book, shelf) => {
   if (book.shelf !== shelf) {
     BooksAPI.update(book, shelf).then(() => {
       book.shelf = shelf
       this.setState(state => ({
         books: state.books.filter(b => b.id !== book.id).concat([ book ])
       }))
     })
   }
 }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>  (
          <ListBooks
            updatedata={this.updatedata}
          />
        )}/>
        <Route path="/search" component={SearchBooks}/>
        </div>
      )
    }
  }
export default BooksApp
