import React from 'react'

function ShopItem({ bookItem, ownIt, removeBook }) {
    return (
        <div>
            <li>
                <div className="left">
                    {/* {console.log(bookItem)} */}
                    {bookItem.book.volumeInfo.title}
                </div>

                <label className="middle">
                    Owned
                    <input
                        type="checkbox"
                        checked={bookItem.completed}
                        onChange={(e) => {
                            ownIt(bookItem.id, e)
                        }}
                    />
                </label>
                <button
                    // checked={bookItem.completed}
                    onClick={(e) => {
                        removeBook(bookItem.id)
                    }}
                >
                    Remove Book
                </button>
            </li>
        </div>
    )
}

export default ShopItem

