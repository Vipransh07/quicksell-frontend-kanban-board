import React, {  useState } from "react";

import Board from "./Components/Board/Board";

import "./App.css";
import { useCustomDataContext } from "./useCustomContext";

function App() {
  const [settings,setOpenSetting] = useState(false)

  const {setGrouping,setOrdering,ordering,grouping,isLoading,sortedData} = useCustomDataContext()

  return (
    
     isLoading ? <div>isLoading...</div> : Object.keys(sortedData).length ? <div className="app">
     <div className="app_nav">
       <h1>Kanban Board</h1>
       <div style={{ display: 'inline-block' }}>
  <button
    style={{
      padding: '5px 10px',
      backgroundColor: 'lightblue',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
    onClick={() => {
      setOpenSetting((cur) => !cur);
    }}
  >
    Settings
  </button>
  {settings && (
    <div style={{ marginTop: '10px' }}>
      <div>
        <label style={{ marginRight: '10px' }}>Grouping</label>
        <select
          value={grouping}
          onChange={(e) => setGrouping(e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '4px',
            border: '1px solid lightgray',
          }}
        >
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label style={{ marginRight: '10px' }}>Ordering</label>
        <select
          value={ordering}
          onChange={(e) => setOrdering(e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '4px',
            border: '1px solid lightgray',
          }}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  )}
</div>

     </div>
     <div className="app_boards_container">
       <div className="app_boards">
         {Object.entries(sortedData).map((item,i) => (
           <Board
             key={i}
             board={item}             
           />
         ))}
         
       </div>
     </div>
   </div> : null
  );
}

export default App;
