import React from 'react';
import './Entry.css';

/**
 * Entry that represents the information that was typed into the input form.
 */
class Entry extends React.Component {

    render() {
    return <li onClick={this.showSomething} className="entry-element">

      <div class="container">
        <div class="row">
          <div class="col s4">{this.props.name}</div>
          <div class="col s4">{this.props.privilege}</div>
          <div class="col s4">{this.props.privilegeType}</div>
        </div>
      </div>

      </li>
    }
  }

export default Entry;
