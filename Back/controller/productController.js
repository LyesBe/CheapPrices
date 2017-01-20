/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var Product = require('../model/product');

router.use(bodyParser.json());

router.get('/', function(req , res){
    Product.find().exec(function(err, products) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(products));
        res.end();
    });
});

router.get('/:reference', function(req , res){
    Product.find({reference: req.params.reference}).exec(function(err, product) {
        console.log(product)
        console.log(req.params.reference)
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(product));
        res.end();
    });
});

router.post('/', function(req , res){
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    var reference = Math.random().toString(36).substring(7);
    var stock = req.body.stock;

    var product = Product({
        name: name,
        description: description,
        price: price,
        reference: reference,
        stock: stock
    }).save();

    var response = {
        status: "true"
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
    res.end();
});

module.exports = router;