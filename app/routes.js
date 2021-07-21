const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/steps/about-you', (req, res) => {
    res.redirect('/steps/address');
});

router.post('/steps/address', (req, res) => {
    res.redirect('/steps/contact');
});

router.post('/steps/contact', (req, res) => {
    res.redirect('/steps/balloon-details');
});

router.post('/steps/balloon-details', (req, res) => {
    res.redirect('/steps/balloon-more');
});

router.post('/steps/balloon-more', (req, res) => {
    res.redirect('/steps/check-your-answers');
});

router.post('/steps/check-your-answers', (req, res) => {
    res.redirect('/steps/complete');
});




module.exports = router
