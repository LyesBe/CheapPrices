'user strict';

var app = angular.module("cheapPrices", [
    "ngRoute"               ,
    "products"              ,
    'fakeProducts'          ,
    'panier'                ,
    'fakeConnexion'         ,
    'login'                 ,
    'signin'                ,
    'navBar'                ,
    'userService'
]);

var apiBaseUrl = "http://localhost:1337";

