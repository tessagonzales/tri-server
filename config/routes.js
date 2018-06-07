const users = require('../controllers/users');
const favs = require("../controllers/favs");
const sms_dispatch = require('../controllers/sms_dispatch')

module.exports = function (app) {

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

    // SMS DISPATCHING
    app.post('/api/message/dispatch', sms_dispatch.all)

    app.post('/api/message/green/dispatch/:id', sms_dispatch.selectedGreen)

    app.post('/api/message/yellow/dispatch/:id', sms_dispatch.selectedYellow)


} //end of export