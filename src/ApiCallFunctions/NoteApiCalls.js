import ApiCalls from "./ApiCalls";

class NoteApiCalls extends ApiCalls{
    constructor(){
        super('note');
    }
    getNote= (noteId,token, callback)=>this.getObject(noteId, token,callback);
    modifyNote=(modifiedNote,token,callback)=>this.modifyObject(modifiedNote,token,callback);
    deleteNote=(noteId,token, callback)=>this.deleteObject(noteId,token,callback);
    createNote=(newNote, parentType, parentId, token, callback)=>this.createObject(newNote,parentType,parentId,token,callback);
}

export default NoteApiCalls;