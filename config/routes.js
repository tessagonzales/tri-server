const users = require('../controllers/users');
const favs = require("../controllers/favs");
const sms_sent = require('../controllers/sms_sent')

module.exports= function (app) {

    // USERS
    app.get('/api/users', users.index);

    app.post('/api/users', users.create);

    app.delete('/api/users/:id', users.remove);

    app.put('/api/users/:id', users.update);

    // FAVS
    app.get('/api/favs', favs.index);
    
    app.post('/api/favs', favs.create);

    app.delete('/api/favs/:id', favs.remove);

    app.put('/api/favs/:id', favs.update);

    app.post('/api/message/send', sms_sent.send)



} //end of export