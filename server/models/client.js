const mongoose = require('mongoose')

const User = require('./user')

const clientSchema = new mongoose.Schema({
    // Añadir atributos específicos del cliente si es necesario
    likes : [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    collections : [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});

const Client = User.discriminator('Client', clientSchema);

module.exports = Client;