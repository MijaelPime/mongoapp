const Place = require('../models/Place');

function postplaces(req, res) {
  const newPlace = new Place({
    name: req.body.name,
    address: req.body.address,
    rating: req.body.rating,
    location: {
      lat: req.body.location.lat,
      lng: req.body.location.lng
    }
  });

  newPlace.save()
    .then(function(result){
      res.json({
        message: 'Lugar creado correctamente'
      })
    })
    .catch(function(err){
      res.json({
        error: err
      })
    })
}

module.exports = postplaces;