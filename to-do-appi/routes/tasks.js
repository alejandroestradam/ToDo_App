// Estructura del CRUD
const router = require('express').Router();
const {
    createTask,
    obtenerTask,
    eliminarTask
} = require('../controllers/Tasks')

router.get('/', obtenerTask)
router.post('/', createTask)
router.delete('/', eliminarTask)

module.exports = router;