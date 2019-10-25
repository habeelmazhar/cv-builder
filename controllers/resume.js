var User = require('../models/user');
var Resume = require('../models/resume');

var TokenSign = require('../routes/auth/tokensign');

exports.getResumes = async function (req, res, next) {
    const userId = req.body.id;
    let resumes = await Resume.find({userId});
    
    res.json({
        status: 'success',
        msg: 'Successfully fetched resumes',
        data: resumes
    });
    
}

exports.postResumeCreate = async function (req, res, next) {
    const userId = req.body.id;
    console.log('userId: ', userId);
    if (!userId)
        return res.json({
            status: 'failed',
            msg: 'UserID invalid',
            data: null
        });
    console.log('req.body: ', req.body);

    let resume = await Resume.create({ userId, ...req.body });

    if (resume) {
        res.json({
            status: 'success',
            msg: 'Successfully created resume',
            data: resume
        });
    }
    else {
        res.json({ status: 'failed', msg: 'Failed to create resume', data: null });
    }
}

exports.putResumeUpdate = async function (req, res, next) {
    const userId = req.body.id;
    console.log('userId: ', userId);
    const resumeId = req.params.resumeId;
    console.log('resumeId: ', resumeId);
    if (!userId || !resumeId)
        return res.json({
            status: 'failed',
            msg: 'UserID invalid',
            data: null
        });

    let doc = await Resume.findOneAndUpdate({ userId, _id: resumeId }, req.body, { upsert: false, useFindAndModify: false })
    if (doc) {
        return res.json({
            status: 'success',
            msg: 'Successfully updated',
            data: doc
        });
    }

    res.json({
        status: 'failed',
        msg: 'Could not update',
        data: null
    });

}

exports.deleteResume = async function (req, res, next) {
    const userId = req.body.id;
    const resumeId = req.params.resumeId;
    if (!userId || !resumeId)
        return res.json({
            status: 'failed',
            msg: 'Invalid params',
            data: null
        });

    let doc = await Resume.findOne({ userId, _id: resumeId })
    if (doc) {
        doc.remove();
        return res.json({
            status: 'success',
            msg: 'Successfully deleted',
            data: doc
        });
    }

    res.json({
        status: 'failed',
        msg: 'Could not find the resume',
        data: null
    });

}