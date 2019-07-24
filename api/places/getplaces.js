const Place = require('../models/Place')

function getplaces(req , res){
    Place.find()
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