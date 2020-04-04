/**
 * This is the format which is required by the server for further calculations
 */
class SchedulerInputQuery{

    constructor(){
        this.maxGroups = 5;
        this.userPrivileges = [];
        this.forbiddenUserPrivileges = [];
    }

    addUserPrivilege(userId, privilegeId){
        this.userPrivileges.push({user:userId, privilege:privilegeId});
    }

    addForbiddenUserPrivileges(userId, privilegeId){
        this.forbiddenUserPrivileges.push({user:userId, privilege:privilegeId});
    }

  }
  export default SchedulerInputQuery;