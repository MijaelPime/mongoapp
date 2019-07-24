const Place = require('../models/Place');

function postPlaces(req, res) {

  const name = req.body.name;
  const address = req.body.address;
  const rating = req.body.rating;
  const lat = req.body.location.lat;
  const lng = req.body.location.lng;

  const newPlace = new Place({
    name: name,
    address: address,
    rating: rating,
    location: {
      lat: lat,
      lng: lng
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

module.exports = postPlaces;