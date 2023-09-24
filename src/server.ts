import express, { Router, Request, Response } from "express";

const app = express();
const router = Router();

app.use(express.json());

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

app.use(router);
app.listen(3000, () => console.log("Server running on port 3000"));


