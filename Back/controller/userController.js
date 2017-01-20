/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var hash = require('bcrypt-nodejs');

var user = require('./../model/user');

var parser = bodyParser.urlencoded({extended : false});

router.get('/' ,parser , function(req , res){
    var email = req.body.email;
    var password = req.body.password;

    user
        .find({
        email : email
        })
        .exec(function(err , data){
            if(err){
                console.log(err);
            }
            else{
                if(hash.compareSync(password , data.password)){
                    console.log(data);
                    res.writeHeader(100)
                }
            }
        })
});

router.post('/' , parser , function(req , res){

});

module.exports = router;