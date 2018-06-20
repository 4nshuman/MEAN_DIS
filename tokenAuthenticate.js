const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const decoded = jwt.verify(req.headers.authorization, 'secret');
        req.userDecodedData = decoded;
        next();
    }catch(err){
        return res.status(401).json({message: 'Auth failed'});
    }
}