import React from 'react'

function ShopItem({ bookItem, ownIt, removeBook, addToShelf }) {
    return (
        <tr>
            <td className="left">
                {bookItem.book.volumeInfo.title}
            </td>
            <td>
                {JSON.stringify(bookItem.book.volumeInfo.authors)}
            </td>
            <td>
                {bookItem.book.volumeInfo.publisher}
            </td>

            <td>
                <label className="middle">
                    {/* Owned */}
                    <input
                        type="checkbox"
                        checked={bookItem.owned}
                        onChange={(e) => {
                            ownIt(bookItem.id, e)
                            // addToShelf(bookItem.book)
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

export default ShopItem

