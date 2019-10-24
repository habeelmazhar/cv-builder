var jwt = require('jsonwebtoken');

module.exports = function(id) {
    return jwt.sign({ _id: id }, 'aksd-fnbio2-qgp-25b8732-ti27t');
}