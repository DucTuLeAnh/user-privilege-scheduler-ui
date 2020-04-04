import React from 'react';
import SolutionEntry from './SolutionListComponents/SolutionEntry';

/**
 * This list contains the solution. It lists all the groups. Every group has an unique id
 * and contains the users assigned to it.
 */
class SolutionList extends React.Component{

    render(){
        var completeList = []

        Object.keys(this.props.solution).forEach(groupId =>{
            completeList.push(
                <SolutionEntry groupId={groupId} names={this.props.solution[groupId]}></SolutionEntry>
            )
        })

        return <div id="solution-list">
        <h5>Solution:</h5>
        <ul class="collection">
            {completeList}            
        </ul>
    </div>
    }

}

export default SolutionList;