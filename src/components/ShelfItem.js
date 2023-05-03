import React from 'react'
import { Link } from 'react-router-dom';

// ShelfItem returns a table row format, containing information about a single book in the shelf

function ShelfItem({ bookItem, completeRead, removeBook }) {

    return (
            <tr>
                <td className="left">
                    <Link 
                        to={`/book-shelf/${bookItem.book.id}`}>
                        <p>{bookItem.book.volumeInfo.title}</p>
                    </Link>
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
    )
}

export default ShelfItem

