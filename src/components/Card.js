import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
    static propTypes = {
        from: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      };
    render () {
        const {from, message, image} = this.props;
         return (
             <div>
                <h4>This is a card </h4> 
                <img src={image} alt={from} />
                <p>this is who it is from: {from}</p>
                <p>this is the messsage: {message}</p>
             </div>
         );
    }
}

export default Card;