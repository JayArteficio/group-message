import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static defaultProps = {
        onNewCard() {}
    }

    static propTypes = {
        onNewCard: PropTypes.func
    }

    render() {
        return (
            <header>
                <h2>Group Card</h2>
                <nav>
                    <li><a onClick={this.props.onNewCard} >New Card</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact us</a></li>    
                </nav>
            </header>
        )
    }
}

export default Navbar;
