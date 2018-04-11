import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Holiday'
    }
  }

  render() {
    let icon = function() {

        for(let i=0; i<5; i++){
          return(
          <img src={require('../img/icon.png')} />
          );
        }
    }
    return(
      <div className="Header">
        <div className='wrapper'>
            <img className='productImage' src={require('../img/gel.jpeg')} />
          <div className='productName'>{this.state.name}</div>
          <div className='icon'>
            <img src={require('../img/icon.png')} />
            <img src={require('../img/icon.png')} />
            <img src={require('../img/icon.png')} />
            <img src={require('../img/icon.png')} />
          </div>
          <div className='productInfo'>
            <p>This is gel hand wash</p>
            <p>Nourishing hand wash</p>
            <p>Tell us about the advanteges and merits</p>
            <p>Associate the page with the payment system</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
