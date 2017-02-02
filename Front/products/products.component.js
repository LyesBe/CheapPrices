/**
 * Created by Massil on 16/12/2016.
 */
angular.module("products" , ['ngRoute']).component("cpProducts" ,{
    templateUrl : "products/products.html" ,
    controller : ['$scope', 'productService', 'orderService', 'cpPanier', function($scope, product, orderService, cpPanier)
    {
        var promise = product.getAllProducts();
        $scope.products = [];
        promise.then(function(response)
        {
            $scope.products = response.data;

        } , function(error)
        {
            $scope.error = true;
        });

        $scope.panier = cpPanier.getPanier();

        $scope.order = function(){
            var order = {
             products :[],
             total : $scope.total,
             date : new Date(),
             user : ""
             };
             var panier = cpPanier.getPanier();
             panier.forEach(function(element){
                 var promise = product.getProduct(element.id);
                 promise.then(function(res){
                     for(var i = 0 ; i < element.number ; i++)
                     {
                         console.log("I: " + i);
                         order.products.push(res.data.data);
                     }
                 } , function(err){});

             });
             console.log(order);
             var promise = orderService.addOrder(order);
             promise.then();
        };

        $scope.addToPanier = function(product)
        {
            cpPanier.addToPanier(product);
            $scope.total = cpPanier.total();
        };


    }]
});