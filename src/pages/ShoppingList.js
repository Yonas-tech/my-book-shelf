import React from 'react'
import ShopItem from '../components/ShopItem'

function ShoppingList({ shoppingList, ownIt, removeBook, addToShelf }) {
  return (
    shoppingList.length ?
      <div className="main">
        <div className='shopping-list'>

          <h1>Wish List</h1>

          <table className="bookslist wish-list">
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Publisher</th>
                {/* <th>Identifier</th> */}
                <th>Owned?</th>
                <th style={{ background: "none" }}></th>
              </tr>
            </thead>

            <tbody>
              {shoppingList
                .filter((i) => !i.owned)
                .map((bookItem, index) => {
                  return (
                    <ShopItem
                      key={index}
                      bookItem={bookItem}
                      ownIt={ownIt}
                      removeBook={removeBook}
                      addToShelf={addToShelf} />
                  )
                })}
            </tbody>
          </table>

          <h1>Owned Books </h1>

          <table className="bookslist owned">
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Publisher</th>
                {/* <th>Identifier</th> */}
                <th>Owned?</th>
                <th style={{ background: "none" }}></th>
              </tr>
            </thead>

            <tbody>
              {shoppingList
                .filter((i) => i.owned)
                .map((bookItem, index) => {
                  return (
                    <ShopItem
                      key={index}
                      bookItem={bookItem}
                      ownIt={ownIt}
                      removeBook={removeBook}
                    />
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
      :
      <div className="main">
        <h1>No Books Added Yet</h1>
      </div>
  )
}

export default ShoppingList

