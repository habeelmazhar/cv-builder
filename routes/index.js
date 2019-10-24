var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');

var Auth = require('./auth/auth');

/* GET home page. */
router.get('/', Auth, function (req, res, next) {
    console.log('ok');
    res.json({ msg: 'ok' });
});


router.post('/login', UserController.postLogin);

router.post('/signup', UserController.postSignup);


router.get('/logout', function (req, res) {
    req.session.destroy();
});



module.exports = router;
