import ModifyListActions from "./ModifyListActions";
import NoteApiCalls from '../ApiCallFunctions/NoteApiCalls'

class ModifyNoteListActions extends ModifyListActions{
    constructor(parentType,parentId,token, setStateCallback){
        super(parentType,parentId,token,NoteApiCalls,setStateCallback);
    }
}