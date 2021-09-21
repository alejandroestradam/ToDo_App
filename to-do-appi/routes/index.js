var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to ToDo api');
});
router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));

module.exports = router;