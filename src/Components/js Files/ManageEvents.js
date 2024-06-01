import React, { useState } from "react";
import "../css Files/manageEvent.css";
import Card from "./Card";
import Form from "./Form";


export default function ManageEvents() {

  const[isFlag, setIsFlag]= useState(false);

function newEventHandler(e){
e.preventDefault();
setIsFlag(!isFlag);

console.log("Clicked");
  }
  return (
    <div className="manage-events">
      <div>
        <p className="header-manage-events">Manage Events</p>
      </div>
      <div className="showing-part">
        <p className="underline">Active Events</p> <p>Expired Events</p>
      </div>
      <div className="manage-events-part2">
        <div className="search-bar">
          <div className="inside-search-bar"><i className="fas fa-search"></i></div>
          <div className="inside-para">Search Event</div>
        </div>
        <div className="event-button">
        <button type="button" class="btn btn-primary btn-sm" onClick={newEventHandler}>Create New Event</button>
        </div>
      </div>

      <div>{isFlag?<Card/>:<Form/>}</div>
    </div>
  );
}
