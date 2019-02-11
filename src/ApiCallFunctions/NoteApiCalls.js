import ApiCalls from "./ApiCalls";

class NoteApiCalls extends ApiCalls{
    constructor(){
        super('note');
    }
    getNote= (noteId,token, callback)=>super.getObject(noteId, token,callback);
    modifyNote=(modifiedNote,token,callback)=>super.modifyObject(modifiedNote,token,callback);
    deleteNote=(noteId,token, callback)=>super.deleteObject(noteId,token,callback);
    createNote=(newNote, parentType, parentId, token, callback)=>super.createObject(newNote,parentType,parentId,token,callback);
}

export default NoteApiCalls;