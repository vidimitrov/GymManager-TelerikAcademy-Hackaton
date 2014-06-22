app.factory('CardsResource', function($resource) {
    var CardsResource = $resource('/api/clientCards/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return CardsResource;
})