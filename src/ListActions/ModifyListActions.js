import TaskApiCalls from "../ApiCallFunctions/TaskApiCalls";


class ModifyListActions{
    constructor(parentType,parentId,token, apiCallObject, setStateCallback){
        //fixme 190315: wow this is so wrong. createObject isn't even in here and the apiCallObject here is for creating categories, not tasks.
        this.addItem= (obj) =>  apiCallObject.createObject(
                obj,
                parentType,
                parentId,
                token,
                returnedTask => setStateCallback(returnedTask)
        );


        this.deleteItem = (objId) => apiCallObject.deleteObject(
            objId,
            token,
            returnedObject=>setStateCallback(returnedObject)
        )


    }
    
}

export default ModifyListActions;