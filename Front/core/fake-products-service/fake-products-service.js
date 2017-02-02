/**
 * Created by Massil on 11/12/2016.
 */
angular.module("fakeProducts",[]).service("cpFakeProducts" , function($q)
{

    this.getAllProducts = function()
    {
        var deferred = $q.defer();
        deferred.resolve({data : listProducts()});
        return deferred.promise;
    }
});

function listProducts()
{

    return [
        {
            'img' : "image1.jpg",
            'name' : 'Produit 1',
            'price' : 10.0
        },
        {
            'img' : "image2.jpg",
            'name' : 'Produit 2',
            'price' : 20.0
        },
        {
            'img' : "image3.jpg",
            'name' : 'Produit 3',
            'price' : 30.0
        }
    ];

}