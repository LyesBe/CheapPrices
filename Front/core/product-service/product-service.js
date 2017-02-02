/**
 * Created by Massil on 02/02/2017.
 */
angular.module('product' , [])
.service('productService' , function ($q) {
    this.getAllProducts = function()
    {
        var defer = $q.defer();

        return defer.promise;
    }
})