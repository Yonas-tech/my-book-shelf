import React from 'react'
import no_cover_thumb from './images/no_cover_thumb.gif'

function BookInfoCard({ book, addToShelf, addToWishList }) {
    let url = '';
    function getThumbnail() {
        if (book.volumeInfo.imageLinks !== undefined) {
            return url = book.volumeInfo.imageLinks.thumbnail;
        }
        else {
            return url = no_cover_thumb;
        }
    }

    return (

        <div className="book-card" >
            <div className="book-img" style={{margin:0, padding:0}}>
                <img src={getThumbnail()} alt={book.volumeInfo.title} /> <br />
            </div>

            <div style={{margin:0, padding:0}}>
                <p>Title: {book.volumeInfo.title}
                <br/>Author: {'By: ' + book.volumeInfo.authors}
                <br/>Publisher: {book.volumeInfo.publisher}
                <br/>Page Count: {book.volumeInfo.pageCount}</p>
            </div>

            <div style={{margin:0, padding:0}}>
                <a href={book.volumeInfo.infoLink} target='_blank'>
                    <button className="imagebutton"  >Read More {"\u2197 "}</button>
                </a>
                <button onClick={() => { addToShelf(book) }}>Add to Shelf</button>
                <button onClick={() => { addToWishList(book) }}>Add to Wish List</button>
            </div>

        </div>
    )
}

export default BookInfoCard

//   <table className='book-card-table'>
{/* <tbody className='book-card-table-body'>
<tr>
    {/* <td rowSpan={7}> */}
//     </td> */}
//     <td>Title: </td>
//     <td><p> {book.volumeInfo.title}</p></td>
// </tr>
// <tr>
//     <td>Author: </td>
//     <td><p> {'By: ' + book.volumeInfo.authors}</p></td>
// </tr>
// <tr>
//     <td>Publisher: </td>
//     <td><p> {book.volumeInfo.publisher}</p></td>
// </tr>
// <tr>
//     <td>Page Count: </td>
//     <td><p> {book.volumeInfo.pageCount}</p></td>
// </tr>
// <tr>
//     <td className="buttons" colSpan={2}>
//         <div>
//             <a href={book.volumeInfo.infoLink} target='_blank'>
//                 <button className="imagebutton"  >Read More {"\u2197 "}</button>
//             </a>
//             <button onClick={() => { addToShelf(book) }}>Add to Shelf</button>
//             <button onClick={() => { addToWishList(book) }}>Add to Wish List</button>
//         </div>
//     </td>
// </tr>
// </tbody>
// </table>