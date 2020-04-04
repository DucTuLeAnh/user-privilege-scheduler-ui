import React from 'react';

/**
 * Textfield to type in the name of a person.
 */
class TfPerson extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {user : ""};
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event){
        this.setState({user : event.target.value});
        this.props.setUser(event.target.value);
    }

    render(){
        return  <input type="text" value={this.state.user} onChange={this.handleChange} />
    }
}

export default TfPerson;