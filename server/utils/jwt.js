const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");

function getRoleFromEmail(email) {
    // Obtener el dominio del correo electrónico
    const domain = email.split('@')[1];

    // Verificar si el dominio es "admin.com"
    if (domain && domain.toLowerCase() === 'admin.com') {
        return 'admin';
    } else {
        return 'client'; // Asignar otro rol si no es "admin.com"
    }
}

const createAccessToken = (user) => {
    console.log(user);
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 3);
    const payload = {
        token_type: "access",
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime(),
        role: getRoleFromEmail(user.email),
    };

    console.log("accessToken del jwt: ", payload.user_id);
    return jwt.sign(payload, JWT_SECRET_KEY);
};

const createRefreshToken = (user) => {
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 3);
    const payload = {
        token_type: "refresh",
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime(),
    };
    return jwt.sign(payload, JWT_SECRET_KEY);
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY);
};

module.exports = {
    createAccessToken,
    createRefreshToken,
    verifyToken,
};
