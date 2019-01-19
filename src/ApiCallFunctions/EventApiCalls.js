import ApiCalls from "./ApiCalls";

class EventApiCalls extends ApiCalls{
    constructor(){
        super('event/')
    }
    getEvent= (eventId,token, callback)=>super.getObject(eventId, token,callback);
    modifyEvent=(modifiedEvent,token,callback)=>super.modifyObject(modifiedEvent,token,callback);
    deleteEvent=(eventId,token, callback)=>super.deleteObject(eventId,token,callback);
    createEvent=(newEvent, parentType, parentId, token, callback)=>super.createObject(newEvent,parentType,parentId,token,callback);
    rebaseEvent=(eventId, newParentType, newParentId, token, callback)=>super.rebaseObject(eventId,newParentType,newParentId,token,callback);
}

export default EventApiCalls;