'user strict';

var app = angular.module("cheapPrices", [
    "ngRoute"               ,
    "products"              ,
    'panier'                ,
    'product'               ,
    'login'                 ,
    'signin'                ,
    'navBar'                ,
    'userService'           ,
    'order'
]);

var apiBaseUrl = "http://localhost:1337";

