const Place = require('../models/Place');

function putPlaces(req, res) {

    const id = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const rating = req.body.rating;
    const lat = req.body.location.lat;
    const lng = req.body.location.lng;

    Place.find()
    .where('_id').equals(id)
    .update({ name: name, address: address, rating: rating, 
        location: {
            lat: lat,
            lng: lng
          }
    })
    .then(function(result){
        res.json({
          message: 'actualizado'
        })
      })        
      .catch(function(err){
        res.json({
          error: err
        })
      })
}

module.exports = putPlaces;