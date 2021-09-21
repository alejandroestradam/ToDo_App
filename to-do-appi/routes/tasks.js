// Estructura del CRUD
const router = require('express').Router();
/*const {
    createTask,
    obtenerTask,
    eliminarTask
} = require('../controllers/Tasks')*/

//const Task = require('../models/Task');

//router.get('/', obtenerTask)
//router.post('/', createTask)
//router.delete('/', eliminarTask)
/*router.get('/', async (req,res) =>{
    try{
        const arrayTasksDB = await Task.find()
        console.log(arrayTasksDB);
        //res.render("Tasks",{
          //  arrayTasks : arrayTasksDB
        //})
    }
    catch(error){
        console.log(error);
    }
});*/
router.get('/',(req,res) =>{
    res.render("tasks",{
        arrayTasks:[
            {id:'jjjj', task:'comer', status:'uncompleted'},
            {id:'jajaja', task:'correr', status:'uncompleted'}
        ]
    })
})
module.exports = router;