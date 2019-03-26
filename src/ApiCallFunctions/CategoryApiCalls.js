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
    deleteCategoryAndChildren=(categoryId,token, callback)=>this.deleteObject(categoryId,token,callback);
    deleteCategoryRebaseChildren=(categoryId,token,newParentType,newParentId,callback)=>this.deleteObjectRebaseChildren(categoryId,token,newParentType,newParentType,callback);
    addCategory=(category,token,callback)=>fetchUtil.postData(
        //don't use ApiCalls because category is always child of root so no parentTyoe or parentId
        "category/",
        token,
        JSON.stringify(category),
        returnedData=>callback(returnedData)
    )

}

export default CategoryApiCalls