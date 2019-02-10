import React, { Component } from 'react';

class CheckingProduct extends Component {

  render() {

    return(

        <div className="product-check-container">
          {this.props.products.map((product) => (
            <div className="apear-in two" key={product.id}>
              <div className="product-check-path">Home / {product.title}</div>
            <div className="product-check-field">
              <div className="product-check-detail">
                <div className={product.mainclass}/>
                <div className="product-check-name">{product.title}</div>
                <div className="product-check-price">${product.price}</div>
                <div className="product-check-qty">
                  <input id="qty-input" type="number" name="qty" min="1" max="9"></input>
                </div>
                <div className="product-check-add">
                  <button id="add-button"
                    className="add-button"
                      onClick={ (event) => { this.props.onAddToCart(); }}
                    >Add to cart ></button>
                </div>
              </div>
              <div className="product-check-info-field">
                <div className="divisor-long-line"></div>
                <div className="product-check-info-title">Product Info</div>
                <div className="product-check-description">{product.description}</div>
                <div className="divisor-long-line"></div>
                <div className="product-check-info-title">Return Policy</div>
                <div className="product-check-policy">{product.policy}</div>
              </div>
            </div>
            </div>
          ))}
        </div>
    )
  }
}

export default CheckingProduct
