var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();


router.get('/', function(req, res) {
    console.log(req.user);
    res.render('index', { title: 'Superheros', user: req.user });
});


router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    console.log(req.body);
    User.register(new User({ username : req.body.username }), req.body.password, function(err) {
        if (err) {
            return res.render('register');
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', ensureAuthentication, function(req, res) {
    req.logout();
    res.redirect('/');
});

function ensureAuthentication(req, res, next) {
    if (req.isAuthenticated()) { 
        return next(); 
    }
    res.redirect('/login');
}

module.exports = router;