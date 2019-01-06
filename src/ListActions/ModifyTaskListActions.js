import ModifyListActions from "./ModifyListActions";
import TaskApiCalls from "../ApiCallFunctions/TaskApiCalls";

class ModifyTaskListActions extends ModifyListActions {
    constructor(parentType,parentId,token, setStateCallback){
        super(parentType,parentId,token,TaskApiCalls,setStateCallback);
    }
}

export default ModifyTaskListActions;