var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "SomeController"

        }).
        when('/kittehs', {
            templateUrl: "/assets/views/routes/kittehs.html",
            controller: "SomeController"
        }).
        when('/goggies', {
            templateUrl: "/assets/views/routes/goggies.html",
            controller: "AnotherController"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);
