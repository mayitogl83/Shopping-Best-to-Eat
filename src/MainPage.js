import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class MainPage extends Component {
  render() {
    return(
    <div className="container">
    <div className="apear-in two">
      <div className="bgimg"></div>
    </div>
    <div className="fade-in one">
      <div className="logo-container">
        <div className="title-logo">
           <div className="logo-text">Best</div>
           <div className="logo-text-dif">to</div>
           <div className="logo-text">Eat</div>
        </div>
        <div className="logo-adjustment">
          <div className="under-title-logo">Savouries and sweets for the gourmet in all of us</div>
          <div className="logo-field">
          <div className="logo"></div>
          </div>
          <div id="start-field" className="start-field">
          <Link to='./bookonline' tabIndex="-1">
            <button className="start-button">Start Shooping ></button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="product-container">
      <div className="product-title">Enjoy Our Special Recommendations</div>
      <div className="product-field">
            {this.props.products.map((product) => (
              <Link key={product.id} to="./bookingform" tabIndex="-1">
              <button className="product-session" tabIndex="-1">
                <div className={product.class}/>
                <div className="product-info">
                  <div className="product-name">{product.title}</div>
                  <div className="product-price">Price: ${product.price}</div>
                  <div className="line"></div>
                </div>
                <div className="long-line"></div>
              </button>
              </Link>
            ))}
          </div>
    </div>
    </div>
    )
  }
}

export default MainPage
