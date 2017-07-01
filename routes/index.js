var express = require('express');
var router = express.Router();

var csrf = require('csurf');
var passport = require('passport');
var Product = require('../models/product');
var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function(err, docs) {
        if (err)
            console.log(err);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
    });
});
router.get('/users/signup', function(req, res, next) {
    res.render('users/signup', {
        csrfToken: req.csrfToken()
    });
});
router.post('/users/signup', passport.authenticate('local.signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true
}));
router.get('/users/profile', function(req, res, next) {
    res.render('users/profile', {
        user: req.user,
        title: req.user.email + "'s profile | wdy"
    });
});
module.exports = router;