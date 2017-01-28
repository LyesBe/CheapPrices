/**
 * Created by Massil on 16/12/2016.
 */
angular.module("login" , []).component("cpLogin",
    {
        templateUrl : "login/login.html",
        controller : ['$scope' , 'user' ,function($scope , user ) {
            $scope.connect = function() {
                console.log('connect');
                var promise = user.connect($scope.email, $scope.password);
                console.log(promise);
                promise.then(function(response) {
                    if(response.data.status)
                    {
                        alert("Vous étes connectés! ");
                    }
                    else
                    {
                        alert("Vous étes connectés! ");
                    }
                }, function(error) {
                    alert("Une erreur s'est produite!");
                });
            };

            /*$scope.signinAction = function() {
                $location.path("/signin");
            }*/
        }]
    }
);