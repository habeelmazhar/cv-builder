var User = require('../models/user');

var TokenSign = require('../routes/auth/tokensign');

exports.postLogin = async function (req, res, next) {
    const { email, password } = req.body;

    let user = await User.findOne({ email, password });
    
    if (user) {
        let token = TokenSign(user._id);

        res.json({
            status: 'success',
            msg: 'Successfully logged In',
            data: { token, user }
        });
    }
    else {
        res.json({ status: 'failed', msg: 'Invalid email / password', data: { token: null } });
    }
}

exports.postSignup = async function (req, res, next) {
    const { email, firstname, lastname, password } = req.body;

    let exists = await User.findOne({ email: req.body.email });
    if (exists) {
        return res.json({
            status: 'failed',
            msg: 'Email already exists',
            data: { token: null }
        });
    }

    let user = await User.create({email, firstname, lastname, password});
    let token = TokenSign(user._id);
    res.json({
        status: 'success',
        msg: 'Successfully signed up',
        data: { token, user }
    });

}