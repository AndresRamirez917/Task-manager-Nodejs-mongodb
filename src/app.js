import express from "express";
import indexRoutes from "./routes/index.routes"
import { engine } from 'express-handlebars'
import path from "path";
import morgan from "morgan";

const app = express();
app.set("views", path.join(__dirname, "/views"))
app.engine(".hbs", engine({
    layoutDir: path.join(app.get("views"),"layouts"),
    partialsDir: path.join(app.get("views"),"partials"),
    defaultLayout: "main",
    extname: ".hbs"
}))

app.set("view engine", ".hbs")

// MIDDLEWARE
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))


// ROUTES
app.use(indexRoutes);

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")))

export default app;

