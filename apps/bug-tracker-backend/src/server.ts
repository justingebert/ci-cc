import express, {Request, Response} from "express";
import { Bug, Priority } from "./BugDto";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors for localhost 4200
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



const bugs: Bug[] = [];
let nextId = 1;

app.post("/bugs", (req: Request, res: Response) => {
    const { title, description, priority } = req.body;
    if (!title || !description || !priority || !Object.values(Priority).includes(priority)) {
        return res.status(400).json({
            error: "Invalid bug report data",
        });
    }
    const newBug: Bug = {
        id: nextId++,
        title,
        description,
        priority,
        createdAt: new Date(),
    };
    bugs.push(newBug);
    return res.status(201).json(newBug);

});

app.get("/bugs", (req: Request, res: Response) => {
    return res.json(bugs);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
