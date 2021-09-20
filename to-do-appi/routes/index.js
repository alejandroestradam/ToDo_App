var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
});
router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));

module.exports = router;