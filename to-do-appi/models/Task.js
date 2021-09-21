/*class Task {
    constructor(task, status) {
        this.task = task;
        this.status = status;
    }
  }
  module.exports = Task;*/

  const mongoose = require('mongoose');     
  const Schema = mongoose.Schema;

  const TaskSchema = new Schema({
      task: String,
      status: String
  })

  // Modelo
  const Task = mongoose.model('Task', TaskSchema);
  
  module.exports= Task;