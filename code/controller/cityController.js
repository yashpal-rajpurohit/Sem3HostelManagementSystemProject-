const City = require('../models/city');
const State = require('../models/state');
exports.findAll = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    City.findAll(function(err, cities) {
  if (err)
  res.send(err);
  else{
    State.findAll(function(err, state) {
      //  console.log('controller')
        if (err)
        res.send(err);
        //console.log('res', block);
      
        res.render('city',{
          data:cities,
          cstate:state,
          btnvalue:"Add",
          ccity:"",
          checked:"",
          pathurl :"/city",
          method:"POST",
          tabheader:"Add City"
  
      });
      
        //res.send(block);
      });

  }
  
});
};
exports.create = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
const new_city = new City(req.body);
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
City.create(new_city, function(err, course) {
  if (err)
  res.send(err);
  else{
    City.findAll(function(err, cities) {
      if (err)
      res.send(err);
      else{
        State.findAll(function(err, state) {
          //  console.log('controller')
            if (err)
            res.send(err);
            //console.log('res', block);
          
            res.render('city',{
              data:cities,
              cstate:state,
              btnvalue:"Add",
              ccity:"",
              checked:"",
              pathurl :"/city",
              method:"POST",
              tabheader:"Add City"
      
          });
        });
      }
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
  
    City.findById(req.params.id, function(err, currentCity) {
  if (err)
  res.send(err);
  else{
    City.findAll(function(err, cities) {
   //   console.log('controller')
      if (err)
      res.send(err);
      else{
        State.findAll(function(err, state) {
          //  console.log('controller')
            if (err)
            res.send(err);
            //console.log('res', block);
          
            res.render('city',{
              data:cities,
              cstate:state,
              btnvalue:"Edit",
              ccity : currentCity[0],
              pathurl :"/city/update",
              method:"GET",
              tabheader:"Edit City"
             
          });
        });

      }
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
  
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    City.update(req.body.id, new City(req.body), function(err, city) {
   if (err)
   res.send(err);
   else{
    City.findAll(function(err, cities) {
      //   console.log('controller')
         if (err)
         res.send(err);
         else{
          State.findAll(function(err, state) {
            //  console.log('controller')
              if (err)
              res.send(err);
              //console.log('res', block);
            
              res.render('city',{
                data:cities,
                cstate:state,
                cstate:state,
                btnvalue:"Edit",
                ccity : "",
                pathurl :"/city/update",
                method:"GET",
                tabheader:"Edit City"
               
            });
          });
  
         }
       });
   }

});
}
};
exports.delete = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    City.delete( req.params.id, function(err, city) {
  if (err)
  res.send(err);
  else{
    City.findAll(function(err, cities) {
      if (err)
      res.send(err);
      else{
        State.findAll(function(err, state) {
            if (err)
            res.send(err);
            else{
              res.render('city',{
                data:cities,
                cstate:state,
                cstate:state,
                btnvalue:"Edit",
                ccity : "",
                pathurl :"/city/update",
                method:"GET",
                tabheader:"Edit City"
               
            });

            }
        });
      }
    });
  }
});
};