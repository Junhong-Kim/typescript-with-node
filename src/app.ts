import express from "express";
import logger from "morgan";
import routes from "./routes";

const app = express();

app.use(logger("dev"));

app.set("port", process.env.PORT || 3000);
app.use("/", routes);

export default app;
