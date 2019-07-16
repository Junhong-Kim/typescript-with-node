import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import testRouter from "./routes/test";

const app = express();

// middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.set("port", process.env.PORT || 3000);
app.use("/api/test", testRouter);

export default app;
