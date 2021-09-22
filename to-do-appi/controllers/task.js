// controllers/usuarios.js
const mongoose = require("mongoose")
const Task = mongoose.model("task")

function createTask(req, res, next) {
  const body = req.body,

  const task = new Task(body)
  task.save().then(task => {                                         //Guardando nueva tarea en MongoDB.
    return res.status(201).json(task.toAuthJSON())
  }).catch(next)
}

function getTasks(req, res, next) {                              //Obteniendo tarea de MongoDB.
  Task.find().then(tasks => {
  	res.send(tasks);
  }).catch(next);
}

function getTask(req, res, next) {                              //Obteniendo tarea desde MongoDB.
  Task.findById(req.task.id, (err, task) => {
    if (!task || err) {
      return res.sendStatus(401)
    }
    return res.json(task.publicData());
  }).catch(next);
}

function editTask(req, res, next) {
  console.log(req.task)
  Task.findById(req.task.id).then(task => {
    if (!task) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.task !== 'undefined')
      task.task = nuevaInfo.task
    if (typeof nuevaInfo.status !== 'undefined')
      task.status = nuevaInfo.status
    task.save().then(updatedTask => {                                   //Guardando tarea modificada en MongoDB.
      res.status(201).json(updatedTask.publicData())
    }).catch(next)
  }).catch(next)
}

function deleteTask(req, res) {
  Task.findOneAndDelete({ _id: req.task.id }).then(r => {         //Buscando y eliminando tarea en MongoDB.
    res.status(200).send(`Tarea ${req.params.id} eliminada: ${r}`);
  })
}

module.exports = {
  createTask,
  getTasks,
  getTask,
  editTask,
  deleteTask
}