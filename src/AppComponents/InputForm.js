import React from 'react';
import './InputForm.css';
import TfPerson from './InputFormComponents/TfPerson';
import TfPrivilege from './InputFormComponents/TfPrivilege';
import AddEntryButton from './InputFormComponents/AddEntryButton';
import PrivilegeTypeCombobox from './InputFormComponents/PrivilegeTypeCombobox';

/**
 * This is the input form. It consists of 3 fields. The user name, the privilege name and the privilege type.
 */
class InputForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {user : "", privilege : "", privilegeType : "Requested"};
        this.setUser = this.setUser.bind(this);  
        this.setPrivilege = this.setPrivilege.bind(this);
        this.setPrivilegeType = this.setPrivilegeType.bind(this);
      }

      setUser(usr){
        if(usr != null){
            this.setState({
                user : usr
            })
        }
      }

      setPrivilege(priv){
          if(priv != null){
            this.setState({
                privilege : priv
            })
          }
      }

      setPrivilegeType(privType){
        if(privType != null){
            this.setState({
                privilegeType : privType
            })

      }
      }

    render() {
        return (<form id="input-form">
        <TfPerson setUser={this.setUser}></TfPerson>
        <TfPrivilege setPrivilege={this.setPrivilege}></TfPrivilege>
        <PrivilegeTypeCombobox setPrivilegeType={this.setPrivilegeType} ></PrivilegeTypeCombobox>
        <AddEntryButton addEntry={this.props.addEntry} user={this.state.user} privilege={this.state.privilege} privilegeType={this.state.privilegeType} ></AddEntryButton>
    </form>); 
    }
}

export default InputForm;