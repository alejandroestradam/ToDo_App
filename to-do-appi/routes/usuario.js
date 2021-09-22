const router = require('express').Router();
const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
} = require('../controllers/usuario')
const auth = require('./auth');

router.post('/', crearUsuario)
router.get('/', auth.requerido, obtenerUsuarios)
router.get('/:id', auth.requerido, obtenerUsuario);
router.put('/:id', auth.requerido, modificarUsuario)
router.delete('/:id', auth.requerido, eliminarUsuario)
router.post('/entrar', iniciarSesion)

module.exports = router;
