class EventObject{
   constructor(name,
               dateTime,
               length,
               notes,
               prqTask,
               prqEvents,
               parent,
               parentType,
               completed,
               prevDates,
               accoundId){
       this.name = name?name:"";
       this.dateTime = dateTime?dateTime:new Date();
       this.length = length?tlength:0;
       this.notes = notes?notes:[];
       this.prqTask = prqTask?prqTask:[];
       this.prqEvents = prqEvents?prqEvents:[];
       this.parent = parent?parent:0;
       this.completed = completed?completed:false;
       this.prevDates = prevDates?prevDates:[];
       this.accountId = accoundId?accoundId:0;

   }

}

export default EventObject;