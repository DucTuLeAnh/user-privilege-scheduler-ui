import React from 'react';

/**
 * This Button will be used to query a solution from the server.
 */
class SolverButton extends React.Component {

    render() {
        return <button class="waves-light btn" onClick={this.props.requestSolution} type="button">Solve</button> 
    }
  }

export default SolverButton;
