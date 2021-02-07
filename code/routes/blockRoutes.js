const express = require('express');
const router = express.Router();
const blockController =require('../Controller/blockController');


router.get('/:id', blockController.findById);
// Update a employee with id
router.post('/update/', blockController.update);
// Delete a employee with id
router.get('/delete/:id', blockController.delete);
router.get('/', blockController.findAll);
router.post('/', blockController.create);
module.exports = router;
