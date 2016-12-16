/**
 * Created by Massil on 11/12/2016.
 */
cheapPrinces.service("fakeProducts" , function($q)
{
    console.log("coucou");
    this.get = function(url)
    {
        var deferred = $q.defer();
        if(url == apiBaseUrl + "/products")
        {
            deferred.resolve({data : getProducts()});
        }
        return deferred.promise;
    }
});

function getProducts()
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