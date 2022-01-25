import express, { Application, Request, Response } from "express";
import { request } from "http";
import { TaskController } from "./controller/taskController";
import { Task } from "./model/task";

const app: Application = express();
app.use(express.json())

const taskController: TaskController = new TaskController();

app.get("/tasks", (req: Request, res: Response) => {
    return res.send(taskController.tasks);
});

app.post("/tasks", (req: Request, res: Response) => {
    const {name, completed} = req.body;
    const task: Task = taskController.createTask(name, completed);
    return res.send(task);
});

app.listen(4000, () => console.log("Serveur prêt et roule !"))