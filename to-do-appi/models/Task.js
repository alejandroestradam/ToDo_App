
	const mongoose = require('mongoose')
	// Definimos el esquema para representar el objeto Mascota de la BD
	const TaskSchema = new mongoose.Schema ( {
		 // _id:Int, mongoose maneja automáticamente el atributo _id igual que MongoDB
		task:String,
		status:String

	},
	{collection: "tasks"});

	TaskSchema.methods.toAuthJSON = function(){
		return {
		  task: this.task,
		  status: this.status,
		}
	  };

	TaskSchema.methods.publicData = function(){
		return {
		  id: this.id,
		  task: this.task,
		  status: this.status
		}
	  };

	mongoose.model("task", TaskSchema)
