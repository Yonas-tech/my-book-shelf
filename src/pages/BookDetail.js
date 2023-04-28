import React, { useEffect, useRef } from 'react'
import { useState } from 'react-dom'
import { useParams } from 'react-router-dom'

import BookViewer from './test';


function BookDetail(props) {

  // useParams
  const params = useParams();
  const bookId = params.bookId;
  // useRef
  let bookRef = useRef({})
  let shelfRef = useRef([]);
  

  useEffect(() => {
    if (shelfRef.current != []) {
      console.log(shelfRef.current)
      for (let i = 0; i < shelfRef.current.length; i++) {
        console.log('id '+shelfRef.current[i].book.id + " bookID "+ bookId)
        if (shelfRef.current[i].book.id == bookId) {

          console.log("book:"); console.log(shelfRef.current[i].book)

          bookRef.current = shelfRef.current[i].book;
          return
        }
      }
    }
  }, [shelfRef])

  useEffect(() => {
    shelfRef.current = JSON.parse(localStorage.getItem("shelf"))
  }, [])


  //see bookRef value
  useEffect(()=>{console.log(bookRef.current)},[bookRef])


  return (
    <div className='book-detail'>
      <h1 className="book-title">{bookRef.current.volumeInfo.title}</h1>



      {/* <BookViewer ISBN_num={ISBN_num}/> */}


      {/* <h1 className="book-title">{bookRef.current.volumeInfo.title}</h1>
      <h3>By: {bookRef.current.volumeInfo.authors}</h3>
      
      <table>
        <tr>
          <td>{bookRef.current.volumeInfo.industryIdentifiers[0].type}:</td>
          <td>{bookRef.current.volumeInfo.industryIdentifiers[0].identifier}</td>
          <td>Page count:</td>
          <td>{bookRef.current.volumeInfo.pageCount}</td>
        </tr>

        <tr>
          <td>Published:</td>
          <td>{bookRef.current.volumeInfo.publishedDate}</td>
          <td>Publisher:</td>
          <td>{bookRef.current.volumeInfo.publisher}</td>
        </tr>
        <tr>
          <td>Language:</td>
          <td>{bookRef.current.volumeInfo.language}</td>
          <td>Version:</td>
          <td>{bookRef.current.volumeInfo.contentVersion}</td>
        </tr>
        <tr>
          <td colSpan={4} rowSpan={8}>
            {bookRef.current.volumeInfo.description}
          </td>
        </tr>
      </table> */}
    </div>
  )
}

export default BookDetail