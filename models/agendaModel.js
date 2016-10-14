var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var agendaSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', agendaSchema);

module.exports = Todos;