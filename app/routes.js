const express = require('express')
const router = express.Router()
const { checkForNames, checkForAddess, checkForBalloon, checkBalloonMore } = require('./validation')
// Add your routes here - above the module.exports line


router.post('/steps/balloon-details', (req, res) => {
    const validation = checkForBalloon (req);
    if (Object.keys(validation).length > 1) {
        res.render('steps/balloon-details.html', { validation })
    } else {
        res.redirect('/steps/balloon-more');
    }
});

router.post('/steps/about-you', (req, res) => {
    const validation = checkForNames (req);
    if (Object.keys(validation).length > 1) {
        res.render('steps/about-you.html', { validation })
    } else {
        res.redirect('/steps/address');
    }
});

router.post('/steps/address', (req, res) => {
    const validation = checkForAddess (req);
    if (Object.keys(validation).length > 1) {
        res.render('steps/address.html', { validation })
    } else {
        res.redirect('/steps/contact');
    }
});

router.post('/steps/contact', (req, res) => {
    res.redirect('/steps/balloon-details');
});

router.post('/steps/balloon-details', (req, res) => {
    res.redirect('/steps/balloon-more');
});

router.post('/steps/balloon-more', (req, res) => {
    const validation = checkBalloonMore (req);
    if (Object.keys(validation).length > 1) {
        res.render('steps/balloon-more.html', { validation })
    } else {
        res.redirect('/steps/check-your-answers');
    }
});

router.post('/steps/check-your-answers', (req, res) => {
    res.redirect('/steps/complete');
});




module.exports = router
