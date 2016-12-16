cheapPrinces.controller("LoginController", ['$scope' , '$location' , 'users', function($scope , $location , users) {
    $scope.loginAction = function() {
        var promise = users.loginUsers($scope.email, $scope.email);
        promise.then(function(response) {
            alert("Vous êtes connectés! " + $scope.email + " " + $scope.password);
        }, function(error) {
            alert("Une erreur s'est produite!");
        });
    }

    $scope.signinAction = function() {
        $location.path("/signin");
    }
}]);