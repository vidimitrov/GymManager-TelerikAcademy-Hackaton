module.exports = function(app) {
    
    var mongoose = require('mongoose');
    var ClientCard = require('./models/ClientCard');
    var User = require('./models/User');

	// server routes ===========================================================
    
    //User requests routes
    app.get('/api/users', function(req, res){
        User
        .find()
        .exec(function(err, users){
            if (err) {
               console.log('Cannot get users! ', err); 
            }
            
            res.send(users); 
        });
    });
    
    app.get('/api/users/:id', function(req, res){
        User
        .findOne({_id: req.params.id})
        .exec(function(err, user){
            if (err) {
                console.log('Can\'t get user by id! ', err);
            }
            
            res.send(user);
        });
    });
    
    app.post('/api/users', function(req, res){
        var user = new User();
        
        user.username = req.body.username;
        user.password = req.body.password;
        user.role = req.body.role;
        
        user.save(function(err){
            if (err) {
                console.log('Cannot save user! ', err);
            }
            
            res.json({success: true, message: 'New user added!'});
        });
    });
    
    app.get('/api/clientCards', function(req, res){
        ClientCard
        .find()
        .exec(function(err, cards){
            if (err) {
               console.log('Cannot get client cards! ', err); 
            }
            
            res.send(cards); 
        });
    });
    
    app.post('/api/clientCards', function(req, res){
        var clientCard = new ClientCard();
        
        clientCard.name = req.body.name;
        clientCard.email = req.body.email;
        
        clientCard.save(function(err){
            if(err) console.log('Cannot save the client card! ', err);
        });
        
        res.json({success: true, message: 'New client card added!'});
    });
    
    app.get('/api/clientCards/:id', function(req, res){
        ClientCard
        .findOne({_id: req.params.id})
        .exec(function(err, card){
            if (err) {
                console.log('Can\'t get client card by id! ', err);
            }
            
            res.send(card);
        });
    });

	// frontend routes =========================================================
    
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};


//Cards dummy data

//        res.send([{
//            name: 'Pesho Ivanov',
//            email: 'pesho@email.com',
//            photo: 'someUrl',
//            creationDate: 'Tue 14 Jun 2014',
//            expiringDate: 'Wed 14 Jul 2014'
//        }, {
//            name: 'Drago Petkov',
//            email: 'dr@gmail.com',
//            photo: 'someUrl',
//            creationDate: 'Tue 16 Aug 2014',
//            expiringDate: 'Wed 16 Sep 2014'
//        }, {
//            name: 'Qna Todorova',
//            email: 'qna@gmail.com',
//            photo: 'someUrl',
//            creationDate: 'Tue 14 Jun 2014',
//            expiringDate: 'Wed 14 Jul 2014'
//        }]);

//Users dummy data


//        res.send([{
//            username: 'Dimitar Petkov',
//            password: 'dp@yahoo.com',
//            role: 'Boss'
//        }, {
//            username: 'Maria Stoyanova',
//            password: 'mariaS@gmail.com',
//            role: 'Admin'
//        }]);