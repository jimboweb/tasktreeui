import fetchUtil from '../util/fetchUtil'

//TODO 181209: I have to get the token from somewhere.

/**
 * Create a task
 * @param task: the task to create
 * @param parentType: "Task" or "Category"
 * @param parentId: the id of the parent
 */
class TaskApiCalls {
    createTask = (task, parentType, parentId, token)=>{
        fetchUtil.postData(parentType +"/"+parentId,token,task);
    };
}

