/**
 * Created by Massil on 16/12/2016.
 */
angular.module("products" , ['ngRoute', 'ngCookies']).component("cpProducts" ,{
    templateUrl : "products/products.html" ,
    controller : ['$scope', 'productService', 'cpPanier', '$cookies', function($scope, $http, cpPanier, $cookies)
    {

        var promise = $http.getAllProducts();
        $scope.products = [];
        promise.then(function(response)
        {
            $scope.products = response.data;

        } , function(error)
        {
            $scope.error = true;
        });

        $scope.panier = cpPanier.getPanier();

        $scope.addToPanier = function(product)
        {
            cpPanier.addToPanier(product);
            $scope.total = cpPanier.total();
        };

        $scope.submitPanier = function(){
            console.log(cpPanier);
        }
    }]
});