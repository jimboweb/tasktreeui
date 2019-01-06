import ApiCalls from "./ApiCalls";
//todo 190105: create all the other apiCalls classes and all the methods


class TaskApiCalls extends ApiCalls{
    constructor(){
        super('task/');
    }
}

export default TaskApiCalls;