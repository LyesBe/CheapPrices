/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');

var parser = bodyParser.urlencoded({extended : false});

router.get('/' , function(req , res){

});

router.post('/' , parser , function(req , res){

});

module.exports = router;