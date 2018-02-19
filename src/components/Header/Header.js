import React, { Component } from "react";
import "./Header.css";
const headerBg = require('../../assets/header-bg.jpg');

class Header extends Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);

    }


    handleClick = () => {        
        let menuBtn = this.menuBtn;
        let dropDn = this.dropDn;       
         if(dropDn.classList.contains('show-drop-down')) {
            dropDn.classList.remove('show-drop-down');           
        }   
else if(dropDn.style.display === ''){
            dropDn.classList.add('show-drop-down');
            console.log(dropDn.classList);
            return;
        }       



    }

  render() {  

    return   <div className = 'container'>
    <div className="Header">
        <ul className = 'nav-logo'>
          <li id="logo">Start Bootstrap</li>
        </ul>
        <ul className="navBar">
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>ABOUT</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
        <div className = 'hamburger-menu' ref = {(menuBtn) => this.menuBtn = menuBtn}onClick = {this.handleClick}>MENU</div>
        </div>  
        <div className = 'hamburger-drop-down' ref = {(dropDn) => {this.dropDn = dropDn}}>
        <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>        
        
        </ul>
        </div>
              
        
        <div className = 'img-container' alt = 'background image'/>    
              
    </div>
    
  }
}

export default Header;
