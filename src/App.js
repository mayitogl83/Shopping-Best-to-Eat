import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  w3_open = ()=> {
  document.getElementById("my-sidebar").setAttribute('class', 'showup' );

  }
  w3_close = ()=> {
      document.getElementById("my-sidebar").setAttribute('class', 'my-sidebar');
  }

  render() {

    function refreshPage(){
        window.location.reload();
    }

    return (
      <div className="App">
      <div role="navigation" id="navbar-cell" className="navbar-cell">
        <div className="cart-container">
          <div className="cart-icon">0</div>
        </div>
        <div className="bar-menu-container">
          <div className="bar-container" onKeyPress={this.w3_open} onClick={this.w3_open} tabIndex="0">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        </div>
      <div id="my-sidebar" className="my-sidebar">
        <button onClick={this.w3_close} className="w3-button">X</button>
          <div className="menu-items">
            <Link to='/' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); refreshPage();
              }}>Home</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close();
              }}>About</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close();
              }}>Meats</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close();
              }}>Cheeses</button>
            </Link>
            <Link to='./bookonline' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); refreshPage();
              }}>Find Us</button>
            </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
