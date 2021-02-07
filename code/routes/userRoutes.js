const express = require('express')
const router = express.Router()
const UserController =   require('../Controller/userController');

// Retrieve all employees
// router.get('/', userController.findAll);
// Create a new employee

router.get("/registration",UserController.findAllCoursesAndCities);
// function(req,res){
//     res.render('registration.ejs');
// })

router.post('/registration', UserController.create);



router.get("/login",function(req,res){

    res.render('login');
});
router.post("/login",UserController.userLogin);

module.exports = router;
