/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');

var parser = bodyParser.urlencoded({extended : false});

router.get('/' , function(req , res){

});

router.post('/insert-product' , parser , function(req , res){

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));

});

module.exports = router;