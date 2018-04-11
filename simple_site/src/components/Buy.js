import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Link
} from 'react-router-dom';


class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [ '1. Porro officia cumque sint deleniti;',
                 '2. Тemo facere rem vitae odit;',
                 '3. Cum odio, iste quia doloribus autem;',
                 '4. Porro officia cumque sint deleniti;',
                 '5. Тemo facere rem vitae odit;',
                 '6. Cum odio, iste quia doloribus autem;',
                 '7. Porro officia cumque sint deleniti;',
                 '8. Тemo facere rem vitae odit;',
                 '9. Cum odio, iste quia doloribus autem;',
                 '10. Porro officia cumque sint deleniti;',
                 '11. Тemo facere rem vitae odit;',
                 '12. Cum odio, iste quia doloribus autem;',
      ]
    }
  }




  render() {
    let showArticle = (num) => {
      let rows = [];
      for(let i = 0; i<num; i++) {
        rows.push(this.state.article[i]);
      }
      let viewRows = rows.map(function(item, index){
        return(
          <div className='words' key={index}>{item}<br /></div>
        );
      })
      return(viewRows);
   }

    return(
      <div className="Buy">
        <div className='wrapper'>
          <h1>Buy it now</h1>
          <div className='standart'>
            <p>Standart</p>
            <div className='list'>{showArticle(4)}</div>
            <div className="price">$100</div>
            <div className="payButton">
              <Link className='link' to="/Payment">BUY</Link>
            </div>
          </div>
          <div className='premium'>
            <p>Premium</p>
            <div className='list'>{showArticle(8)}</div>
            <div className="price">$150</div>
            <div className="payButton">
            <Link className='link' to="/Payment">BUY</Link>
            </div>
          </div>
          <div className='lux'>
            <p>Lux</p>
            <div className='list'>{showArticle(12)}</div>
            <div className="price">$200</div>
            <div className="payButton">
            <Link className='link' to="/Payment">BUY</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
