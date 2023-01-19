import Task from "../models/Task"
export const renderTasks = async (req, res) =>{
    const tasks = await Task.find().lean()
    res.render("index.hbs", {tasks: tasks})
}

export const creaateTasks = async (req, res) =>{
    try {
        const task = Task(req.body)
    const taskSaved = await task.save()
    console.log(taskSaved)
    res.redirect("/")
    } catch (error) {
        console.log(error)
    }
}

export const renderTaskEdit = async (req, res) =>{
    const task = await Task.findById(req.params.id).lean()
    res.render("edit.hbs", { task })
}

export const editTasks = async (req, res)=>{
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect("/")
}

export const deleteTasks = async (req, res)=>{
    const { id } = req.params;
    await Task.findByIdAndDelete(id)
    res.redirect("/")
}

export const taskToogleDone = async(req, res) =>{
    const { id } = req.params;
    const task = await Task.findById(id)
    task.done = !task.done;
    await task.save()
    res.redirect("/")
}