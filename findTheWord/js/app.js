window.ee = new EventEmitter();

class Word extends React.Component {
  onBtnClickHandler() {
    var myWord = ReactDOM.findDOMNode(this.refs.word).value;
    window.ee.emit('Word.add', myWord);
    this.refs.word.value = '';
  }

  render() {
    return (
      <div className='myWord'>
        <input
          className='inputWord'
          placeholder="input your word"
          defaultValue=''
          ref='word'
        ></input>
        <button
          className='wordButton'
          ref='alert_button'
          onClick={this.onBtnClickHandler.bind(this)}>
          Get
        </button>
     </div>
    );
  }
}

class Letter extends React.Component {
  onBtnClickHandler() {
    var myLetter = ReactDOM.findDOMNode(this.refs.letter).value;
    window.ee.emit('Letter.add', myLetter);
    this.refs.letter.value = '';
    ReactDOM.findDOMNode(this.refs.letter).focus();
  }

  render() {
    return (
      <div className='letter'>
        <input
          type="text"
          className="inputLetter"
          placeholder="input the letter"
          defaultValue=''
          ref='letter'
        ></input>
        <button
          className='letterButton'
          ref='alert_button'
          onClick={this.onBtnClickHandler.bind(this)}>
          Get
        </button>
     </div>
    );
  }
}

class CheckWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      mistakes: [],
      moves: 6,
      letter: '',
      word: '',
      myWord: ''
    }
  };

  componentDidMount() {
    var self = this;
    window.ee.addListener('Word.add', function(item) {
      var array = [];
      var num = item.length;
      for(let i=0; i<num; i++) {
        if(item.charAt(i) === ' ') {
          array.push(" ");
        }
        else {
          array.push("_");
        }
      }
      self.setState({array: array,
                      word: item,
                      myWord: array.join('')
      });
    });

    window.ee.addListener('Letter.add', function(item) {
      self.setState({letter: item});
      var word = self.state.word;
      var letterExp = new RegExp(item, 'ig');
      var found;
      var count = 0;
      var array = self.state.array;
      var addArr = self.state.mistakes;
      var myWord;

      if(item){
        while ((found = letterExp.exec(word)) !== null) {
          array[found.index] = item;
          myWord = array.join('');
          self.setState({array: array,
                         myWord: myWord});
          count++

          if(word.toUpperCase()===myWord.toUpperCase()){
          alert('You Win');
          }
        }

        if(!count && self.state.moves >= 0) {
          if(addArr.length < 6){
            addArr.push(item);
            self.setState({mistakes: addArr,
                           moves: 6 - addArr.length
            });
          }
          if(addArr.length === 6) {
                 alert('Game Over');
          }
        }
      }
    });
  };

  render() {
    var arr = this.state.array;
    var arr2 = this.state.mistakes;
    var article = arr.map(function(item, index) {
      return (
        <div
        className='leterIndex'
        key={index}>
          {item}
        </div>
      )
    })

    var mistakes = arr2.map(function(item, index) {
      return (
        <div
        className='mistakeBlock'
        key={index}>
          {item}
        </div>
      )
    })

  return (
      <div className='checkWord'>
        <div className="article">{this.state.myWord}</div>
        <hr />
        <div className="mistakes">{mistakes}</div>
        <hr />
        <div className="moves">mistakes:{this.state.moves}</div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <div className='inputs'>
          <Word />
          <Letter />
        </div>
        <CheckWord />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
