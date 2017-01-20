/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var hash = require('bcrypt-nodejs');

var User = require('./../model/user');

//var parser = bodyParser.urlencoded({extended : false});

router.use(bodyParser.json());

router.post('/'  , function(req , res){
    var email = req.body.email;
    var password = req.body.password;

    User
        .find({
        email : email
        })
        .exec(function(err , data){
            if(err){
                console.log(err);
            }
            else{
                if(hash.compareSync(password , data[0].password)) {
                    console.log(data);
                    res.send({status : true , profile : data});
                    res.end();
                }
            }
        });
});

router.put('/' , function(req , res){
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;
    var address = req.body.address;
    var address2 = req.body.address2;
    var postCode = req.body.postCode;
    var town = req.body.town;
    var phone = req.body.phone;
    var country = req.body.country;

    var user = User({
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : hash.hashSync(password),
        address : address,
        address2 : address2,
        postCode : postCode,
        town : town,
        phone : phone,
        country : country
    });

    user.save();
    res.send(JSON.stringify({status : true}));
    res.end();
});

module.exports = router;