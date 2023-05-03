import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {

  // const Logo = styled.h1`
  //   font-size: 25px;
  //   color: white;
  // `;

  // on page load make the page nav-link marked
  let searchEl = useRef();
  let shelfEl = useRef();
  let shopEl = useRef();

  const selectPage = (el)=>{
    // [searchEl, shelfEl, shopEl].forEach((pageEl)=>{
    //   if(el.target === pageEl.current){
    //     pageEl.current.classList.add("selected-page");
    //   }
    //   else{
    //     pageEl.current.classList.remove("selected-page");
    //   }
    // })

    if(el.target === searchEl.current){
      searchEl.current.classList.add("selected-page");
      shelfEl.current.classList.remove("selected-page");
      shopEl.current.classList.remove("selected-page");
    }
    else if(el.target === shelfEl.current){
      searchEl.current.classList.remove("selected-page");
      shelfEl.current.classList.add("selected-page");
      shopEl.current.classList.remove("selected-page");
    }
    else if(el.target === shopEl.current){
      searchEl.current.classList.remove("selected-page");
      shelfEl.current.classList.remove("selected-page");
      shopEl.current.classList.add("selected-page");
    }
  }

  return (
    <div className="nav-main">
      {/* <Logo>Hello Books</Logo> */}
      <div className='nav nav-body'>
        <div><Link className="nav-search nav-link" to="/" ref={searchEl} onClick={selectPage}>Discover Books</Link></div>
        <div><Link className="nav-shelf nav-link" to="/book-shelf" ref={shelfEl} onClick={selectPage}>My Bookshelf</Link></div>
        <div><Link className="nav-shopping nav-link" to="/shopping-list" ref={shopEl} onClick={selectPage}>Shopping List</Link></div>
      </div>
    </div>
  )
}

export default Nav