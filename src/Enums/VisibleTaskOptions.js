const VisibleTaskOptions = Object.freeze({
    INCOMPLETE:(task)=>!task.completed,
    ALL: task=>task,
    URGENT: task=>task.deadline-task.startDate<1
});

export default VisibleTaskOptions;