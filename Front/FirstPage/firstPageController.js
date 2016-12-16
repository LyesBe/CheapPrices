/**
 * Created by Massil on 11/12/2016.
 */
cheapPrinces.controller("FirstPageController" , ['$scope' ,'products' , 'panier', function($scope , products , panier)
{
    console.log("first page controller");
    var promise = products.getProducts();
    $scope.products = [];
    var result = [];
    promise.then(function(response)
    {
        $scope.products = response.data;

    } , function(error)
    {
        $scope.error = true;
    });

    $scope.panier = panier.getPanier();

    $scope.addToPanier = function(product)
    {
        panier.addToPanier(product);
    };

    $scope.total = function()
    {
        return panier.total();
    }
}]);