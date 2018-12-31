import fetchUtil from '../util/fetchUtil'

//TODO 181209: I have to get the token from somewhere.

/**
 * Create a task
 * @param task: the task to create
 * @param parentType: "TaskObject" or "Category"
 * @param parentId: the id of the parent
 */
const TaskApiCalls = {
    getCategory: (id,token, callback)=>{
        const route = 'category/' + id;
        fetchUtil.getData(
            route,
            token,
            responseData => {
                callback(responseData);
            }
        );

    },
    modifyCategory:(modifiedCategory,token,callback)=>{
        fetchUtil.putData(modifiedCategory._id.toString(),token,modifiedCategory,callback);
    }
}

export default TaskApiCalls