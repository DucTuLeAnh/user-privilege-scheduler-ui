import React from 'react';
import M from 'materialize-css'

/**
 * Combobox to select which relationship the user has to the given privilege.
 * Wether the privilege is requested or is forbidden for the user.
 */
class PrivilegeTypeCombobox extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {privilegeType : "Requested"};
    this.handleChange = this.handleChange.bind(this);
  }

componentDidMount() {
  M.AutoInit();
}


handleChange(event){
    this.setState({privilegeType : event.target.value});
    this.props.setPrivilegeType(event.target.value);
}
  
  render(){
    return   <div class="input-field col s12">
    <select id="privilege-type" onChange={this.handleChange} value={this.state.value}>
        <option value="Requested">Requested</option>
        <option value="Forbidden">Forbidden</option>
      </select>
    <label>Privilege Type</label>
  </div>




    }
}

export default PrivilegeTypeCombobox;