cheapPrinces.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "FirstPage/firstPage.html",
            controller : "FirstPageController"
        })
        .when("/login" , {
            templateUrl: "Login/login.html",
            controller: "LoginController"
        })
        .when("/signin", {
            templateUrl : "SignIn/signin.html"
        })
        .when("/firstPage" , {
            templateUrl:"FirstPage/firstPage.html"
        })
        .otherwise({ redirectTo: "/" });
});