import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FindUs extends Component {

  render() {

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
        <div id="contact-field" className="contact-field">
          <div className="msg-field">
            <div className="article-title">
              <div className="line-one"></div>
              <div className="article-name">Let's Talk</div>
              <div className="line-two"></div>
            </div>
          <form id="message-form">
          <label htmlFor="name-input" className="input-form">
          <div className="input-field">
            <input
              id="name-input"
              className="input-user"
              placeholder="Name"
              required
              name="name"
              type="text"
              ></input>
          </div>
          <div className="input-field">
            <input
              type="text"
              className="input-subject"
              placeholder="Last Name"
              required
              id="subject-input"
              name="lastname"
              ></input>
          </div>
          <div className="input-field">
            <input
              id="email-input"
              className="input-email"
              placeholder="Email"
              required
              name="email"
              type="email"
              ></input>
          </div>
          <div className="input-field">
            <textarea
              id="message-input"
              className="input-msg"
              placeholder="Message"
              required
              name="message"
              ></textarea>
          </div>
           <div>
             <div>
               <button id="send-button"
                 className="send-button">Send</button>
             </div>
           </div>
          </label>
          </form>
          </div>
          <div className="contact-info">
            <p>10801 Legacy Park St</p>
            <p>Houston. TX 77064</p>
            <p>Tel: 723-123-1212</p>
            <p>email@gmail.com</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
  export default FindUs
