import fetchUtil from '../util/fetchUtil'
//todo 190105: create all the other apiCalls classes and all the methods


/**
 * Create a task
 * @param task: the task to create
 * @param parentType: "TaskObject" or "Category"
 * @param parentId: the id of the parent
 */
const TaskApiCalls = {
    createTask: (task, parentType, parentId, token, callback)=>{
        const jsonString = JSON.stringify(task);
        fetchUtil.postData(parentType +"/"+parentId,token,jsonString,callback);
    },
    modifyTask: (task, token, callback)=> {
        const jsonString = JSON.stringify(task);
        fetchUtil.putData("task/" + task._id.toString(),token,jsonString,callback);
    },
    getTask: (taskId,token,callback)=>{
        const route = 'task/' + taskId;
        fetchUtil.getData(
        route,
        token,
        responseData => {
            callback(responseData);
        }

);

}
}

export default TaskApiCalls
