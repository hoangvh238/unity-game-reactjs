import React from 'react'
import './index.css';
import { useEffect, useState} from "react";
import Notification from './Notification';
function Theme(props) {
  const[isRead,SetIsRead] = useState(2);
  const handleClick = () =>{
      SetIsRead(isRead+1);
  }
  return (
    <div><header>
    <div class="nav container">
      <a href="index.html" class="logo">Unlimited<span>Game</span></a>
      <div class="nav-icons">
        <i onClick={()=>handleClick()} class='bx bx-notification  bx-burst' id="noti-icon"><span></span></i>
        <a href="https://drive.google.com/file/d/19COwKBbEM2ZNrwCXS0TwZEKACn8GmNBw/view">
        <i class='bx bx-download' id="down-icon"></i>
        </a>
      
        <div class="menu-icons">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
      {(isRead%2==0)?"":<Notification></Notification>}
    </div>
    
  </header>
   <section class="home container" id="home">
      <img src="./img/home.png" alt=""/>
      <div className="home-text">
        <h1>PROTECT YOUR PLANE !</h1>
        <button onClick={()=>props.play(true)}class="btn-play">PLAY NOW</button>
      </div>
    </section>
  </div>
  )
}
export default Theme