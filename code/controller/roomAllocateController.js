const Roomallocate = require("../models/roomallocate");
const Room = require("../models/room");


exports.createRequestForRoom = function(req, res) {
    // let ssn  = req.session;
    //  if(ssn.userId == null){
    //    res.redirect("student/login");
    //    	return;
      //  }
      Roomallocate.createRequestForRoom(req.params.room_id,req.params.user_id, function(err, course) {
    if (err)
    res.send(err);
    else{
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
          });
}
       
exports.findAllRequestedRoom = function(req, res) {
    
          Roomallocate.getAllRequestedRoom(function(err, rooms) {
          if (err)
          res.send(err);
          else{
                res.render('requestedrooms.ejs',{
                  data:rooms,
                  userid:req.session.userId
                  
              });
              }
            });
}
        
exports.createRequestForRoom = function(req, res) {
            // let ssn  = req.session;
            //  if(ssn.userId == null){
            //    res.redirect("student/login");
            //    	return;
              //  }
              Roomallocate.createRequestForRoom(req.params.room_id,req.params.user_id, function(err, course) {
            if (err)
            res.send(err);
            else{
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
                  });
}
               
exports.deleteRoomRequest = function(req, res) {
             console.log(req.params.roomallocate_id)
                  Roomallocate.deleteRoomRequest(req.params.roomallocate_id,function(err, room) {
                     console.log("this is rq"+req.params.roomallocate_id)
                    if (err)
                  res.send(err);
                  else{
                    Roomallocate.getAllRequestedRoom(function(err, room) {
                      console.log(JSON.stringify(room) +" from jfksljfslfn;l ")
                      if (err)
                      res.send(err);
                      else{
                            res.render('requestedrooms',{
                              data:room,
                              userid:req.session.userId
                              
                          });
                          }
                        });
                        
                      }
                    });
 }
 exports.allocateHostelRoom =function(req, res) {
       Roomallocate.allocateHostelRoom(req.params.roomallocate_id,function(err, room) {
          console.log("this is rq"+req.params.roomallocate_id)
         if (err)
       res.send(err);
       else{
         Roomallocate.getAllRequestedRoom(function(err, room) {
           console.log(JSON.stringify(room) +" from jfksljfslfn;l ")
           if (err)
           res.send(err);
           else{
                 res.render('requestedrooms',{
                   data:room,
                   userid:req.session.userId
                   
               });
               }
             });
             
           }
         });
}
                