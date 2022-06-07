import ApiCalls from "../ApiCallFunctions/TaskApiCalls";

class TaskObject {
    constructor(name,
                description,
                subTasks,
                events,
                completed,
                deadline,
                startDate,
                notes,
                external,
                parent,
                parentType,
                prqTask,
                prqEvent,
                estTime,
                accountId) {
        this.name = name?name: "";
        this.description =description?description: "";
        this.subTasks=[];
        this.events=events?events:[];
        this.completed= completed?completed:"";
        this.deadline=deadline?deadline:new Date();
        this.startDate=startDate?startDate:new Date();
        this.notes=notes?notes:[];
        this.external=external?external:false;
        this.parent=parent?parent:0;
        this.parentType=parentType?parentType:"";
        this.prqTask=prqTask?prqTask:[];
        this.prqEvent=prqEvent?prqEvent:[];
        this.estTime=estTime?estTime:0;
        this.accountId=accountId?accountId:"";
    }

}

export default TaskObject;
