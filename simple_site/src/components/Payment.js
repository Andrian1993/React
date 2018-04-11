import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Link
} from 'react-router-dom';


class Payment extends React.Component {
  handleClick() {
    alert('successfull');
  }
  render() {
    return(
      <div className="Payment">
        <div className='wrapper'>
          <form className='' action='' method='post'>
          <div className='cards'>
            <img src={require('../img/visa.jpg')} />
            <img src={require('../img/master.gif')} />
            <img src={require('../img/american.png')} />
          </div>
          <p>Name on card</p>
          <input
            type='text'
            className='add__name'
            placeholder='Name of Card'
            ref='name'
          />
          <p>Card number</p>
          <input
            type='email'
            className='add__email'
            placeholder='Card Number'
            ref='email'
          />
          <p>Expiry date</p>
          <input
            type='email'
            className='add__email'
            placeholder='MM/YY'
            ref='email'
          />
          <div className='payCardButton' onClick={this.handleClick.bind(this)}>
          PAY
          </div>
          <div className='backButton'>
            <Link className='link' to="/">Back</Link>
          </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Payment;
