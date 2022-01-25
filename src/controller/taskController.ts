import { Task } from "../model/task";
import { v4 as uuid } from "uuid";

export class TaskController{
    private _tasks: Task[];

    constructor(){
        this._tasks = [];
    }

    get tasks(): Task[]{
        return this._tasks;
    }

    createTask(name: string, completed: boolean): Task{
        const task: Task = new Task(uuid(), name, completed);
        this._tasks.push(task);
        return task;
    }
}