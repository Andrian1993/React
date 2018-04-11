import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Scrinshots extends React.Component {
  render() {
    let text = 'Sometimes the scent of seasonal hand wash is all we need to rouse our holiday spirits. Available in an array of festive fragrances, our naturally derived gel hand wash will leave your hands soft';
    let desc = 'The description for the image';
    return(
      <div className="Scrinshots">
          <div className='wrapper'>
          <h1>Scrinshots</h1>
            <div className='description'>
              <img className='desc_photo' src={require('../img/gel2.jpg')} />
              <div className='desc_text'><h2>{desc}</h2> {text} </div>
            </div>
            <div className='description'>
              <img className='desc_photo' src={require('../img/gel2.jpg')} />
              <div className='desc_text'><h2>{desc}</h2> {text} </div>
            </div>
            <div className='description'>
              <img className='desc_photo' src={require('../img/gel2.jpg')} />
              <div className='desc_text'><h2>{desc}</h2> {text} </div>
            </div>
            <div className='description'>
              <img className='desc_photo' src={require('../img/gel2.jpg')} />
              <div className='desc_text'><h2>{desc}</h2> {text} </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Scrinshots;
