import React from 'react'
import { Link } from 'react-router-dom';

function ShelfItem({ bookItem, completeRead, removeBook }) {

    const linkToViewer = () => {
        // for (let i = 0; i < bookItem.book.volumeInfo.industryIdentifiers.length; i++) {
        //     if (bookItem.book.volumeInfo.industryIdentifiers[i].type.startsWith('ISBN')) {
        //         let ISBN_num = bookItem.book.volumeInfo.industryIdentifiers[i].identifier;
        //         return (<Link to={`/book-shelf/${ISBN_num}`}>
        //                     <h2>{bookItem.book.volumeInfo.title}</h2>
        //                 </Link>)
        //     }
        // }
        // return bookItem.book.volumeInfo.title;
        return (<Link to={`/book-shelf/${bookItem.book.id}`}>
            <h2>{bookItem.book.volumeInfo.title}</h2>
        </Link>)
    }


    return (
        // <div>
            <tr>
                <td className="left">
                    {/* {bookItem.book.volumeInfo.title} */}
                    {linkToViewer()}
                </td>
                <td>
                    {JSON.stringify(bookItem.book.volumeInfo.authors)}
                </td>
                <td>
                    {bookItem.book.volumeInfo.publisher}
                </td>

                <td>
                    <label className="middle">
                        Complete
                        <input
                            type="checkbox"
                            checked={bookItem.completed}
                            onChange={(e) => {
                                completeRead(bookItem.id, e)
                            }}
                        />
                    </label>
                </td>

                <td>
                    <button onClick={(e) => { removeBook(bookItem.id) }} >
                        Remove Book
                    </button>
                </td>
            </tr>



            // <li>
            //     <div className="left">
            //         {/* {bookItem.book.volumeInfo.title} */}
            //         {linkToViewer()}
            // //     </div>

            // //     <label className="middle">
            // //         Complete
            // //         <input
            //             type="checkbox"
            //             checked={bookItem.completed}
            //             onChange={(e) => {
            //                 completeRead(bookItem.id, e)
            //             }}
            //         />
            //     </label>
            //     <button
            //         onClick={(e) => {
            //             removeBook(bookItem.id)
            //         }}
            //     >
            //         Remove Book
            //     </button>
            // </li>
        // </div> */}
    )
}

export default ShelfItem

