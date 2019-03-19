class CategoryObject {
    constructor(
        name,
        tasks,
        events
    ) {
        this.name = name?name:'';
        this.tasks = tasks?tasks:[];
        this.events = events?events:[];
    }

}

export default CategoryObject;