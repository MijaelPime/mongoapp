const Place = require('../models/Place')

function getplaces(req , res){
    const id = req.params.id;
    Place.find()
    .where('_id').equals(id)
    .then(function(doc){
        res.json({
            places:doc
        })
    })
    .catch(function(err){
        res.json({
            error: err
        })
    })
}

module.exports = getplaces