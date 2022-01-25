import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/tasks", (rep: Request, res: Response) => {
    return res.send("Hello")

});

app.listen(4000, () => console.log("Serveur prêt et roule !"))