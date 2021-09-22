const mongoose = require("mongoose")
const Task =  mongoose.model ("task") 

// cada ruta que se configuró en routes, necesita una function en el controller

function createTask(req, res) {

    const body = req.body;

    const task = new Task(body)
   task.save().then(newTask=>{
      res.status(201).send(newTask)
   }).catch(()=>{console.log("Error al crear la tarea")})
}

function getTasks(req, res) {
   Task.find().then(tasks=>{
      res.send(tasks)
   }).catch(()=>{console.log("No se recuperó ningun documento")})

}

function editTask(req, res) {
   Task.findById(req.id).then(task => {
      if (!task) { return res.sendStatus(401); }
      let nuevaInfo = req.body
      if (typeof nuevaInfo.task !== 'undefined')
        task.task = nuevaInfo.task
      if (typeof nuevaInfo.status !== 'undefined')
        task.status = nuevaInfo.status
      task.save().then(updatedTask => {                                   
        res.status(201).json(updatedTask.publicData())
      })
    })
}

function deleteTask(req, res) {
   Task.findOneAndDelete({ _id: req.id }).then(r => {         
     res.status(200).send(`Tarea ${req.id} eliminada: ${r}`);
   })
 }

module.exports = {
   getTasks,
   createTask,
   editTask,
   deleteTask
}