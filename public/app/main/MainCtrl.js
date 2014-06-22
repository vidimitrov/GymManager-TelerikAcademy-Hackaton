app.controller('MainCtrl', function($scope, $location) {

	$scope.admin = 'Pesho Ivanov';
    
    $scope.redirectToUsersView = function(url){
        $location.path(url);
    }

});