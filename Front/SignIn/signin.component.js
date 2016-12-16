/**
 * Created by Massil on 16/12/2016.
 */
angular.module("signin" , []).component("cpSignin" , {
    templateUrl : "SignIn/signin.html",
    controller:[
        '$scope', function($scope) {
            var dataClient = {
                'firstname': firstname,
                'lastname': lastname,
                'nickname': nickname,
                'email': email,
                'password': password,
                'confirmPassword': confirmPassword,
                'birth': birth
            };
        }]
});