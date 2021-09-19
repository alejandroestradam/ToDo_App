/*  Archivo controllers/Tasks.js
 *  Simulando la respuesta de objetos task
 *  en un futuro aquí se utilizarán los modelos
 */

const Task = require('../models/Task')

function createTask(req, res) {
  var task = new Task(req.body)
  res.status(201).send(task)
}

function obtenerTask(req, res) {
  var task1 = new Task('Comer', 'Uncompleted')
  res.send([task1])
}

function eliminarTask(req, res) {
  res.status(200).send(`Task ${req.params.task} deleted`);
}

module.exports = {
  createTask,
  obtenerTask,
  eliminarTask
}