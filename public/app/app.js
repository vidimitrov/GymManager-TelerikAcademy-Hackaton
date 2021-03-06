var app = angular.module('gymManagerApp', ['ngRoute', 'ngResource', 'clientCardsFilters']);

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
        .when('/clientCards/:id', {
            templateUrl: '/partials/clientCards/cardById',
            controller: 'CardDetailsCtrl'
        });
});