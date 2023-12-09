import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";

import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";



function Card(props) {



  return (
    <>
      
      <div
        className="card"
      >
        <div className="card_top">
          <div className="card_top_labels">
            {props.card.id}
          </div>
          
        </div>
        <div 
          >
            {props.card.title}
          </div>
        <div className="card_title">{props.title}</div>
        <div className="card_footer">
          
            {props.card?.tag.map(el => <p key = {el} className="card_footer_item">
              <Clock className="card_footer_icon" />
              {el}
            </p>)}
         
        </div>
      </div>
    </>
  );
}

export default Card;
