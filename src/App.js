import React, { Component } from 'react';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      cards: [
        {
          id: 0,
          from: 'dad',
          message: 'I am you in 40 years...',
          image: 'dad.png',
        },
        {
          id: 1,
          from: 'dad',
          message: 'I am you in 40 years...',
          image: 'dad.png',
        },
      ],
      nextCardId: 2,
    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>Message Board</h1>
        <NewCardForm />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }

}

export default App;
