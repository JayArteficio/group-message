import React, {Component} from 'react';

class NewCardForm extends Component {
    static defaultProps = {
        onSave() {},
        onClose() {},
    }
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            messsage: '',
            image: '',
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {from , message, image} = this.state;
        const {onClose} = this.props;


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type='button' onclick={onClose}>
                        X
                    </button>
                    <div>
                        <label htmlFor='card-from-input' >From</label>
                        <input
                            id='card-from-input'
                            key='from'
                            name='from'
                            type='text'
                            value={from}
                            size={50}
                            autoComplete='off'
                            onChange={this.handleChange}
                        />    
                    </div>
                    <div>
                        <label htmlFor='card-message-input' >Message</label>
                        <textarea
                            id='card-message-input'
                            key='message'
                            name='Message'
                            type='text'
                            value={message}
                            rows='5'
                            cols='50'
                            autoComplete='off'
                            onChange={this.handleChange}
                        />    
                    </div>
                    <div>
                        <label htmlFor='card-image-input'>Image</label>
                        <input
                            id='card-image-input'
                            key='image'
                            name='image'
                            type='text'
                            value={image}
                            size={50}
                            autoComplete='off'
                            onChange={this.handleChange}
                        />    
                    </div>
                    <button 
                        type='button'
                        style={{alignSelf: 'flex-end', marginRight: 0}}c
                    >Save    
                    </button>
                </form>
            </div>
        )
    }
}

export default NewCardForm;