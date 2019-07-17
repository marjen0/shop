const config = require('config');
const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) => {
    const token = req.header('x-auth-token');

    //check for token
    if (!token) {
        res.status(401).json({message: "Turite prisijungti"});
    }
    try {
        const decoded = jwt.verify(token, config.get('auth.jwtSecret'));
        //Add user from payload;
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({message: 'Autorizacija nepavyko'})
    }
}
module.exports = authenticate;