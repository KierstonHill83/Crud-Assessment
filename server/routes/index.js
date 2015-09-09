var express = require('express');
var router = express.Router();
var Superhero = require('../models/superhero.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Superheros' });
});

// GET ALL superheros
router.get('/superheros', function(req, res, next) {
  Superhero.find({}, function(err, data) {
    if(err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// GET single superheros
router.get('/superhero/:id', function(req, res, next) {
   Superhero.findById(req.params.id, function(err, data) {
    if(err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// POST ALL superheros
router.post('/superheros', function(req, res, next) {
  newSuperhero = new Superhero({
    name: req.body.name,
    power: req.body.power,
    enemy: req.body.enemy
  });
  newSuperhero.save(function(err, data) {
    if(err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// PUT single superheros
router.put('/superhero/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    power: req.body.power,
    enemy: req.body.enemy
  };
  Superhero.findByIdAndUpdate(req.params.id, update, function(err, data) {
    if(err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

// DELETE single superheros
router.delete('/superhero/:id', function(req, res, next) {
  Superhero.findByIdAndRemove(req.params.id, function(err, data) {
    if(err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
