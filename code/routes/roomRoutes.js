const express = require('express');
const router = express.Router();
const roomController =   require('../Controller/roomController');


// Update a employee with id
router.post('/update/', roomController.update);
// Delete a employee with id
router.get('/delete/:id', roomController.delete);
router.post('/', roomController.create);

router.get('/roomallocate',roomController.findAllRoomForAllocation);
router.get('/:id', roomController.findById);

router.get('/', roomController.findAll);

module.exports = router;
