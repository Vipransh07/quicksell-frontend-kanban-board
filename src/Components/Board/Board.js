import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";



import "./Board.css";
import { useCustomDataContext } from "../../useCustomContext";

const priorityMapper = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent"
}

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const {grouping} = useCustomDataContext()

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {
            grouping === "priority" ? priorityMapper[props.board[0]] : props.board[0]
          }
          <span>{props.board[1].length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
        >
          <MoreHorizontal />
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board[1]?.map((item,i) => (
          <Card
            key={i}
            card={item}
          />
        ))}
        
      </div>
    </div>
  );
}

export default Board;
