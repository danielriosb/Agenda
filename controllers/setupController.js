var Todos = require('../models/agendaModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        
        // seed database
        var starterTodos = [
            {
                username: 'admin',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'admin',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'admin',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, result){
            res.send(result);
        });

    });
}