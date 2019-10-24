var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.headers['authorization'].split(' ')[1];
    
    try {
        var decoded = jwt.verify(token, 'aksd-fnbio2-qgp-25b8732-ti27t');
        if (decoded)
            res.json({ status: 'error', msg: 'Unauthorized access' });
    } catch (err) {
        next();
    }
};