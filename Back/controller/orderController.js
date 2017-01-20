/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var Product = require('../model/product');
var Order = require('../model/order');
var User = require('../model/user');
var ObjectId = require('mongoose').Types.ObjectId;

router.use(bodyParser.json());

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

    var productRefs = req.body.products;
    //console.log(productRefs);

    order = Order({
        products: [],
        total: 0,
        date: "2012-12-12 12:12:12",
        user: {}
    });

    productRefs.forEach(function(ref, key){
        Product.find({reference: ref.ref}).exec(function(err, product) {
            order.products.push(new ObjectId(product._id));
            order.save();
        });
    });

    /*var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    var reference = Math.random().toString(36).substring(7);
    var stock = req.body.stock;

    var order = Order({
        name: name,
        description: description,
        price: price,
        reference: reference,
        stock: stock
    }).save();*/

    var response = {
        status: "true"
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(order));
    res.end();
});

module.exports = router;