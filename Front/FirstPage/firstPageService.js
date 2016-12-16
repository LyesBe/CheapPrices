/**
 * Created by Massil on 11/12/2016.
 */
cheapPrinces.service("products" , ['fakeProducts', function($http)
{
    this.getProducts = function()
    {
        var url = apiBaseUrl + '/products';
        var promise= $http.get(url);
        return promise;
    }
}]);