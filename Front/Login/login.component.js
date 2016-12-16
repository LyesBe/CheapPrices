/**
 * Created by Massil on 16/12/2016.
 */
angular.module("login" , []).component("cpLogin",
    {
        templateUrl : "login/login.html",
        controller : ['$scope' ,'users', function($scope  , users) {
            $scope.loginAction = function() {
                var promise = users.loginUsers($scope.email, $scope.email);
                promise.then(function(response) {
                    alert("Vous êtes connectés! " + $scope.email + " " + $scope.password);
                }, function(error) {
                    alert("Une erreur s'est produite!");
                });
            };

            $scope.signinAction = function() {
                $location.path("/signin");
            }
        }]
    }
);