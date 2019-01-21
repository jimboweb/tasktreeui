import ModifyListActions from "./ModifyListActions";
import NoteApiCalls from '../ApiCallFunctions/NoteApiCalls'

class ModifyNoteListActions extends ModifyListActions{
    constructor(parentId,token, setStateCallback){
        super("note",parentId,token,NoteApiCalls,setStateCallback);
    }
}

export default ModifyNoteListActions;