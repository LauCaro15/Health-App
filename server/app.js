// Importación de librerias
const express = require("express")
const bodyParser = require("body-parser")

// Importación de archivos
const {API_PATH} = require("./config")
const userRoutes = require("./routes/user")

const cors = require('cors')

//Inicialización de la aplicación
const app = express();

// Middlewares
app.use(cors()); // Para que se pueda acceder a la API desde cualquier frontend

// Para la visualizacion del contenido del endpoint
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configuración de cabeceras
app.use(`/${API_PATH}/users`, userRoutes);

module.exports = app;
