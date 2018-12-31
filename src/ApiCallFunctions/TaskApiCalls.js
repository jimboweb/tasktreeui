import fetchUtil from '../util/fetchUtil'

//TODO 181209: I have to get the token from somewhere.

/**
 * Create a task
 * @param task: the task to create
 * @param parentType: "TaskObject" or "Category"
 * @param parentId: the id of the parent
 */
const TaskApiCalls = {
    createTask: (task, parentType, parentId, token, callback)=>{
        fetchUtil.postData(parentType +"/"+parentId,token,task,callback);
    },
    modifyTask: (task, token, callback)=> {
        fetchUtil.putData(task._id.toString(),token,task,callback);
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
