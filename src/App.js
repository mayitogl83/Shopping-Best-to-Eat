import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import CheckingProduct from './CheckingProduct';
import AboutUs from './AboutUs';
import FindUs from './FindUs';
import './App.css';

class App extends Component {

  state = {
    products: [
        {
        "id": "Cheeses",
        "title": "FRENCH BRIENS CHEESE",
        "description": "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        "price": "6.99",
        "item": "cheese-item",
        "class": 'cheese-img',
        "mainclass": "exmpl-one",
        "policy": "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
        },
        {
        "id": "Bacon",
        "title": "SMOKED VIRGINIA STEAK",
        "description": "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        "price": "12.99",
        "item": "bacon-item",
        "class": "steak-img",
        "mainclass": "exmpl-two",
        "policy": "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
        },
        {
        "id": "Olives",
        "title": "GREEK KALAMATA PEPPERS",
        "description": "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
        "price": "8.99",
        "item": "olive-item",
        "class": "pepper-img",
        "mainclass": "exmpl-three",
        "policy": "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
        }
    ]
  }

  w3_open = ()=> {
  document.getElementById("popup-menu").setAttribute('class', 'showup' );

  }
  w3_close = ()=> {
      document.getElementById("popup-menu").setAttribute('class', 'popup-menu');
  }

  checkProduct = (product) => {
    const items = this.state.products

    const itemFilter = items.filter((p) => p.id === product.id)

    this.setState(prevState => ({
      products: prevState.products = itemFilter
    }))
  }

  show_cart = ()=> {
    document.getElementById('cart-menu').setAttribute('class', 'slide');
    document.getElementById('page-content').setAttribute('style','filter: blur(3px); -webkit-filter: blur(3px)');
  }
  close_cart = ()=> {
    document.getElementById('cart-menu').setAttribute('class', 'cart-menu');
    document.getElementById('page-content').removeAttribute('style','filter: blur(3px); -webkit-filter: blur(3px)');
  }

  addQtyToCart = ()=> {

    const cartQty = document.getElementById('qty-input').value
    const itemPrice = document.getElementById('item-check-price').innerHTML
    const total = parseFloat(itemPrice) * cartQty

    if ( cartQty == 0 && cartQty == '' ) {
      document.getElementById('show-item').style.display= 'none'
      document.getElementById('cart-qty').innerHTML = '0'
      document.getElementById('cart-qty-cell').innerHTML = '0'
      document.getElementById('cart-items-qty').innerHTML = 'Cart is Empty'
      document.getElementById('cart-items-qty').style.marginLeft = '100px'
      document.getElementById('cart-items-qty').style.marginTop = '150px'
      document.getElementById('cart-content').style.backgroundColor = 'transparent'
      document.getElementById('remove-item').style.display= 'none'
      document.getElementById('total-price-header').style.display = 'none'
      document.getElementById('cart-items-qty-header').style.display = 'none'
    } else {
      document.getElementById('show-item').style.display= ''
      document.getElementById('total-price-header').style.display = ''
      document.getElementById('cart-items-qty-header').style.display = ''
      document.getElementById('cart-qty').innerHTML = cartQty
      document.getElementById('cart-items-qty').style.marginLeft = '2px'
      document.getElementById('cart-items-qty').style.marginTop = '0px'
      document.getElementById('cart-qty-cell').innerHTML = cartQty
      document.getElementById('cart-items-qty').innerHTML = cartQty
      document.getElementById('remove-item').style.display= ''
      document.getElementById('total-price').innerHTML = total
      document.getElementById('cart-content').style.backgroundColor = '#222'
    }
  }

  removeCartItem = () => {
    document.getElementById('show-item').style.display = 'none'
    document.getElementById('cart-qty').innerHTML = '0'
    document.getElementById('cart-qty-cell').innerHTML = '0'
    document.getElementById('cart-items-qty').innerHTML = 'Cart is Empty'
    document.getElementById('cart-items-qty').style.marginLeft = '100px'
    document.getElementById('cart-items-qty').style.marginTop = '150px'
    document.getElementById('cart-content').style.backgroundColor = 'transparent'
    document.getElementById('remove-item').style.display = 'none'
    document.getElementById('qty-input').value = ''
    document.getElementById('total-price-header').style.display = 'none'
    document.getElementById('cart-items-qty-header').style.display = 'none'
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

    function refreshPage() {
      setTimeout(function() {
        window.location.reload();
      }, 500);
  }

    return (
      <div className="App">
      <div id="cart-menu" className="cart-menu">
        <div className="cart-head">
          <div className="cart-title">Cart
            <div className="cart-goback"
              onClick={this.close_cart}
            >X</div>
          </div>
        </div>
        <div id="cart-content" className="cart-content">
          {this.state.products.map((product) => (
            <div id="show-item" className="show-item" key={product.id} style={{display: 'none'}}>
              <div className="item-header">
                <div className="item-name">{product.title}
                  <div id="remove-item" className="remove-item" style={{ display: 'none'}}
                    onClick={ (event) => { this.removeCartItem(); }}
                  >X</div>
                </div>
              </div>
            <div className="item-check-field">
              <div className={product.item}></div>
              <div className="item-check-detail">
                <div>Price: $</div>
                <div id="item-check-price" className="item-check-price">{product.price}</div>
              </div>
            </div>
            </div>
          ))}
          <div className="cart-items-qty-content">
            <div id="cart-items-qty-header" className="cart-items-qty-header" style={{display: 'none'}}>Items Qty:</div>
            <div id="cart-items-qty" className="cart-items-qty">Cart is empty</div>
          </div>
          <div id="total-price-header" className="total-price-header" style={{display: 'none'}}>SubTotal: $
            <div id="total-price" className="total-price"></div>
          </div>
        </div>
      </div>
      <div role="navigation" id="navbar-cell" className="navbar-cell">
        <div className="cart-container"
          onKeyPress={this.show_cart} onClick={this.show_cart}>
          <div id="cart-qty-cell" className="cart-qty-cell">0</div>
          <div className="cart-icon">
          </div>
        </div>
        <div className="bar-menu-container"
          onClick={this.close_cart}>
          <div className="bar-container" onKeyPress={this.w3_open} onClick={this.w3_open} tabIndex="0">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div id="popup-menu" className="popup-menu">
        <button className="w3-button"
          onClick={ (event) => {
            this.w3_close(); this.goToAnchorCero();
          }}>X</button>
          <div className="menu-items">
            <Link to='/' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => {
                  this.w3_close(); this.goToAnchorCero(); refreshPage();
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
                  this.w3_close(); this.goToAnchorOne(); refreshPage();
              }}>Products</button>
            </Link>
            <Link to='./findus' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); this.goToAnchorCero();
              }}>Find Us</button>
            </Link>
        </div>
      </div>
      <div id="navbar-desktop" className="navbar-desktop">
        <div id="item-container"
        className="item-container"
        onClick={this.close_cart}>
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ (event) => {
              this.w3_close(); this.goToAnchorCero(); refreshPage();
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
              this.w3_close(); this.goToAnchorOne(); refreshPage();
            }}
          >Products</button>
        </Link>
        <Link to='./findus' tabIndex="-1">
          <button className="item"
            onClick={ (event) => {
              this.w3_close(); this.goToAnchorCero();
            }}
          >Find Us</button>
        </Link>
        </div>
        <div className="topnav-right">
          <div className="cart-container"
          onKeyPress={this.show_cart} onClick={this.show_cart}>
            <div id="cart-qty" className="cart-qty">0</div>
            <button className="cart-icon"></button>
          </div>
      </div>
      </div>
      <div id="page-content"
      className="content"
      onClick={this.close_cart}>
        <Route exact path='/' render={()=>(
          <MainPage
            products={ this.state.products }
            onProductCheck={ this.goToAnchorCero }
            onShop={ this.goToAnchorOne }
            onSelectProduct={ this.checkProduct }
          />
        ) }/>
        <Route exact path='/checkingproduct' render={()=>(
          <CheckingProduct
            products={ this.state.products }
            onAddToCart={ this.addQtyToCart }
          />
        ) }/>
        <Route path='/aboutus' render={()=>(
          <AboutUs
            onShop={ this.goToAnchorOne }
          />
        ) }/>
        <Route path='/findus' render={()=>(
          <FindUs
            onShop={ this.goToAnchorOne }
          />
        ) }/>
      </div>
      </div>
    );
  }
}

export default App;
