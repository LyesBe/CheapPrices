'user strict';

var app = angular.module("cheapPrices", [
    "ngRoute"               ,
    "products"              ,
    'fakeProducts'          ,
    'panier'                ,
    'fakeConnexion'         ,
    'login'                 ,
    'signin'                ,
    'navBar'
]);

var apiBaseUrl = "http://localhost/api";

