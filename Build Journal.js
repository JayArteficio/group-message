Build Journal:

1. This app will be like a video message for someone's birthday or wedding. It'll have a bunch of friends portriants with their message onHover. 
v.1 will have the ability to add a picture, and quote
v.2 will have the ability to ability to record audio messages onclick 
v.3 will have the ability to store photos in DB somehow along with audio vs just an image link 
v.4 will have log-ins so that other people can use this app. 
    ie. someone will log-in, make a message board, send it to people to populate with the write-only log-ins. then they sill send it to the receppient with the log-n and full control.  

2. first step is to make a simple react app like the recipe app...audio

3. Step 1; throw data on page.

4. Rememeber make it mobile first 

5. made the skeleton with state. 

6. add form then add functionality, will need to decide on how to store data. 
   will eventually need it to persist. and not just be hard-coded. 

7. note about for which is htmlFor in JSX (it basically lets you click on the whole form to access the input field )

   https://stackoverflow.com/questions/18432376/what-does-for-attribute-do-in-html-label-tag
   The <label> tag allows you to click on the label, and it will be treated like clicking on the associated input element. There are two ways to create this association:

    First, you can wrap the label element around the input element:

    <label>Input here:
        <input type='text' name='theinput' id='theinput'>
    </label>
    The other way is to use the for attribute, giving it the ID of the associated input:

    <label for="theinput">Input here:</label>
    <input type='text' name='whatever' id='theinput'>
    This is especially useful for use with checkboxes and buttons, since it means you can check the box by clicking on the associated text instead of having to hit the box itself.

8. setting state to handle each keystroke input:

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    //this syntax works because name and value are the same word. 
    ...in form 
    <input 
        name='from'
        value={from}
        onChange={this.handleChange} />


9. got tripped up with saving a form to state.  the problem was my onSubmit  wasn't working because my form type was set to 'button' instead of submit.  

    Here is the recipe for saving a form into state 

    1. Create form in form.js 
        -make sure  <button type='submit'>
                       Save    
                    </button>
        //type needs to submit in order for onSubmit to work
        
        -the top <form> wrapper must be
            <form onSubmit = {this.handleSubmit} >
        //this tells it that once the submit button is pressed, need to 
        //run the handleSubmit function 

        -create defaultProp as a function 
            class NewCardForm extends Component {
                static defaultProps = {
                    onSave() {},
                }

    2. Make the method/function in the same file 

            handleSubmit = (e) => {
                e.preventDefault();
                this.props.onSave({...this.state});
                this.setState({
                    from: '',
                    message: '',
                    image: '',
                })
            }
            //e stands for event 
            //preventDefault stops it from making an html request and refreshing the page 
            //next line runs the onSave function with the state data passed into it 
            //finally, clears the state so form is blank again 

    3. in main app, create the handleSave function 

      handleSave = (card) => {
            this.setState((prevState, props) => {
            const newCard = {...card, id: this.state.nextCardId};
            return {
                nextCardId: prevState.nextCardId + 1,
                cards: [...this.state.cards, newCard],
            }
            });
        } 

        //sets state with previous state and the props pushed into it 
        //sets newCard as the card/props data, and the nextCardId 
        //returns the updated nexCardId (added 1 to it)
        //sets cards as the current state of cards with the newCard added to it.

    4. add handleSave function as a prop 
        <NewCardForm onSave = {this.handleSave} />

        //ie when onSave is callled, it runs the handleSave function 
      
10. scratch using modal for form.  keep it on the same page so user can check other messages while they decide.  
    also, keep making the skeleton, with very basic functionality. more important to get a working skeleton before adding improvements

11.  implement show form, and close form 

12. how to show form: 
        -put showFrom in main app's state
        showForm: false,
        -pull it from state in render method 
        render() {
            const {showForm} = this.state;
        -add to return with a conditional 
        { showForm? <NewCardForm onSave = {this.handleSave} /> : null }

        Adding the showForm button in the navbar
        -pass a prop function from app to the navbar component
        <Navbar onNewCard={() => this.setState({showForm: true})}/>
        -receive that prop in the Navbar component

            import React, { Component } from 'react';
            import PropTypes from 'prop-types';
            
            class Navbar extends Component {
                static defaultProps = {
                    onNewCard() {}
                }
            
                static propTypes = {
                    onNewCard: PropTypes.func
                }
            ...
            <li><a onClick={this.props.onNewCard} >New Card</a></li>

13. how to hide the form 
    - on the form component, add the callback on the button 
    <button type='button' onClick={this.props.onClose}>X</button>
    -add it to the defaultProps 
    static defaultProps = {
        onSave() {},
        onClose() {},
    }
    -pass it from the main app 
    <NewCardForm 
    onClose = {()=>this.setState({showForm: false})}   

    -hide the form on submit 
        in HandleSave method, add this to update state,
        return {
            nextCardId: prevState.nextCardId + 1,
            cards: [...this.state.cards, newCard],
            showForm: false,