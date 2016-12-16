/**
 * Created by Massil on 11/12/2016.
 */
angular.module("panier" , []).service("cpPanier" , [function(){
    var panier = [];

    this.addToPanier = function(product){
        panier.push({
            'name' : product.name,
            'price' : product.price,
            'number' : 1
        });
    };

    this.getPanier = function()
    {
        return panier;
    };

    this.total = function()
    {
        var log;
        var total = 0;
        angular.forEach(panier , function(key , value)
        {
            total+=key.price;
        } , log);
        return total;
    }
}]);