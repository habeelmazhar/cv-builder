var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');
var ResumeController = require('../controllers/resume');

var Auth = require('./auth/auth');

/* GET home page. */
router.get('/', Auth, function (req, res, next) {
    console.log('ok');
    res.json({ msg: 'ok' });
});


router.post('/login', UserController.postLogin);

router.post('/signup', UserController.postSignup);


router.get('/resume', Auth, ResumeController.getResumes);

router.post('/resume', Auth, ResumeController.postResumeCreate);

router.put('/resume/:resumeId', Auth, ResumeController.putResumeUpdate);

router.delete('/resume/:resumeId', Auth, ResumeController.deleteResume);


router.get('/logout', function (req, res) {
    req.session.destroy();
});



module.exports = router;
