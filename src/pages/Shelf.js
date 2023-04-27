import React from 'react'
import ShelfItem from '../components/ShelfItem'


function Shelf({ shelfBooks, completeRead, removeBook }) {
    return (
        shelfBooks.length ? (
            <div className='shelf'>
                <h1>Books To Read</h1>
                <ul className="bookslist">
                    {shelfBooks
                        .filter((i) => !i.completed)
                        .map((bookItem) => {
                            return (
                                <ShelfItem
                                    key={bookItem.id}
                                    bookItem={bookItem}
                                    completeRead={completeRead}
                                    removeBook={removeBook}
                                />
                            )
                        })}
                </ul>
                <h1>Completed Books </h1>
                <ul className="bookslist">
                    {shelfBooks
                        .filter((i) => i.completed)
                        .map((bookItem) => {
                            return (
                                <ShelfItem
                                    key={bookItem.id}
                                    bookItem={bookItem}
                                    completeRead={completeRead}
                                    removeBook={removeBook}
                                />
                            )
                        })}
                </ul>
            </div>
        ) : (
            <h1>No Todos Added Yet</h1>
        )


    )
}

export default Shelf

