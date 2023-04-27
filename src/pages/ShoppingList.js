import React from 'react'
import ShopItem from '../components/ShopItem'

function ShoppingList({shoppingList, ownIt, removeBook}) {
    return (
        shoppingList.length ? (
            <div className='shelf'>
                <h1>Books To Buy</h1>
                <ul className="bookslist">
                    {shoppingList
                        .filter((i) => !i.owned)
                        .map((bookItem) => {
                            return (
                                <ShopItem
                                    key={bookItem.id}
                                    bookItem={bookItem}
                                    ownIt={ownIt}
                                    removeBook={removeBook}
                                />
                            )
                        })}
                </ul>
                <h1>Owned Books </h1>
                <ul className="bookslist">
                    {shoppingList
                        .filter((i) => i.owned)
                        .map((bookItem) => {
                            return (
                                <ShopItem
                                    key={bookItem.id}
                                    bookItem={bookItem}
                                    ownIt={ownIt}
                                    removeBook={removeBook}
                                />
                            )
                        })}
                </ul>
            </div>
        ) : (
            <h1>No Books Added Yet</h1>
        )


    )
}

export default ShoppingList

