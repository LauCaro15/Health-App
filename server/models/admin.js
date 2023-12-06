const mongoose = require('mongoose')

const User = require('./user')

const adminSchema = new mongoose.Schema({
    // Añadir atributos específicos del cliente si es necesario
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});

const Admin = User.discriminator("Admin", adminSchema);

module.exports = Admin;