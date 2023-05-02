import React from 'react'
import ShelfItem from '../components/ShelfItem'


function Shelf({ shelfBooks, completeRead, removeBook }) {
    return (
        shelfBooks.length ? (
            <div className='shelf'>
                <h1>Books To Read</h1>
                <table className='bookslist'>
                    <tr>
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Publisher</th>
                        <th>Read?</th>
                        <th style={{ background: "white" }}></th>
                    </tr>
                    <tbody>
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
                    </tbody>
                </table>

                <h1>Completed Books </h1>

                <table className='bookslist'>
                    <tr>
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Publisher</th>
                        <th>Read?</th>
                        <th style={{ background: "white" }}></th>
                    </tr>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        ) : (
            <h1>No Books Added Yet</h1>
        )


    )
}

export default Shelf

