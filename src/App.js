import Search from "./pages/Search";
import Shelf from "./pages/Shelf";
import ShoppingList from "./pages/ShoppingList";
import BookDetail from "./pages/BookDetail";
import Nav from "./components/Nav";
import {Route, Routes} from 'react-router-dom';

import { useEffect, useState } from "react";

function App() {

  const [shelfBooks, setShelf] = useState([]);

  useEffect(() => {
    const savedShelfBooks = localStorage.getItem("shelf")
    if (savedShelfBooks && savedShelfBooks !== "undefined" && savedShelfBooks !== "null") {
      setShelf(JSON.parse(savedShelfBooks))
    }
  }, [])

  const addToShelf = (book) => {
    //?? check if the book is already in the shelf here
    for (let i=0;i<shelfBooks.length; i++){
    if(book.id===shelfBooks[i].id){
      alert("aleady on the shelf");
      return
    }}
    // BookItem = { 'book': book, id: Date.now(), completed: false }
    const newBookItem = { 'book': book, id: Date.now(), completed: false }
    localStorage.setItem("shelf", JSON.stringify([newBookItem, ...shelfBooks]))
    setShelf([newBookItem, ...shelfBooks])
    // e.target.value = ""
    console.log(shelfBooks)
  }

  // ????????? why a book is being automatically added at every load
  useEffect(()=>{
    console.log("shelf: ")
    console.log(shelfBooks.length)
  },[shelfBooks])

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
      "todos",
      JSON.stringify([...shelfBooksCopy])
    )
    setShelf([...shelfBooksCopy])
  }



  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Search addToShelf={addToShelf} />}/>
        <Route path="/book-shelf" element={<Shelf 
                                                  shelfBooks={shelfBooks} 
                                                  completeRead={completeRead}
                                                  removeBook ={removeShelfBook}/>}/>
        <Route path="shopping-list" element={<ShoppingList/>} />
        <Route path="/book-shelf/:SKU" element={<BookDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
