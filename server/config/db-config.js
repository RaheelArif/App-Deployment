var mongoose = require('mongoose')

var db_url = 'mongodb://Raheel Arif:raheel@400.mlab.com:19095/users'
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });