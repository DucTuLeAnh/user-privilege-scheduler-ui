import React from 'react';
import './App.css';
import EntryList from './AppComponents/EntryList';
import InputForm from './AppComponents/InputForm';
import SolverButton from './AppComponents/SolverButton';
import SchedulerInput from './Models/SchedulerInput';
import SolutionList from './AppComponents/SolutionList';
import SchedulerInputConverter from './Utils/SchedulerInputConverter';

/**
 * Entry Component of the app. All important states are stored and manipulated here and will pass them as props to
 * the child components.
 */
class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
    entries : [new SchedulerInput("Frank", "Priv_1", "Requested"), new SchedulerInput("Jonas", "Priv_1", "Requested")]
    ,solution : {}
    };
    this.addEntry = this.addEntry.bind(this);  
    this.requestSolution = this.requestSolution.bind(this);
  }

  /**
   * Adds an entry to the list of users with requested privileges.
   * @param {name of the person to add} person 
   * @param {name of the privilege to add} privilege 
   * @param {wether the privilege is requested or forbidden} privilegeType 
   */
  addEntry(person, privilege, privilegeType){
    var newState = this.state.entries;
    newState.push(new SchedulerInput(person, privilege, privilegeType));

    this.setState({
    entries: newState
    })
  }

  /**
   * Requests solution and renders it on the UI
   */
  requestSolution(){
    var converter = new SchedulerInputConverter(this.state.entries);
    var query = converter.convertToSchedulerInputQuery();
    this.handleResponse(JSON.stringify(query),converter,this);
  }

  handleResponse = function(json, converter, ctx){
    var xhttp = new XMLHttpRequest(); 
    
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.responseText);

            var groupMap = converter.getGroupMap(response["userInGroupList"]);
            
            for(var prop in groupMap){
                groupMap[prop] = groupMap[prop].map(element => converter.getUserForId(element));
            }
            ctx.setState({solution: groupMap});
        }
      };
      xhttp.open("POST", "/solve", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(json); 
  }

  render (){
    return (
      <div className="App">
        <InputForm addEntry={this.addEntry}></InputForm>
        <EntryList entries={this.state.entries}></EntryList>
        <SolverButton requestSolution={this.requestSolution}></SolverButton>
        <SolutionList solution={this.state.solution}></SolutionList>
      </div>
    );
  }
}

export default App;
