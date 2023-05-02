import Search from "./pages/Search";
import Shelf from "./pages/Shelf";
import ShoppingList from "./pages/ShoppingList";
import BookDetail from "./pages/BookDetail";
import Nav from "./components/Nav";
import {Route, Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import './style.css';

function App() {

  const [shelfBooks, setShelf] = useState([]);
  // shoppingList includes the books to shop and those already owned
  const [shoppingList, setShoppingList] =useState([]); 
  //for search result
  const [result, setResult] = useState(<div></div>);


  //////// Functions for Bookshelf  ////////////////////////////////
  useEffect(() => {
    const savedShelfBooks = localStorage.getItem("shelf")
    if (savedShelfBooks && savedShelfBooks !== "undefined" && savedShelfBooks !== "null") {
      setShelf(JSON.parse(savedShelfBooks))
    }
  }, [])

  // Function to add book to shelf
  const addToShelf = (book) => {
    console.log('hi')
    //?? check if the book is already in the shelf here
    for (let i=0;i<shelfBooks.length; i++){
    if(book.id===shelfBooks[i].book.id){
      alert("aleady on the shelf");
      return
    }}
    // BookItem = { 'book': book, id: Date.now(), completed: false }
    const newBookItem = { 'book': book, completed: false } // id: Date.now(), 
    localStorage.setItem("shelf", JSON.stringify([newBookItem, ...shelfBooks]))
    setShelf([newBookItem, ...shelfBooks])
    console.log(shelfBooks)
  }

  // Function to mark a book reading complete
  const completeRead = (id, e) => {
    const shelfBooksCopy = [...shelfBooks]
    const indexOfBookItem = shelfBooksCopy.findIndex((i) => i.id === id)
    shelfBooksCopy[indexOfBookItem].completed = !shelfBooksCopy[indexOfBookItem].completed
    localStorage.setItem("shelf", JSON.stringify([...shelfBooksCopy]))
    setShelf([...shelfBooksCopy])
  }

  // Function to remove a book from the shelf
  const removeShelfBook = (id) => {
    const shelfBooksCopy = [...shelfBooks]
    const indexOfBookItem = shelfBooksCopy.findIndex((i) => i.id === id)
    shelfBooksCopy.splice(indexOfBookItem, 1)
    localStorage.setItem(
      "shelf",
      JSON.stringify([...shelfBooksCopy])
    )
    setShelf([...shelfBooksCopy])
  }

  //////// Functions for Shopping List ////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
  useEffect(() => {
    const savedShopping = localStorage.getItem("bookShoppingList")
    if (savedShopping && savedShopping !== "undefined" && savedShopping !== "null") {
      setShoppingList(JSON.parse(savedShopping))
    }
  }, [])

  // function to add book to wish list 
  const addToWishList = (book) => {
    // check if the book is already in the shopping list
    for (let i=0;i<shoppingList.length; i++){
    if(book.id===shoppingList[i].book.id){  // ????????? also let user know if owned already
      alert("aleady on the shopping list");
      return
    }}
    // BookItem = { 'book': book, id: Date.now(), owned: false }
    const newBookItem = { 'book': book, owned: false } //, id: Date.now()
    localStorage.setItem("bookShoppingList", JSON.stringify([newBookItem, ...shoppingList]))
    setShoppingList([newBookItem, ...shoppingList])
    console.log(shoppingList)
  }

  // Function to mark a book owned
  const ownIt = (id, e) => {
    const shoppingListCopy = [...shoppingList]
    const indexOfBookItem = shoppingListCopy.findIndex((i) => i.id === id)
    shoppingListCopy[indexOfBookItem].owned = !shoppingListCopy[indexOfBookItem].owned
    localStorage.setItem("bookShoppingList", JSON.stringify([...shoppingListCopy]))
    setShoppingList([...shoppingListCopy])
  }

  // Function to remove a book from the shopping list
  const removeFromShoppingList = (id) => {
    const shoppingListCopy = [...shoppingList]
    const indexOfBookItem = shoppingListCopy.findIndex((i) => i.id === id)
    shoppingListCopy.splice(indexOfBookItem, 1)
    localStorage.setItem(
      "bookShoppingList",
      JSON.stringify([...shoppingListCopy])
    )
    setShoppingList([...shoppingListCopy])
  }

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Search addToShelf={addToShelf} 
                                         addToWishList={addToWishList}/>}/>
        <Route path="/book-shelf" element={<Shelf 
                                                  shelfBooks={shelfBooks} 
                                                  completeRead={completeRead}
                                                  removeBook ={removeShelfBook}/>}/>
        <Route path="shopping-list" element={<ShoppingList
                                                  shoppingList={shoppingList}
                                                  ownIt={ownIt}
                                                  removeBook={removeFromShoppingList}
                                                  addToShelf={addToShelf}/>} />
        <Route path="/book-shelf/:bookId" element={<BookDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
