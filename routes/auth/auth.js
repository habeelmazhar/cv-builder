var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.headers['authorization'].split(' ')[1];
    console.log('auth', token);
    try {
        var decoded = jwt.verify(token, 'aksd-fnbio2-qgp-25b8732-ti27t');
        if (decoded){
            // req.query.parentID = decoded._id;

            req.body.id = decoded._id;
            next();
        }
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', msg: 'Unauthorized access' });
    }

};