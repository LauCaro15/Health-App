const Client = require('../models/client');
const User = require('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require("../utils/jwt");


//POST
const register = async (req, res) => {
    const { name, lastname, email, password } = req.body;

    if (email != null) {

        const crypt_password = await bcrypt.genSalt(10);
        const final_password = await bcrypt.hash(password, crypt_password);

        const new_client = await Client({
            name,
            lastname,
            email: email.toLowerCase(),
            password: final_password,
            likes: [],
            collections: [],
        });

        console.log("Cliente creado:" + new_client);

        const clientDB = await new_client.save();
        res.status(201).json(clientDB)
    } else {
        console.log("Faltan campos requeridos");
    }
};

//LOGIN

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        if (!email || !password) {
            throw new Error("El email y la contraseña son obligatorios");

        }
        const emailLowerCase = email.toLowerCase();
        const clientStore = await User.findOne({ email: emailLowerCase }).exec();
        if (!clientStore) {
            throw new Error("El usuario no existe");
        }
        const check = await bcrypt.compare(password, clientStore.password);
        if (!check) {
            throw new Error("Contraseña incorrecta");
        }
        if (!clientStore.active) {
            throw new Error("Usuario no autorizado o no activo");
        }
        res.status(200).send({
            access: jwt.createAccessToken(clientStore),
        });
    } catch (error) {
        res.status(403).send({ msg: error.message });
        console.log();
    }
};

//GET ALL

const getAll = async (req, res) => {
    try {
        const clients = await User.find();
        res.status(200).json(clients);
    } catch (err) {
        res.status(400).json(err);
    }
}


module.exports = {
    register,
    login,
    getAll,
}