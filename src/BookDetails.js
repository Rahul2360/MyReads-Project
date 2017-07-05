import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookDetails extends React.Component {
     state = {
         value: 'none'
     };
 	render() {
 		const { book }  = this.props
 		return(
 				<li>
 	        <div className="book">
 	          <div className="book-top">
 	            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: ` url("${book.imageLinks.smallThumbnail}")` }}></div>
 	            <div className="book-shelf-changer">
 	              <select>
 	                <option value="none" disabled>Move to...</option>
 	                <option value="currentlyReading">Currently Reading</option>
 	                <option value="wantToRead">Want to Read</option>
 	                <option value="read">Read</option>
 	                <option value="none">None</option>
 	              </select>
 	            </div>
 	          </div>
 	          <div className="book-title">{this.props.title}</div>
 	          <div className="book-authors">{this.props.authors}</div>
 	        </div>
 	      </li>
 			)
 	}
 }

 export default BookDetails
