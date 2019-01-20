import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import AboutUs from './AboutUs';
import './App.css';

class App extends Component {

  state = {
    products: [
      {
        "id": "Cheeses",
        "title": "FRENCH BRIENS CHEESE",
        "description": "Describe your service here for a newborn session. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.",
        "info": "1 hr | Photo Session",
        "price": "6.99",
        "qty": "50",
        "class": 'cheese-img',
        "mainclass": "exmpl-one"
      },
      {
        "id": "Bacon",
        "title": "SMOKED VIRGINIA STEAK",
        "description": "Describe your service here a for studio session. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.",
        "info": "1/30 hr | Photo Session",
        "price": "12.99",
        "qty": "60",
        "class": "steak-img",
        "mainclass": "exmpl-two"
      },
      {
        "id": "Olives",
        "title": "GREEK KALAMATA PEPPERS",
        "description": "Describe your service here for a couple session. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.",
        "info": "2 hrs | Photo Session",
        "price": "8.99",
        "qty": "80",
        "class": "pepper-img",
        "mainclass": "exmpl-three"
      }
    ]
  }

  w3_open = ()=> {
  document.getElementById("my-sidebar").setAttribute('class', 'showup' );

  }
  w3_close = ()=> {
      document.getElementById("my-sidebar").setAttribute('class', 'my-sidebar');
  }

  goToAnchorCero = () => {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 100);
}

  goToAnchorOne = () => {
  setTimeout(function() {
    document.getElementById('product').scrollIntoView({
    behavior: 'smooth'
    })
  }, 100);
}

  render() {

    function refreshPage(){
        window.location.reload();
    }

    return (
      <div className="App">
      <div role="navigation" id="navbar-cell" className="navbar-cell">
        <div className="cart-container">
          <div className="cart-qty-cell">0</div>
          <div className="cart-icon"></div>
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
        <button className="w3-button"
          onClick={ (event) => {
            this.w3_close(); this.goToAnchorCero();
          }}>X</button>
          <div className="menu-items">
            <Link to='/' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => {
                  this.w3_close(); this.goToAnchorCero();
                }}>Home</button>
            </Link>
            <Link to='./aboutus' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => {
                  this.w3_close(); this.goToAnchorCero();
              }}>About</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => {
                  this.w3_close(); this.goToAnchorOne();
              }}>Products</button>
            </Link>
            <Link to='./bookonline' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); refreshPage();
              }}>Find Us</button>
            </Link>
        </div>
      </div>
      <div id="navbar-desktop" className="navbar-desktop">
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ (event) => {
              this.w3_close(); this.goToAnchorCero();
            }}
          >Home</button>
        </Link>
        <Link to='./aboutus' tabIndex="-1">
          <button className="item"
            onClick={ (event) => {
              this.w3_close(); this.goToAnchorCero();
            }}
          >About</button>
        </Link>
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ (event) => {
              this.w3_close(); this.goToAnchorOne();
            }}
          >Products</button>
        </Link>
        <Link to='./bookonline' tabIndex="-1">
          <button className="item">Find Us</button>
        </Link>
        <div className="topnav-right">
        <Link to='./bookonline' tabIndex="-1">
          <div className="cart-container">
            <div className="cart-qty">0</div>
            <button className="cart-icon"></button>
          </div>
        </Link>
      </div>
      </div>
      <div id="page-content" className="content">
        <Route exact path='/' render={()=>(
          <MainPage
            products={ this.state.products }
            onShop={ this.goToAnchorOne }
          />
        ) }/>
        <Route path='/aboutus' render={()=>(
          <AboutUs
            onShop={ this.goToAnchorOne }
          />
        ) }/>
      </div>
      </div>
    );
  }
}

export default App;
