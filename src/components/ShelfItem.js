import React from 'react'

function ShelfItem({ bookItem, completeRead, removeBook }) {
    return (
        <div>
            <li>
                <div className="left">
                    {/* {console.log(bookItem)} */}
                    {bookItem.book.volumeInfo.title}
                </div>

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
                <button
                    // checked={bookItem.completed}
                    onClick={(e) => {
                        removeBook(bookItem.id)
                    }}
                >
                    Delete Todo
                </button>
            </li>
        </div>
    )
}

export default ShelfItem

