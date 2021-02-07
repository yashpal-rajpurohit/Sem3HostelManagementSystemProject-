const express = require('express');
const router = express.Router();
const courseController =   require('../Controller/courseController');


router.get('/:id', courseController.findById);
// Update a employee with id
router.post('/update/', courseController.update);
// Delete a employee with id
router.get('/delete/:id', courseController.delete);
router.get('/', courseController.findAll);
router.post('/', courseController.create);
module.exports = router;
