import React from 'react';

/**
 * Button used to add the information from the form to the given list.
 */
class AddEntryButton extends React.Component {

    render() {
        return(
          <button class=" waves-light btn" 
            onClick={() => this.props.addEntry(this.props.user, this.props.privilege, this.props.privilegeType)} 
            type="button">Add Entry
          </button> 
        )
    }
  }

export default AddEntryButton;
