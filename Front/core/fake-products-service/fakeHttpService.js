cheapPrinces.service("cpFakeHttp", function($q) {
    this.get = function(url) {

    };
    this.post = function(url, loginData) {
        var deferred = $q.defer();
        if (url == apiBaseUrl + "/login") {
            //if(loginData == "mail@adress.com")
            deferred.resolve({ data: loginTokken(1) });
        } else {
            deferred.reject("Invalid creditentials");
        }
        return deferred.promise;
    };
});

function getDatas(id) {
    return {
        'email' : "massil.kadi@ynov.com"
    };
}

function loginTokken(id) {
    return {
        'id': 1,
        'ttl': 1234,
        'userId': id
    };
}