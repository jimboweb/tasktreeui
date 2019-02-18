import ApiCalls from "./ApiCalls";


class TaskApiCalls extends ApiCalls{
    constructor(){
        super('task');
    }
    getTask= (taskId,token, callback)=>super.getObject(taskId, token,callback);
    modifyTask=(modifiedTask,token,callback)=>super.modifyObject(modifiedTask,token,callback);
    //TODO 190216: two delete functions, one to rebase and one to delete children
    deleteTaskAndChildren=(taskId,token, callback)=>super.deleteObject(taskId,token,callback);
    deleteTaskRebaseChildren=(taskId, token, newParentType,newParentId,callback)=>super.deleteObjectRebaseChildren(taskId,token,newParentType,newParentId)
    createTask=(newTask, parentType, parentId, token, callback)=>super.createObject(newTask,parentType,parentId,token,callback);
    rebaseTask=(taskId,newParentType,newParentId,token,callback)=>super.rebaseObject(taskId,newParentType,newParentId,token,callback);
}

export default TaskApiCalls;