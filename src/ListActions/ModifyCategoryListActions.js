import ModifyListActions from "./ModifyListActions";
import CategoryApiCalls from "../ApiCallFunctions/CategoryApiCalls";

class ModifyEventListActions extends ModifyListActions{
    constructor(parentId,token, setStateCallback){
        super("category",parentId,token,CategoryApiCalls,setStateCallback);
    }
}