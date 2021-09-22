const router = require('express').Router();

const {
   crearMascota,
   obtenerMascotas,
   modificarMascota,
   eliminarMascota
} = require('../controllers/task')


// primer argumento es la ruta que el cliente puede ocupar
// segundo argumento es la función en el controller, que debe atender esa petición

router.post('/', crearMascota)
router.get('/', obtenerMascotas)
router.put('/:id', modificarMascota)
router.delete('/:id', eliminarMascota)

module.exports = router;
