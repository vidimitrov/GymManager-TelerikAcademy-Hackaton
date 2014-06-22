app.controller('CardsCtrl', function($scope, CardsResource) {

	$scope.cards = CardsResource.query();
    
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