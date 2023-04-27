import React, { useState, useEffect } from 'react';
import BookInfoCard from '../components/BookInfoCard';

function Search({addToShelf, addToBuyList}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [result, setResult] = useState(<div></div>);

    //Function to getBooks
    // ?????? ERROR: expression exptected.
    const getBooks = async (e) => {
        e.preventDefault();
        let term = e.target[0].value;
        setCurrentSearchTerm(term);
        console.log(e)
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
    };

    // Function to make display of results
    const displayResult = function () {
        console.log(books)
        //check if the books array is not empty 
        if (books.length > 0) {
            return (
                <>
                    <h4>Search result for {`"${currentSearchTerm}"`}</h4>
                    <div className='result'>
                        {books.map((book, idx) => {
                            return (<BookInfoCard book={book} 
                                                    key={idx} 
                                                    addToShelf={addToShelf}
                                                    addToBuyList={addToBuyList}/>)
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
        setResult(displayResult());
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