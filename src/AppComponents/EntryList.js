import React from 'react';
import Entry from './EntryListComponents/Entry';
import './EntryList.css';

/**
 * This list contains all entries of requested assignments. That means, which user requested which privilege,
 * or is not allowed to hold a certain privilege.
 */
class EntryList extends React.Component{

    render(){
        var completeList = []

        this.props.entries.forEach(element => {
               completeList.push(
                <Entry name={element.user} privilege={element.privilege} privilegeType={element.privilegeType}></Entry>
               ) 
        });

        return <div id="entry-list">
        <ul>
            {completeList}            
        </ul>
    </div>
    }
}

export default EntryList;