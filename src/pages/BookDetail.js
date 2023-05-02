import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import BookViewer from './test';

function BookDetail(props) {

  // useParams
  const params = useParams();
  const bookId = params.bookId;
  // useRef
  let shelfRef = useRef([]);  // will be loaded from localStorage with useEffect on page load
  // on shelfRef change, book gets a book object from the sheflRef with the book having id == params.bookId
  const [book, setBook] = useState(null)

  useEffect(() => { // for bookRef
    if (shelfRef.current != []) {
      console.log(shelfRef.current)
      for (let i = 0; i < shelfRef.current.length; i++) {
        // make sure the two ids match
        console.log('id ' + shelfRef.current[i].book.id + " bookID " + bookId)
        // if they match get the book from the shelf and load it on bookRef
        if (shelfRef.current[i].book.id == bookId) {
          // see the matching book on the shelf
          console.log("book:");
          console.log(shelfRef.current[i].book)
          // load it onto the bookRef
          // bookRef.current = shelfRef.current[i].book;
          setBook(shelfRef.current[i].book);
          // console.log(shelfRef.current[i].book);
          return
        }
      }
    }
  }, [shelfRef])

  useEffect(() => { // for loading shelfRef from loacalStorage
    shelfRef.current = JSON.parse(localStorage.getItem("shelf"))
    // console.log(shelfRef.current)
  }, [])


  // console log bookRef value, when bookRef value changes
  useEffect(() => {
    console.log("Got the book: ")
    console.log(book)
  }, [book])

  return (

    <div className='book-detail'>
      {book ?
        <div>
          <h1 className="book-title">{book.volumeInfo.title}</h1>
          <h3>By: {book.volumeInfo.authors}</h3>

          <table>
            <tr>
              <td>{book.volumeInfo.industryIdentifiers[0].type}:</td>
              <td>{book.volumeInfo.industryIdentifiers[0].identifier}</td>
              <td>Page count:</td>
              <td>{book.volumeInfo.pageCount}</td>
            </tr>

            <tr>
              <td>Published:</td>
              <td>{book.volumeInfo.publishedDate}</td>
              <td>Publisher:</td>
              <td>{book.volumeInfo.publisher}</td>
            </tr>
            <tr>
              <td>Language:</td>
              <td>{book.volumeInfo.language}</td>
              <td>Version:</td>
              <td>{book.volumeInfo.contentVersion}</td>
            </tr>
            <tr>
              <td colSpan={4} rowSpan={8}>
                {book.volumeInfo.description}
              </td>
            </tr>
          </table>
        </div> : <div>book not found</div>}
    </div>
  )
}

export default BookDetail