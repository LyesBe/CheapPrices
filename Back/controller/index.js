/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();

router.use('/user' , require('./userController'));

module.exports = router;