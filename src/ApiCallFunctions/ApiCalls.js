import fetchUtil from '../util/fetchUtil'
//todo 190105: create all the other apiCalls classes and all the methods


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
    createObject: (obj, parentType, parentId, token, callback)=>{
        const jsonString = JSON.stringify(obj);
        fetchUtil.postData(this.routeString+"/"+parentType +"/"+parentId,token,jsonString,callback);
    },
    /**
     * Modify object
     * @param obj: the modified version of obj
     * @param token: xAccessToken
     * @param callback to do after obj is created
     */

    modifyObject= (obj, token, callback)=> {
        const jsonString = JSON.stringify(obj);
        fetchUtil.putData(this.routeString + obj._id.toString(),token,jsonString,callback);
    }

    /**
     * Get object
     * @param objId: the id to get
     * @param token: xAccessToken
     * @param callback to do after task is created
     */

    getObject= (objId, token, callback)=>{
        const route = this.routeString + objId;
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
        fetchUtil.deleteData(this.routeString+objId,token, callback)
    }

}

export default ApiCalls