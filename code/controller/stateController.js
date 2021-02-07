const State = require('../models/state');
//const session = require("express-session");
exports.findAll = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
    State.findAll(function(err, block) {
//  console.log('controller')
  if (err)
  res.send(err);
  //console.log('res', block);

  res.render('state.ejs',{
    data:block,
    btnvalue:"Add",
    cstate:"",
    checked:"",
    pathurl :"/state",
    method:"POST",
    tabheader:"Add State"

});
  
  //res.send(block);
});
};
exports.create = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
const new_state = new State(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
State.create(new_state, function(err, block) {
  if (err)
  res.send(err);
  else{
    State.findAll(function(err, state) {
      //console.log('controller')
      if (err)
      res.send(err);
    //  console.log('res', block);
    
      res.render('state.ejs',{
        data:state,
        btnvalue:"Add",
        cstate:"",
        checked:"",
        pathurl :"/state",
        method:"POST",
        tabheader:"Add State"

    });
      
      //res.send(block);
    });
  }
  //res.json({error:false,message:"Block added successfully!",data:block});
});
}
};
exports.findById = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    State.findById(req.params.id, function(err, currentState) {
  if (err)
  res.send(err);
  else{
    State.findAll(function(err, allstates) {
   //   console.log('controller')
      if (err)
      res.send(err);
       // console.log(fgenderstate)

      res.render('state.ejs',{
        data:allstates,
        btnvalue:"Edit",
        cstate : currentState[0],
       
        pathurl :"/state/update",
        method:"GET",
        tabheader:"Edit State"

       
    });
      
      //res.send(block);
    });
  }
  
});
};
exports.update = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
  console.log(req.body)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    State.update(req.body.id, new State(req.body), function(err, course) {
   if (err)
   res.send(err);
   else{
    State.findAll(function(err, allstates) {
      //   console.log('controller')
         if (err)
         res.send(err);
         
       
        res.render('state.ejs',{
        data:allstates,
        btnvalue:"Add",
        cstate : "",
        checked: "",
        pathurl :"/state/",
        method:"POST",
        tabheader:"Add State"

        });
  
         //res.send(block);
       });


   }


   
   //res.json({ error:false, message: 'Block successfully updated' });
});
}
};
exports.delete = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    State.delete( req.params.id, function(err, block) {
  if (err)
  res.send(err);
  else{
    State.findAll(function(err, state) {
      console.log('controller')
      if (err)
      res.send(err);
     // console.log('res', block);
    
      res.render('state.ejs',{
        data:state,
        method:"POST",
        pathurl :"/state",
        cstate:"",
        checked:"",
        btnvalue:"Add",
        tabheader:"Add State"
    });
      
      //res.send(block);
    });
  }
 // res.json({ error:false, message: 'Course successfully deleted' });
});
};