import fetchUtil from '../util/fetchUtil'



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
        const jsonString = JSON.stringify(modifiedCategory);
        fetchUtil.putData(modifiedCategory._id.toString(),token,jsonString,callback);
    }
}

export default TaskApiCalls