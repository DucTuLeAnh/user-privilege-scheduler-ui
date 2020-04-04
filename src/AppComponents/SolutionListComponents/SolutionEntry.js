import React from 'react';

/**
 * Represents an entry of the solution.
 * An entry is a group. Which consists of an unique group id and
 * a list of users that are assigned to that group.
 */
class SolutionEntry extends React.Component {

  constructor(props){
    super(props);
    this.renderNames = this.renderNames.bind(this);
  }

  renderNames(nameList){
    return nameList.join(", ");
  }

    render() {
    return (<li class="collection-item">
          <span class="title">Group Id: {this.props.groupId}</span>
          <div>{this.renderNames(this.props.names)}</div>
    </li>
    
      )
    }
  }

export default SolutionEntry;
