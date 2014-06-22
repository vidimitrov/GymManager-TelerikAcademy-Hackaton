app.controller('HomeCtrl', function($scope, CardsResource) {

	$scope.cards = CardsResource.query();

});