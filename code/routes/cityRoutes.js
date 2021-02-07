const express = require('express');
const router = express.Router();
const cityController =   require('../Controller/cityController');


router.get('/:id', cityController.findById);
router.post('/update/', cityController.update);
router.get('/delete/:id', cityController.delete);
router.get('/', cityController.findAll);
router.post('/', cityController.create);
module.exports = router;
