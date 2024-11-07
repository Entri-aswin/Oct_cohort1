import express from "express";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";
import cookieParser from "cookie-parser";

connectDB()

const app = express();
app.use(express.json());
app.use(cookieParser());

const port = 3000;



app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


app.use('/api',apiRouter)

app.all("*", (req, res) => {
    res.status(404).json({ message: "end point does not exist" });
});

// http://localhost:3000/api/user/signup