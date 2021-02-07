const express = require('express');
const router = express.Router();
const stateController =   require('../Controller/stateController');


router.get('/:id', stateController.findById);
router.post('/update/', stateController.update);
router.get('/delete/:id', stateController.delete);
router.get('/', stateController.findAll);
router.post('/', stateController.create);
module.exports = router;
