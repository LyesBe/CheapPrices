/**
 * Created by Massil on 20/01/2017.
 */
var db = require('./../config/db');

var user = db.Schema({
    firstname : 'String',
    lastname : 'String',
    email :'String',
    password : 'String',
    address : 'String',
    address2 : 'String',
    postCode : 'String',
    town : 'String',
    phone : 'String',
    country : 'String'
});

module.exports = db.model('User' , user);