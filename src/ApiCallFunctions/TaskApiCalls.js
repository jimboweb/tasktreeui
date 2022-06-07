import ApiCalls from "./ApiCalls";
import TaskObject from "../ObjectClasses/TaskObject";


class TaskApiCalls extends ApiCalls{
    constructor(){
        super('task');
    }
    getTask = (taskId,token, callback)=>this.getTaskRecursive(taskId, token,callback);
    modifyTask=(modifiedTask,token,callback)=>this.modifyObject(modifiedTask,token,callback);
    deleteTaskAndChildren=(taskId,token, callback)=>this.deleteObject(taskId,token,callback);
    deleteTaskRebaseChildren=(taskId, token, newParentType,newParentId,callback)=>this.deleteObjectRebaseChildren(taskId,token,newParentType,newParentId)
    createTask=(newTask, parentType, parentId, token, callback)=>this.createObject(newTask,parentType,parentId,token,callback);
    rebaseTask=(taskId,newParentType,newParentId,token,callback)=>this.rebaseObject(taskId,newParentType,newParentId,token,callback);

    getTaskRecursive=(taskId, token, callback)=>{
        let taskResponse  = this.getObject(taskId,token,callback);
        let task = new TaskObject(
          taskResponse.name,
          taskResponse.description,
          [],
          taskResponse.events,
          taskResponse.completed,
          taskResponse.deadline,
          taskResponse.startDate,
          taskResponse.notes,
          taskResponse.external,
          taskResponse.parent,
          taskResponse.parentType,
          taskResponse.prqTask,
          taskResponse.prqEvent,
          taskResponse.estTime,
          taskResponse.accountId
        );
        if(taskResponse.subTasks){
            task.subTasks=taskResponse.subTasks.map(
          (subTaskId)=>{
              this.getTaskRecursive(subTaskId,token, callback);
            })
        }
    }
}

export default TaskApiCalls;
