app.controller('CardDetailsCtrl', function($scope, $routeParams, CardsResource) {    
	$scope.card = CardsResource.query().$promise.then(function(collection) {
        collection.forEach(function(card) {
            if (card._id === $routeParams.id) {
                $scope.card = card;
            }
        })
    })
    
    $scope.calculateProgress = function(card){
        var progress;
        
        var now = new Date();
        var lastUpdate = new Date(card.lastUpdate);
        
        progress = (lastUpdate.getDate() - now.getDate()) * 3;
        
        if(progress < 0){
            progress = 100;
        }
        
        return progress;
    }
});