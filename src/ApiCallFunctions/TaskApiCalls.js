import ApiCalls from "./ApiCalls";
//todo 190105: create all the other apiCalls classes and all the methods


class TaskApiCalls extends ApiCalls{
    constructor(){
        super('task/');
    }
    getTask= (taskId,token, callback)=>super.getObject(taskId, token,callback);
    modifyTask=(modifiedTask,token,callback)=>super.modifyObject(modifiedTask,token,callback);
    //TODO 190118: need to change the delete because it needs to ask if children will be deleted or rebased
    deleteTask=(taskId,token, callback)=>super.deleteObject(taskId,token,callback);
    createTask=(newTask, parentType, parentId, token, callback)=>super.createObject(newTask,parentType,parentId,token,callback);
    rebaseTask=(taskId,newParentType,newParentId,token,callback)=>super.rebaseObject(taskId,newParentType,newParentId,token,callback);
}

export default TaskApiCalls;