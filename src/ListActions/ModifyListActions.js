import TaskApiCalls from "../ApiCallFunctions/TaskApiCalls";

//TODO 181231: add create & delete operations for all branch types

class ModifyListActions{
    constructor(parentType,parentId,token, apiCallObject, setStateCallback){
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