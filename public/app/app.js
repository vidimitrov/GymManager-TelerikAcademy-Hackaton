var app = angular.module('gymManagerApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'HomeCtrl'
        })
        .when('/clientCards', {
            templateUrl: '/partials/clientCards/allCards',
            controller: 'CardsCtrl'
        })
        //Today panel
//        .when('', {
//            
//        });
});