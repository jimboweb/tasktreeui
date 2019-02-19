import ApiCalls from "./ApiCalls";


class TaskApiCalls extends ApiCalls{
    constructor(){
        super('task');
    }
    getTask= (taskId,token, callback)=>this.getObject(taskId, token,callback);
    modifyTask=(modifiedTask,token,callback)=>this.modifyObject(modifiedTask,token,callback);
    //TODO 190216: two delete functions, one to rebase and one to delete children
    deleteTaskAndChildren=(taskId,token, callback)=>this.deleteObject(taskId,token,callback);
    deleteTaskRebaseChildren=(taskId, token, newParentType,newParentId,callback)=>this.deleteObjectRebaseChildren(taskId,token,newParentType,newParentId)
    createTask=(newTask, parentType, parentId, token, callback)=>this.createObject(newTask,parentType,parentId,token,callback);
    rebaseTask=(taskId,newParentType,newParentId,token,callback)=>this.rebaseObject(taskId,newParentType,newParentId,token,callback);
}

export default TaskApiCalls;