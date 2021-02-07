const Room = require('../models/room');
const Block = require('../models/block');

exports.findAll = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
  
    Room.findAll(function(err, room) {
  if (err)
  res.send(err);
  else{
    Block.findAll(function(err, allblocks) {
      if (err)
      res.send(err);
      else{
        res.render('room',{
          data:room,
          blocks:allblocks,
          btnvalue:"Add",
          croom:"",
          checked:"",
          pathurl :"/room",
          method:"POST",
          tabheader:"Add Room"
      
      });
      

      }
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
  
const new_room = new Room(req.body);
console.log("this is new room "+ new_room);
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Room.create(new_room, function(err, course) {
  if (err)
  res.send(err);
  else{
    Room.findAll(function(err, room) {
      if (err)
      res.send(err);
      else{
        Block.findAll(function(err, allblocks) {
          if (err)
          res.send(err);
          else{
            res.render('room',{
              data:room,
              blocks:allblocks,
              btnvalue:"Add",
              croom:"",
              checked:"",
              pathurl :"/room",
              method:"POST",
              tabheader:"Add Room"
          
          });
          
    
          }
        });
      }
      
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
  
    Room.findById(req.params.id, function(err, currentRoom) {
  if (err)
  res.send(err);
  else{
    Room.findAll(function(err, allrooms) {
   //   console.log('controller')
      if (err)
      res.send(err);
      else{
        Block.findAll(function(err, allblocks) {
          if (err)
          res.send(err);
          else{
            res.render('room',{
              data:allrooms,
              blocks:allblocks,
              btnvalue:"Add",
              croom:currentRoom[0],
              checked:"",
              pathurl :"/room",
              method:"POST",
              tabheader:"Add Room"
          
          });
          
          }
        });
      }
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
    Room.update(req.body.id, new Room(req.body), function(err, room) {
   if (err)
   res.send(err);
   else{
    Room.findAll(function(err, allrooms) {
      //   console.log('controller')
         if (err)
         res.send(err);else{
          Block.findAll(function(err, allblocks) {
            if (err)
            res.send(err);
            else{
              res.render('room',{
                data:allrooms,
                blocks:allblocks,
                btnvalue:"Add",
                croom:"",
                checked:"",
                pathurl :"/room",
                method:"POST",
                tabheader:"Add Room"
            
            });
            
            }
          });
        }
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
  
    Room.delete( req.params.id, function(err, room) {
  if (err)
  res.send(err);
  else{
    Room.findAll(function(err, allrooms) {
      if (err)
      res.send(err);
      else{
        Block.findAll(function(err, allblocks) {
          if (err)
          res.send(err);
          else{
            res.render('room',{
              data:allrooms,
              blocks:allblocks,
              btnvalue:"Add",
              croom:"",
              checked:"",
              pathurl :"/room",
              method:"POST",
              tabheader:"Add Room"
          
          });
          
          }
        });
      }
    });
  }
});
};

exports.findAllRoomForAllocation = function(req, res) {
  let ssn  = req.session;
  if(ssn.userId == null){
    res.redirect("student/login");
      return;
  }
 
  Room.findAllRoomForAllocation(function(err, room) {
  if (err)
  res.send(err);
  else{
        res.render('studentroom.ejs',{
          data:room,
          userid:req.session.userId
          
      });
      }
    });
  }
