import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Pluses extends React.Component {
  render() {
    let article = 'The use of hand sanitizers has increased with time. Especially with more stress being paid on maintaining hygiene because of H1N1, there has been an increase in the awareness of the use of hand sanitizers.';
    return(
      <div className="Pluses">
        <div className='wrapper'>
          <h1>Dignity and pluses product</h1>
            <div className='plusRow1'>
              <div className='plusIcons'>
                <img src={require('../img/plus.png')} />
                <img src={require('../img/plus.png')} />
                <img src={require('../img/plus.png')} />
              </div>
              <div className='articles'>
                <p>{article}</p>
                <p>{article}</p>
                <p>{article}</p>
              </div>
            </div>
            <div className='plusRow2'>
              <div className='plusIcons'>
                <img src={require('../img/plus.png')} />
                <img src={require('../img/plus.png')} />
                <img src={require('../img/plus.png')} />
              </div>
              <div className='articles'>
                <p>{article}</p>
                <p>{article}</p>
                <p>{article}</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Pluses;
