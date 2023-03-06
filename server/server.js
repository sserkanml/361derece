import express from "express";
import cors from "cors";
import { router as homeRoute } from "./routes/home.js";


const app = express();
const port = 5000;

app.use(cors());
app.use("/public", express.static(".." + "/public/"));
app.use("/css", express.static("../public/css/"));
app.use("/fonts", express.static("../public/fonts/"));
app.use("/img", express.static("../public/img"));
app.use("/js", express.static("../public/js/"));
app.use("/upload", express.static("../public/upload/"));
app.use("/", homeRoute);



app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.listen(port, () => {
  console.log(`this server is at http://localhost:${port}`);
});
