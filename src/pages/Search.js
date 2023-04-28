import React, { useState, useEffect, useRef } from 'react';
import BookInfoCard from '../components/BookInfoCard';

function Search({ addToShelf, addToWishList }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [result, setResult] = useState(<div></div>);
    // to displaying books if on local storage
    let booksPresent = useRef(false); 
    let currentSearchTerm = useRef('');
    

    // restore fetched books displaying last result when returning to search page
    useEffect(() => {
        console.log("here 1")
        const fetchedBooks = localStorage.getItem("fetchedBooks")
        currentSearchTerm.current = localStorage.getItem('searchTerm')
        if (fetchedBooks && fetchedBooks !== "undefined" && fetchedBooks !== "null") {
            setBooks(JSON.parse(fetchedBooks))
        }
    }, [])

    //Function to fetch Books
    const getBooks = async (e) => {
        e.preventDefault();
        let term = e.target[0].value;
        // setCurrentSearchTerm(term);
        currentSearchTerm.current = term;
        // console.log(e)
        if (searchTerm === '') {
            alert("Book title is required");
        }
        else {
            // make fetch request and store response
            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q= + ${searchTerm}`
                );
                // Parse JSON response into a javascript object
                const data = await response.json();
                //set the Books state to the books
                setBooks([...data.items]);
                // catch error
            } catch (e) {
                console.error(e)
            }
            e.target[0].value = '';
        }
        booksPresent.current = true;
    };

    // Function to make display of results
    const displayResult = function () {
        // if the books array is not empty, then return book-info card for each books fetched
        if (books.length > 0) {
            return (
                <>
                    <h4>Search result for {`"${currentSearchTerm.current}"`}</h4>
                    <div className='result'>
                        {books.map((book, idx) => {
                            return (<BookInfoCard book={book}
                                key={idx}
                                addToShelf={addToShelf}
                                addToWishList={addToWishList} />)
                        })}
                    </div>
                </>
            )
        }
        else {
            return (<div></div>);
        }
    }

    useEffect(() => {
        if (booksPresent.current && books!==[]) {
            // save new fetched books and search term to local storage
            localStorage.setItem("fetchedBooks",
                JSON.stringify([...books]))
            localStorage.setItem('searchTerm',
                currentSearchTerm.current)

            // display result to the search page
            setResult(displayResult());
        }
        booksPresent.current = true; // to make sure this useEffect runs when there are books loaded
    }, [books])


    return (
        <div className="search-container">
            <div className='search-page'>
                <div className="form-container" >
                    <form id="myform" onSubmit={getBooks}>
                        <div className="input-field">
                            <label htmlFor="search">Search Books</label>
                            <input type="search" id="books" onChange={(e) => { setSearchTerm(e.target.value) }} required />
                        </div>
                        <button type="submit" className="btn red">Search Books</button>
                    </form>
                </div>

                <div className='result-container'>
                    {result}
                </div>


            </div>

            <div className="overlay book-overview">

            </div>
        </div>

    )
}

export default Search