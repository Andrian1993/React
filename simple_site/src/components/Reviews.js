import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Reviews extends React.Component {
  render() {
    let text = 'Consider the benefit of each of your features. How does your product make your customers feel happier, healthier, or more productive? Which problems, glitches, and hassle does your product help solve?';
    return(
      <div className="Reviews">
        <div className='wrapper'>
          <h1>Dignity and pluses product</h1>
          <div className='description'>
            <img className='desc_photo' src={require('../img/Ashton.jpg')} />
            <div className='rev_field'>
              <i className='desc_text'> {text} </i>
            </div>
          </div>
          <div className='description'>
            <img className='desc_photo' src={require('../img/Camila.jpg')} />
            <div className='rev_field'>
              <i className='desc_text'> {text} </i>
            </div>
          </div>
          <div className='description'>
            <img className='desc_photo' src={require('../img/Logan.jpg')} />
            <div className='rev_field'>
              <i className='desc_text'> {text} </i>
            </div>
          </div>
          <div className='description'>
            <img className='desc_photo' src={require('../img/Sam.jpg')} />
            <div className='rev_field'>
              <i className='desc_text'> {text} </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
