import ModifyListActions from "./ModifyListActions";
import TaskApiCalls from "../ApiCallFunctions/TaskApiCalls";

class ModifyTaskListActions extends ModifyListActions {
    constructor(parentId,token, setStateCallback){
        super("task",parentId,token,TaskApiCalls,setStateCallback);
    }
}

export default ModifyTaskListActions;