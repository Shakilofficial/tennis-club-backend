import cors from "cors";
import express, { Request, Response } from "express";
import authRouter from "./app/modules/auth/auth.routes";
import router from "./app/modules/members/members.routes";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// application routes
app.use("/api/members", router);
app.use("/api/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Tennis Club Backend API");
});

export default app;
