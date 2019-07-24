//lo basico para todos los index
//const express = require('express');
//const router = express.Router();
//module.exports = router;

const express = require('express');
const router = express.Router();

const getPlaces = require('./getplaces');
const postPlaces = require('./postplaces');
const putPlaces = require('./putplaces');
const deletePlaces = require('./deleteplaces');
const selectPlaces = require('./selectplaces');

router.get('/',getPlaces);
router.get('/:id',selectPlaces);
router.post('/',postPlaces);
router.put('/:id',putPlaces);
router.delete('/:id',deletePlaces);

module.exports = router;