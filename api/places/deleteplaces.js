const Place = require('../models/Place');

function deleteplaces(req , res){

    const id = req.params.id;

    Place.find()
    .where('_id').equals(id)
    .deleteOne({ '_id': id  })
    .then(function(result){
        res.json({
          message: 'borrado'
        })
      })
      .catch(function(err){
        res.json({
          error: err
        })
      })
}

module.exports = deleteplaces