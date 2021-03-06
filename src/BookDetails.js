import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

class BookDetails extends React.Component {
    // Initially the value is none
     state = {
         value: 'none'
     }
     static PropTypes = {
      updatedata: PropTypes.func.isRequired,
      book:PropTypes.object.isRequired
    }

 	render() {
 		const { book,updatedata }  = this.props
 		return(
 				<li>
 	        <div className="book">
 	          <div className="book-top">
 	            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: ` url("${book.imageLinks.smallThumbnail}")` }}></div>
 	            <div className="book-shelf-changer">
 	              <select onChange={e => updatedata(book, e.target.value)} value={book.shelf}>
 	                <option value="none" disabled>Move to...</option>
 	                <option value="currentlyReading">Currently Reading</option>
 	                <option value="wantToRead">Want to Read</option>
 	                <option value="read">Read</option>
 	                <option value="none">None</option>
 	              </select>
 	            </div>
 	          </div>
 	          <div className="book-title">{book.title}</div>
 	          <div className="book-authors">{book.authors}</div>
 	        </div>
 	      </li>
 			)
 	}
 }

 export default BookDetails
