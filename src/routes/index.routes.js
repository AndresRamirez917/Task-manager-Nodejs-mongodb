/**
 * EN ESTE ARCHIVO EL OBJETO ROUTER SE LLAMABA APP, PERO SE CAMBIO
 * PARA MEJOR MANEJO DE LAS RUTAS AL IMPORTAR EL OBJETO ROUTER DE EXPRESS 
 */

import { Router } from "express";
import { restart } from "nodemon";
import Task from "../models/Task";
import { renderTasks } from "../controllers/task.controllers"
import { creaateTasks } from "../controllers/task.controllers";
import { renderTaskEdit } from "../controllers/task.controllers";
import { editTasks } from "../controllers/task.controllers";
import { deleteTasks } from "../controllers/task.controllers";
import { taskToogleDone } from "../controllers/task.controllers"
const router = Router()

router.get("/", renderTasks)

router.post("/task/add", creaateTasks )

router.get("/edit/:id", renderTaskEdit)

router.post("/edit/:id", editTasks)

router.get("/delete/:id", deleteTasks)

router.get("/toogleDone/:id", taskToogleDone)


export default router