// Estructura del CRUD
const router = require('express').Router();
const {
    createTask,
    obtenerTask,
    eliminarTask
} = require('../controllers/Users')

router.get('/', createTask)
router.post('/', obtenerTask)
router.delete('/', eliminarTask)

module.exports = router;