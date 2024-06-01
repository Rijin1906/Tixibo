import React from 'react'
import p1 from "../Assets/p1.png"
import "../css Files/header.css"

export default function Header() {
  return (
    <div>
      {/* <h1>I am Header part.</h1> */}
    <div className='headDiv'>
      <div className='logo'><img src={p1}></img></div>
      <div className='user'><ul>
        <li className='Dicon'><i className="fas fa-database"></i></li>
        <li>Ticket Credits : 3 </li>
        <li className='Uicon'><i className="fas fa-user"></i></li></ul></div>
       
    </div>
    </div>
  )
}
