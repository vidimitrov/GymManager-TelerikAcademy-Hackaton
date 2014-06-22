angular.module('clientCardsFilters', [])
.filter('todayExpCards', function() {
    return function(clientCards) {
        var filteredClientCards = [];
        var now = new Date();
        
        angular.forEach(clientCards, function(clientCard){
            var lastUpdate = new Date(clientCard.lastUpdate);
            var period = clientCard.paidPeriod;
            var expireDate = new Date();
            var expire = expireDate.setDate(lastUpdate.getDate() + period);
            expire = new Date(expire);
            var expireMonth = expire.getMonth();
            
//            console.log('last update: ', lastUpdate);
//            console.log('expire date: ', expire);
//            console.log('last - now', lastUpdate.getDate() - now.getDate());
            
            console.log(expireMonth);
            
            //Month check - expireMonth == now.getMonth()
            
            //Today exp check
            if(lastUpdate.getDate() - now.getDate() == 0) {
                filteredClientCards.push(clientCard);
            }
        })
        return filteredClientCards;
    };
})
.filter('tomorrowExpCards', function() {
    return function(clientCards) {
        var filteredClientCards = [];
        var now = new Date();
        
        angular.forEach(clientCards, function(clientCard){
            var lastUpdate = new Date(clientCard.lastUpdate);
            var period = clientCard.paidPeriod;
            var expireDate = new Date();
            var expire = expireDate.setDate(lastUpdate.getDate() + period);
            expire = new Date(expire);
            var expireMonth = expire.getMonth();
            
//            console.log('last update: ', lastUpdate);
//            console.log('expire date: ', expire);
//            console.log('last - now', lastUpdate.getDate() - now.getDate());
//            
            //console.log(expireMonth);
            
            //Month check - expireMonth == now.getMonth()
            
            //Today exp check
            if(lastUpdate.getDate() - now.getDate() == 1) {
                filteredClientCards.push(clientCard);
            }
        })
        return filteredClientCards;
    };
})
.filter('wantedExpCards', function() {
    return function(clientCards) {
        var filteredClientCards = [];
        var now = new Date();
        
        angular.forEach(clientCards, function(clientCard){
            var lastUpdate = new Date(clientCard.lastUpdate);
            var period = clientCard.paidPeriod;
            var expireDate = new Date();
            var expire = expireDate.setDate(lastUpdate.getDate() + period);
            expire = new Date(expire);
            var expireMonth = expire.getMonth();
            
//            console.log('last update: ', lastUpdate);
//            console.log('expire date: ', expire);
//            console.log('last - now', lastUpdate.getDate() - now.getDate());
//            
            //console.log(expireMonth);
            
            //Month check - expireMonth == now.getMonth()
            
            //Today exp check
            if(lastUpdate.getDate() - now.getDate() < 0) {
                filteredClientCards.push(clientCard);
            }
        })
        return filteredClientCards;
    };
});