import React from 'react'
import ShelfItem from '../components/ShelfItem'

function Shelf({ shelfBooks, completeRead, removeBook }) {
    return (
        shelfBooks.length ? (
            <div className="main">
                <div className='shelf'>

                    <h1>Books To Read</h1>

                    <table className='bookslist'>
                        <thead>
                            <tr>
                                <th className='shelf-th'>Title</th>
                                <th className='shelf-th'>Authors</th>
                                <th className='shelf-th'>Publisher</th>
                                <th className='shelf-th'>Reading</th>
                                <th style={{ background: "none", border: 'none' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {shelfBooks
                                .filter((i) => !i.completed)
                                .map((bookItem, index) => {
                                    return (
                                        <ShelfItem
                                            key={index}
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
                        <thead>
                            <tr>
                                <th className='shelf-th'>Title</th>
                                <th className='shelf-th'>Authors</th>
                                <th className='shelf-th'>Publisher</th>
                                <th className='shelf-th'>Reading</th>
                                <th className='shelf-th' style={{ background: "none" }}></th>
                            </tr>
                        </thead>

                        <tbody>
                            {shelfBooks
                                .filter((i) => i.completed)
                                .map((bookItem, index) => {
                                    return (
                                        <ShelfItem
                                            key={index}
                                            bookItem={bookItem}
                                            completeRead={completeRead}
                                            removeBook={removeBook}
                                        />
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>

        ) : (
            <div className="main"><h1>No Books Added Yet</h1></div>
           
        )
    )
}

export default Shelf

