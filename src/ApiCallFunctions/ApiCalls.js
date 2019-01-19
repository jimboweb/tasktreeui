import fetchUtil from '../util/fetchUtil'

//todo 190118: do I really need the children to have their own methods or do I just use the parent ___object methods?

class ApiCalls {
    constructor(routeString){
        this.routeString = routeString;
    }
    /**
     * Create object
     * @param obj: the object to create
     * @param parentType: "Task", "Category" or "Event"
     * @param parentId: the id of the parent
     * @param token: xAccessToken
     * @param callback to do after obj is created
     */
    createObject = (obj, parentType, parentId, token, callback)=>{
        const jsonString = JSON.stringify(obj);
        fetchUtil.postData(
            `${this.routeString}/${parentType}/${parentId}`,
            token,
            jsonString,
            responseData=>callback(responseData));
    }
    /**
     * Modify object
     * @param obj: the modified version of obj
     * @param token: xAccessToken
     * @param callback to do after obj is created
     */

    modifyObject= (obj, token, callback)=> {
        const jsonString = JSON.stringify(obj);
        fetchUtil.putData(
            `${this.routeString}/${obj._id.toString()}`,
            token,
            jsonString,
            responseData=>callback(responseData));
    }

    /**
     * Get object
     * @param objId: the id to get
     * @param token: xAccessToken
     * @param callback to do after task is created
     */

    getObject= (objId, token, callback)=>{
        const route = `${this.routeString}/${objId}`;
        fetchUtil.getData(
            route,
            token,
            responseData => {
                callback(responseData);
            }

        );

    }
    /**
     * Delete object
     * @param objId: the id to delete
     * @param token: xAccessToken
     * @param callback to do after task is created
     */
    deleteObject=(objId, token, callback)=>{
        fetchUtil.deleteData(
            `${this.routeString}/${objId}`,
            token,
            responseDate=>callback(responseDate))
    }

    /**
     * rebase object
     * @param id: the id to rebase
     * @param newParentType: type of parent to rebase to
     * @param newParentId: id of new parent
     * @param token: xAccessToken
     * @param callback: calback after task is created
     * @returns {*|void}
     */
    rebaseObject=(id,newParentType,newParentId,token,callback)=>fetchUtil.patchData(
        `${this.routeString}/id`,
        token,
        JSON.stringify({newParentType:newParentType,parentId:newParentId}),
        callback
    )

}

export default ApiCalls