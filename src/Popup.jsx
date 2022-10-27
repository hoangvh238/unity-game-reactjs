import React from 'react'
import Game from './Game';
import Theme from './Theme';
import { useEffect, useState} from "react";
import './Popup.css'
function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <Game></Game>
            <button className="close-btn" onClick={()=>props.setTrigger(false)}>close</button>
        </div>
    </div>
  ) :<Theme play={()=>props.setTrigger(true)}></Theme>;
}
export default Popup