import ModifyListActions from "./ModifyListActions";
import EventApiCalls from "../ApiCallFunctions/EventApiCalls";

class ModifyEventListActions extends ModifyListActions{
    constructor(parentType,parentId,token, setStateCallback){
        super(parentType,parentId,token,EventApiCalls,setStateCallback);
    }
}