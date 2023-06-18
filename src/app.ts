import express from "express";
import morgan from "morgan";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(routes);

app.get("/", (req, res) => {});

export default app;
