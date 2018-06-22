import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class CardList extends Component {
    
    static propTypes = {
      cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
  
    render() {
      const cards = this.props.cards.map((c, index) => (
        <Card key={c.id} {...c} />
      ));
      return (
        <div className='card-list'>
          {cards}
        </div>
      );
    }
  }
  
export default CardList;
  