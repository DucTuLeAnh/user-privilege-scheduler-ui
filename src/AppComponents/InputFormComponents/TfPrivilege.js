import React from 'react';

/**
 * Textfield to type in the name of the privilege.
 */
class TfPrivilege extends React.Component{

    constructor(props) {
        super(props);
        this.state = {privilege : ""};
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event){
        this.setState({privilege : event.target.value});
        this.props.setPrivilege(event.target.value);
    }

    render(){
        return  <input type="text" value={this.state.privilege} onChange={this.handleChange}/>
    }
}

export default TfPrivilege;