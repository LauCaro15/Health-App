//Importar librerias
const mongoose = require("mongoose")


//Importar archivos
const { DB_HOST, DB_PASSWORD, DB_USER, IP_SERVER, API_PATH, PORT} = require("./config")
const app = require("./app");

// mongodb+srv://camilo21:<password>@cluster0.du3uwnv.mongodb.net/
const connection_string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/blog-app?retryWrites=true&w=majority`

//Conexión a la base de datos
mongoose
    .connect(connection_string)
    .then( () => {
        console.log("Connected to MongoDB")
        //Apertura del puerto por el cual correra el proyecto
        app.listen(PORT, () => {
        console.log(`IP_SERVER:\nhttp://${IP_SERVER}:${PORT}/${API_PATH}`);
        });
    })
    .catch( (err) => console.error(err));     