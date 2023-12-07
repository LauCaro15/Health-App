const Admin = require('../models/admin');
const User = require('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require("../utils/jwt");


//POST
const register = async (req, res) => {
    const { name, lastname, email, password } = req.body;

    if (email != null) {

        const crypt_password = await bcrypt.genSalt(10);
        const final_password = await bcrypt.hash(password, crypt_password);

        const new_admin = await Admin({
            name,
            lastname,
            email: email.toLowerCase(),
            password: final_password,
            posts : [],
        });

        console.log("Administrador creado:" + new_admin);

        const adminDB = await new_admin.save();
        res.status(201).json(adminDB)
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
        
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        console.log('Token decodificado:', decoded);
    
        res.status(200).send({
            access: jwt.createAccessToken(clientStore),
            rol: decoded.role,
        });
    } catch (error) {
        res.status(403).send({ msg: error.message });
        console.log();
    }
};

//GET ALL

const getAll = async (req, res) => {
    try {
        const admins = await User.find();
        res.status(200).json(admins);
    } catch (err) {
        res.status(400).json(err);
    }
}


module.exports = {
    register,
    login,
    getAll,
}