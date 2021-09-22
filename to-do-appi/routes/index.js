var router = require('express').Router();

router.get('/', (req, res)=>{
   res.send('Bienvenido a AdoptaPet API');
});

router.use('/mascota', require('./mascota'));
router.use('/usuario', require('./usuario'));
router.use('/solicitud', require('./solicitud'))


module.exports = router;


