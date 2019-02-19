import ApiCalls from "./ApiCalls";


class EventApiCalls extends ApiCalls{
    constructor(){
        super('event')
    }
    getEvent= (eventId,token, callback)=>this.getObject(eventId, token,callback);
    modifyEvent=(modifiedEvent,token,callback)=>this.modifyObject(modifiedEvent,token,callback);
    deleteEvent=(eventId,token, callback)=>this.deleteObject(eventId,token,callback);
    createEvent=(newEvent, parentType, parentId, token, callback)=>this.createObject(newEvent,parentType,parentId,token,callback);
    rebaseEvent=(eventId, newParentType, newParentId, token, callback)=>this.rebaseObject(eventId,newParentType,newParentId,token,callback);
}

export default EventApiCalls;