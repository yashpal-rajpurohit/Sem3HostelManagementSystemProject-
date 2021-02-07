const Course = require('../models/course');
exports.findAll = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    Course.findAll(function(err, course) {
  if (err)
  res.send(err);
  
  res.render('course',{
    data:course,
    btnvalue:"Add",
    cblock:"",
    checked:"",
    pathurl :"/course",
    method:"POST",
    tabheader:"Add Course"

});
});
};
exports.create = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
const new_course = new Course(req.body);
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Course.create(new_course, function(err, course) {
  if (err)
  res.send(err);
  else{
    Course.findAll(function(err, course) {
      if (err)
      res.send(err);
      res.render('course',{
        data:course,
        btnvalue:"Add",
        cblock:"",
        checked:"",
        pathurl :"/course",
        method:"POST",
        tabheader:"Add course"

    });
      
      //res.send(block);
    });
  }
});
}
};
exports.findById = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    Course.findById(req.params.id, function(err, currentCourse) {
  if (err)
  res.send(err);
  else{
    Course.findAll(function(err, allcourses) {
   //   console.log('controller')
      if (err)
      res.send(err);
     
      res.render('course',{
        data:allcourses,
        btnvalue:"Edit",
        cblock : currentCourse[0],
      //  checked: fgenderstate,
        pathurl :"/course/update",
        method:"GET",
        tabheader:"Edit Course"

       
    });
      
      //res.send(block);
    });
  }
  
 // res.json(user);
});
};
exports.update = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Course.update(req.body.id, new Course(req.body), function(err, course) {
   if (err)
   res.send(err);
   else{
    Course.findAll(function(err, allcourses) {
      //   console.log('controller')
         if (err)
         res.send(err);

        res.render('course',{
        data:allcourses,
        btnvalue:"Add",
        cblock : "",
        checked: "",
        pathurl :"/course/",
        method:"POST",
        tabheader:"Add Course"

   
        });
  
         //res.send(block);
       });


   }

  // res.json({ error:false, message: 'User successfully updated' });
});
}
};
exports.delete = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    Course.delete( req.params.id, function(err, course) {
  if (err)
  res.send(err);
  else{
    Course.findAll(function(err, allcourses) {
      if (err)
      res.send(err);
    

      res.render('course',{
        data:allcourses,
        method:"POST",
        pathurl :"/course",
        cblock:"",
        checked:"",
        btnvalue:"Add",
        tabheader:"Add Course"
    });
    });
  }
});
};