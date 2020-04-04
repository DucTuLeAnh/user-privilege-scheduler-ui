import SchedulerInputQuery from "../Models/SchedulerInputQuery";

/**
 * Converts user input and server response to the required formats. At construction time it also maps all string values like user name
 * or privilege name to unique id's that are required by the server.
 * The converter object can be used to reverse the mapping by using it's id methods.
 */
class SchedulerInputConverter{

  constructor(schedulerInput){
    this.schedulerInput = schedulerInput;
    this.userIdMap = this.getPropertyIdMap(schedulerInput, "user");
    this.privilegeIdMap = this.getPropertyIdMap(schedulerInput, "privilege");
    this.getUserForId = this.getUserForId.bind(this);
    this.getPrivilegeForId = this.getPrivilegeForId.bind(this)
  }

  /**
   * Converts the ui input into the format that is required by the server.
   */
  convertToSchedulerInputQuery(){
    var query = this.getSchedulerInputQuery(this.schedulerInput, this.userIdMap, this.privilegeIdMap);
    return query;
  }

  /**
   * Returns the user name for the given id. The mapping between user and id was determined during the construction of the 
   * converter object.
   * @param {id of the user} id 
   */
  getUserForId(id){
    return this.userIdMap[id];
  }

  /**
   * Returns the privilege name for the given id. The mapping between privilege and id was determined during the construction of the 
   * converter object.
   * @param {*} id 
   */
  getPrivilegeForId(id){
    return this.privilegeIdMap[id];
  }

  /**
   * Simply converts the response from the server to the required data structure for the ui.
   * Which is a mapping between groupId and a list of users in the group.
   * @param {response from the server} collection 
   */
  getGroupMap(collection){
    var groupedCollection = {};
    collection.forEach(element => {
        if(groupedCollection[element["group"]] == null){
            groupedCollection[element["group"]] = []     
        }

        groupedCollection[element["group"]].push(element["user"]);
    });
    return groupedCollection;
  }

  getPropertyIdMap = function(schedulerInput, propertyName){
    var distinctUser = [...new Set(schedulerInput.map(element => element[propertyName]))];
    var idMap = {};
    for(let i = 0; i < distinctUser.length; i++){
      idMap[distinctUser[i]] = i;
      idMap[i] = distinctUser[i];
    }
    return idMap;
  }


  getSchedulerInputQuery = function(schedulerInput, userIdMap, privilegeIdMap){
    var schedulerInputQuery = new SchedulerInputQuery();
    
    schedulerInput.forEach(element => {
      if(element.privilegeType === "Requested"){
        schedulerInputQuery.userPrivileges.push({user:userIdMap[element.user], privilege:privilegeIdMap[element.privilege]});
      }
      else if(element.privilegeType === "Forbidden"){
        schedulerInputQuery.forbiddenUserPrivileges.push({user:userIdMap[element.user], privilege:privilegeIdMap[element.privilege]});
      }
    });
    return schedulerInputQuery;
  }

}
  export default SchedulerInputConverter;