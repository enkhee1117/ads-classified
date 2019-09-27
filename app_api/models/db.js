// Connecting my Mongoose
const mongoose = require('mongoose');

// Setting up database
mongoose.connect('mongodb://localhost/Loc8r', {useNewUrlParser: true});
// Monitoring connection
mongoose.connection.on('connected', () => {
    console.log("Mongoose connected");
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Connecting Schemas
// require('./locations');