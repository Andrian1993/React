import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class About extends React.Component {
  render() {
  return(
      <div className="About">
        <div className='wrapper'>
          <div className='article'>
            <h1>About your product</h1>
            <p>
            The original visual tool for teaching proper handwashing, aseptic techniques, and general infection control
            In this age of concern over infectious diseases, security, and liability, Glo Germ™ is an effective tool to demonstrate handwashing, surface cleaning, hygiene, and containment techniques.
            It is a big mistake to assume that your employees understand the critical nature of these simple processes—you have to teach them! Not enough can be said about the importance of cleanliness, proper handwashing and infection control.
            </p>
          </div>
          <img src={require('../img/2.jpg')} />
        </div>
      </div>
    );
  }
}

export default About;
