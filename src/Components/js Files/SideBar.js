import React from "react";
import "../css Files/sidebar.css";
import {useState} from "react";


export default function SideBar() {

  const[isVisible, setIsVisible]= useState(false);

  function toggleHandler(){
    setIsVisible(!isVisible);
  }


  return (
    <div>
      {/* <h2 className='sidebar'>I am side bar</h2> */}
      <div className="sidebar">
        <div className="hamburger"><button onClick={toggleHandler}><i class="fas fa-minus"></i></button></div>
        {isVisible ? <div className="my-list">
          <ul>
            <li><a className="list-anchor" href="#"><i className="fas fa-pen "></i> Manage Events </a></li>
            <li> <a className="list-anchor" href="#"><i className="fas fa-ticket-alt"></i>Ticket Validator</a></li>
            <li> <a className="list-anchor" href="#"><i className="fas fa-square-full"></i>Offline Ticket </a></li>
            <li> <a className="list-anchor" href="#"> <i className="fas fa-credit-card"></i>Ticket Credits </a></li>
            <li> <a className="list-anchor" href="#"><i className="fas fa-dice"></i>Manage Variation </a></li>
            <li> <a className="list-anchor" href="#"><i class="fas fa-headset"></i>Support  </a></li>
            <li> <a className="list-anchor" href="#"><i class="fas fa-sign-out-alt"></i>Logout </a></li>
          </ul>
        </div>: ""
        
        }
        {/* <div className="my-list">
          <ul>
            <li><a className="list-anchor" href="#"><i className="fas fa-pen "></i> Manage Events </a></li>
            <li> <a className="list-anchor" href="#"><i className="fas fa-ticket-alt"></i>Ticket Validator</a></li>
            <li> <a className="list-anchor" href="#"><i className="fas fa-square-full"></i>Offline Ticket </a></li>
            <li> <a className="list-anchor" href="#"> <i className="fas fa-credit-card"></i>Ticket Credits </a></li>
            <li> <a className="list-anchor" href="#"><i className="fas fa-dice"></i>Manage Variation </a></li>
            <li> <a className="list-anchor" href="#"><i class="fas fa-headset"></i>Support  </a></li>
            <li> <a className="list-anchor" href="#"><i class="fas fa-sign-out-alt"></i>Logout </a></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
