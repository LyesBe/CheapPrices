﻿angular.module("cheapPrices").config(function($routeProvider) {
    console.log("route");
    $routeProvider
        .when("/", {
            template:'<cp-products></cp-products>'
        })
        .when("/login" , {
            template : "<cp-login></cp-login>"
        })
        .when("/signin", {
            template : "<cp-signin></cp-signin>"
        })
        .otherwise({ redirectTo: "/" });
});