import fetchUtil from '../util/fetchUtil'
import ApiCalls from './ApiCalls'



/**
 * Create a task
 * @param task: the task to create
 * @param parentType: "TaskObject" or "Category"
 * @param parentId: the id of the parent
 */
class CategoryApiCalls extends ApiCalls {
    constructor(){
        super('category');
    }

    getCategory= (id,token, callback)=>this.getObject(id, token,callback);
    modifyCategory=(modifiedCategory,token,callback)=>this.modifyObject(modifiedCategory,token,callback);
    //TODO 190216: two delete functions, one to rebase and one to delete children
    deleteCategory=(categoryId,token, callback)=>this.deleteObject(categoryId,token,callback);
    addCategory=(category,token,callback)=>fetchUtil.postData(
        //don't use ApiCalls because category is always child of root so no parentTyoe or parentId
        "category/",
        token,
        category,
        returnedData=>callback(returnedData)
    )

}

export default CategoryApiCalls