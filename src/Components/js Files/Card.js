import React from "react";
import "../css Files/card.css";

export default function Card(props) {
  return (
    <div className="parent-card">
      <div className="child-card">
        <div className="card-left">
          {" "}
          <div className="small-card">Mini</div>
          <div className="card-details">
            <div className="card-details-heading">
            {props.name}
            </div>
            <div className="card-details-time font-color specific-timing">
              {" "}
              <div>
              <i class="fas fa-home"></i>
                <b>From</b>{props.startDate}
              </div>{" "}
              <div>
                <b>To</b>{props.endDate}
              </div>
            </div>
            <div className="card-details-location font-color">
            <i class="fas fa-map-marker"></i>{props.eventVenue}
            </div>
            <div className="specific-timing font-color">
              {" "}
              <div>
                <b>Created At :{props.startDate}</b>{}
              </div>{" "}
              <div>
                <b>Updated At :{props.endDate} </b>{}
              </div>
            </div>
          </div>
        </div>
        <div className="card-right">
          <div className="eyeIcon">
            {" "}
            <i class="fas fa-eye"></i>
          </div>
          <div>
            <button>
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
