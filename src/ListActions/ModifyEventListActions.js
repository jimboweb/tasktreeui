import ModifyListActions from "./ModifyListActions";
import EventApiCalls from "../ApiCallFunctions/EventApiCalls";

class ModifyEventListActions extends ModifyListActions{
    constructor(parentId,token, setStateCallback){
        super("event",parentId,token,EventApiCalls,setStateCallback);
    }
}

export default ModifyEventListActions;