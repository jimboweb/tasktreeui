class TaskObject {
    constructor() {
        this.name = "";
        this.description = "";
        this.subTasks= [];
        this.events=[];
        this.completed="";
        this.deadline=new Date();
        this.startDate=new Date();
        this.notes=[];
        this.external=false;
        this.parent=0;
        this.parentType="";
        this.prqTask=[];
        this.prqEvent=[];
        this.estTime=0;
        this.accountId="";
    }

}

export default TaskObject;