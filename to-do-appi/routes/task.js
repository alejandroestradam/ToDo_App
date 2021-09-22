const router = require('express').Router();

const {
   createTask,
   getTasks,
   editTask,
   deleteTask
} = require('../controllers/task')
const auth = require('./auth');


// primer argumento es la ruta que el cliente puede ocupar
// segundo argumento es la función en el controller, que debe atender esa petición

router.post('/', createTask)
router.get('/', getTasks)
router.put('/:id', editTask)
router.delete('/:id', deleteTask)

module.exports = router;
