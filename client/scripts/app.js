var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "SomeController"

        }).
        when('/code', {
            templateUrl: "/assets/views/routes/code.html",
            controller: "SomeController"
        }).
        when('/projects', {
            templateUrl: "/assets/views/routes/projects.html",
            controller: "AnotherController"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);
