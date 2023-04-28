import React from 'react'
import no_cover_thumb from './images/no_cover_thumb.gif' 

function BookInfoCard({ book, addToShelf, addToWishList }) {
    let url = '';
    function getThumbnail(){
        if(book.volumeInfo.imageLinks !== undefined){
            return url = book.volumeInfo.imageLinks.thumbnail;
        }
        else{
            return url = no_cover_thumb;
        }
    }

    // function concatISBN(ISBNs) {
    //     return (ISBNs[0].identifier + ", " + ISBNs[1].identifier)
    // }

    return (

        <div className="book-card">
            <div className="book-img">
                <img src={getThumbnail()} alt={book.volumeInfo.title} /> <br/>
            </div>
            <table className='book-card-table'>
                <tbody className='book-card-table-body'>
                    <tr> 
                        {/* <td rowSpan={7}>
                        </td> */}
                        <td>Title: </td>
                        <td><p> {book.volumeInfo.title}</p></td>
                    </tr>
                    <tr>
                        <td>Author: </td>
                        <td><p> {'By: ' + book.volumeInfo.authors}</p></td>
                    </tr>
                    <tr>
                        <td>Publisher: </td>
                        <td><p> {book.volumeInfo.publisher}</p></td>
                    </tr>
                    {/* <tr>
                        <td>ISBN: </td>
                        <td><p> {book.volumeInfo.industryIdentifiers[0].identifier}</p></td>
                    </tr> */}
                    <tr>
                        <td>Page Count: </td>
                        <td><p> {book.volumeInfo.pageCount}</p></td>
                    </tr>
                    <tr>
                        <td className="buttons" colSpan={2}>
                            <div>
                                <a href={book.volumeInfo.infoLink} target='_blank'>
                                    <button className="imagebutton"  >Read More {"\u2197 "}</button>
                                </a>
                                <button onClick={()=>{addToShelf(book)}}>Add to Shelf</button>
                                <button onClick={()=>{addToWishList(book)}}>Add to Wish List</button>
                                {/* <button>?????</button> */}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BookInfoCard