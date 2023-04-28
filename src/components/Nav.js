import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <Link className="nav-search nav-link" to="/">Discover Books</Link>
        <Link className="nav-shelf nav-link" to="/book-shelf">My Bookshelf</Link>
        <Link className="nav-shopping nav-link" to="/shopping-list">Shopping List</Link>
    </div>
  )
}

export default Nav