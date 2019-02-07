class NoteObject{
    constructor(note, timeStamp, parent, parentType){
        this.timeStamp = timeStamp?timeStamp:new Date();
        this.note=note?note:"";
        this.parent=parent?parent:0;
        this.parentType=parentType?parentType:"";
    }
}

export default NoteObject;