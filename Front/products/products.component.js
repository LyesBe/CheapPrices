/**
 * Created by Massil on 16/12/2016.
 */
angular.module("products" , ['ngRoute']).component("cpProducts" ,{
    templateUrl : "products/products.html" ,
    controller : ['$scope' ,'productService' , 'cpPanier', function($scope , $http , cpPanier)
    {
        var promise = $http.getAllProducts();
        $scope.products = [];
        promise.then(function(response)
        {
            $scope.products = response.data;
            console.log($scope.products);

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
    }]
});