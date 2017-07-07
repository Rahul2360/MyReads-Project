import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state={
    screen:'list' // search
  }
  render() {
    return (
      <div className="app">
        {this.state.screen === 'list' && (
            <ListBooks
              onNavigate={() => {
                this.setState({screen:"search"})
              }}
            />
        )}
      {this.state.screen === 'search' && (
        <SearchBooks/>
      )}
        </div>
      )
    }
  }
export default BooksApp
