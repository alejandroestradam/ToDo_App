var router = require('express').Router();

router.get('/', (req, res)=>{
   res.send('Bienvenido a ToDo App API');
});

router.use('/task', require('./task'));
router.use('/usuario', require('./usuario'));


module.exports = router;


