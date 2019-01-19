import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {

  render() {

    const { onShop } = this.props

    return (
      <div className="about">
      <div className="bgimg-two"></div>
      <div className="fade-in one">
        <div className="logo-container-two">
          <div className="title-logo-two">
             <div className="logo-text-two">Best</div>
             <div className="logo-text-dif-two">to</div>
             <div className="logo-text-two">Eat</div>
          </div>
          <div className="logo-adjustment">
            <div className="under-title-logo-two">Offering speciality foods since 2023</div>
            <div className="logo-field-two">
            <div className="logo-two"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="apear-in two">
        <div id="about-me" className="personal-info">
            <div className="article-title">
              <div className="line-one"></div>
              <div className="article-name">About Us</div>
              <div className="line-two"></div>
            </div>
        <div className="bussines-img"></div>
            <p>I'm a paragraph. Click here to add your own text and edit me.
             It’s easy. Just click “Edit Text” or double click me to add your
             own content and make changes to the font. Feel free to drag and
             drop me anywhere you like on your page. I’m a great place for you
             to tell a story and let your users know a little more about you.

​
            This is a great space to write long text about your company and
            your services. You can use this space to go into a little more
            detail about your company.



             Talk about your team and what services you provide. Tell your
             visitors the story of how you came up with the idea for your
             business and what makes you different from your competitors.
             Make your company stand out and show your visitors who you are.</p>
        </div>
        <div id="start-field" className="start-field">
        <Link to='./' tabIndex="-1">
          <button className="shop-button"
            onClick={ (event) => {
              onShop();
            }}
          >Start Shooping ></button>
        </Link>
        </div>
      </div>
      </div>
    )
  }
}

    export default AboutUs
