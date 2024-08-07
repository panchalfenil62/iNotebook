var jwt = require('jsonwebtoken');
const JWT_Secret = "Fenilisagoodb$oy";

const fetchuser = (req, res, next) => {
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate with a valid token" });
    }
    else{
    try {
        const data = jwt.verify(token, JWT_Secret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please 1authenticate with a valid token" });
    }
}
}

module.exports = fetchuser;