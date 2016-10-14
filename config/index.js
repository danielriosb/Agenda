var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        console.log('mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds053166.mlab.com:53166/agendadb');
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds053166.mlab.com:53166/agendadb';
    }

     
 
}