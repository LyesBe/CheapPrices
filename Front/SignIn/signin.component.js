/**
 * Created by Massil on 16/12/2016.
 */
angular.module("signin" , []).component("cpSignin" , {
    templateUrl : "SignIn/signin.html",
    controller:[
        '$scope' , 'user', function($scope , user) {
            if($scope.password == $scope.confirmPassword)
            {
                var dataClient = {
                    'firstname': $scope.firstname,
                    'lastname': $scope.lastname,
                    'email': $scope.email,
                    'password': $scope.password,
                    'birth': $scope.birth
                };
                var promise = user.inscrire(dataClient);
                promise.then(function(result){} , function(err){console.error("Erreur: " + err.stack)})
            }

        }]
});