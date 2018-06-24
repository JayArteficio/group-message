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
  handleSave = (card) => {
    this.setState((prevState, props) => {
      const newCard = {...card, id: this.state.nextCardId};
      return {
        nextCardId: prevState.nextCardId + 1,
        cards: [...this.state.cards, newCard],
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Message Board</h1>
        <NewCardForm onSave = {this.handleSave} />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }

}

export default App;
