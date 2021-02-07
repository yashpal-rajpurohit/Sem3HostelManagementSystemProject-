const express = require('express');
const router = express.Router();
const roomallocateController =   require('../Controller/roomAllocateController');

router.get('/request/:room_id/:user_id',roomallocateController.createRequestForRoom);

router.get('/allocate',roomallocateController.findAllRequestedRoom);

router.get('/approve/:roomallocate_id',roomallocateController.allocateHostelRoom);

router.get('/deletereq/:roomallocate_id',roomallocateController.deleteRoomRequest);

// // Update a employee with id
// router.post('/update/', roomController.update);
// // Delete a employee with id
// router.get('/delete/:id', roomController.delete);
// router.post('/', roomController.create);

// router.get('/roomallocate',roomController.findAllRoomForAllocation);
// router.get('/:id', roomController.findById);

// router.get('/', roomController.findAll);

module.exports = router;
