const mongoose = require('mongoose')

const User = require('./user')

const clientSchema = new mongoose.Schema({
    // Añadir atributos específicos del cliente si es necesario
    likes : [{ type: String, required: true }],
    collections : [{ type: String, required: true }],
});

const Client = User.discriminator('Client', clientSchema);

module.exports = Client;