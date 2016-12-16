cheapPrinces.service('users', [
    'fakeHttp' , '$location', function($http , $location) {
        this.authenticated = false;
        var users = this;

        this.loginUsers = function(email, password) {
            users.authenticated = false;
            var loginUrl = apiBaseUrl + "/login";
            var creditentials = {
                'email': email,
                'password': password
            };
            var promise = $http.post(loginUrl, creditentials);
            promise.then(function(response) {
                users.authenticated = true;
                $location.path("/");
            }, function(error) {
                users.authenticated = true;
                $location.path("/error");
            });
            return promise;
        };
    }
]);