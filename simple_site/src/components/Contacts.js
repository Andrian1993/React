import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Contacts extends React.Component {
  render() {
    return(
      <div className="Contacts">
        <div className='wrapper'>
          <h1>Contacts</h1>
          <form className=''>
          <input
            type='text'
            className='add__name'
            placeholder='Your name'
            ref='name'
          />
          <input
            type='email'
            className='add__email'
            placeholder='Your email'
            ref='email'
          />
          <textarea
            className='add__text'
            placeholder='Your message'
            ref='text'
          ></textarea>
          <input type='submit'
                 value='submit'
                 className='sendButton'>
          </input>
          </form>
          <div className='links'>
            <div className='link_row'>
              <img src={require('../img/skype_icon.png')} />
              <p>here_your_login_skype</p>
            </div>
            <div className='link_row'>
              <img src={require('../img/icq_icon.png')} />
              <p>279679659</p>
            </div>
            <div className='link_row'>
              <img src={require('../img/email_icon.png')} />
              <p>psdhtmlcss@mail.ru</p>
            </div>
            <div className='link_row'>
              <img src={require('../img/phone_icon.png')} />
              <p>80{'\u00A0'}00{'\u00A0'}4568{'\u00A0'}55{'\u00A0'}55</p>
            </div>
            <img src={require('../img/social buttons.png')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts ;
