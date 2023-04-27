import React from 'react'
import no_cover_thumb from './images/no_cover_thumb.gif' 

function BookInfoCard({ book, addToShelf }) {
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
        // <div className='book-card'>
        //     <h5> {book.volumeInfo.title}</h5>
        //     <h5> {'By: ' + book.volumeInfo.authors}</h5>
        // <div className='book-img'>
        //     <img src={url}  alt={book.volumeInfo.title} /> <br />
        //     <a href={book.volumeInfo.infoLink} target='_parent'>
        //         <button className="imagebutton"  >Read More</button></a>
        // </div>
        //     <br />
        // </div>

        <div className="book-card">
            <div className="book-img">
                <img src={getThumbnail()} alt={book.volumeInfo.title} /> <br />
                <a href={book.volumeInfo.infoLink} target='_blank'>
                    <button className="imagebutton"  >Read More</button></a>
            </div>
            <table>
                <tbody>
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
                                <button onClick={addToShelf(book)}>Add to Shelf</button>
                                <button>Add to Buy List</button>
                                <button>?????</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BookInfoCard