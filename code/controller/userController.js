const Course = require('../models/course');
const User = require('../models/user');
const City = require('../models/city');
const Block = require('../models/block');
const  Room = require("../models/room");
const user = require("../models/user")


exports.create = function(req, res) {
    const new_user = new User(req.body);
    console.log(new_user);
    //handles null error
    user.create(new_user, function(err, stud) {
      if (err)
      res.send(err);
      else
      res.render("login");
      
    });
    
    };

    exports.findAllCoursesAndCities = function(req, res) {
     // const new_user = new user(req.body);
      //handles null error
      Course.findAll(function(err, allcourses) {
        if (err)
        res.send(err);
        else{
          City.findAll(function(err, cities) {
            if (err)
            res.send(err);
            else{
              res.render('registration',{
                courses:allcourses,
                cities:cities
              
            });
            

            }
          });
        }
      });      
      };
exports.userLogin = function(req, res) {
     //   console.log(req.body.userEmail,req.body.userPassword)
        User.userLogin(req.body.userEmail,req.body.userPassword, function(err, currentUser) {
        if (err)
          res.send(err);
        else{
                
     //           console.log("logged in user is :" +JSON.stringify(currentUser))
                if((currentUser.length> 0) && (currentUser[0].user_type_id === 1))
                {
                  req.session.userId = currentUser[0].user_id;
       //           console.log( "this is session id" +req.session.userId);
                  res.redirect("/block")
                }
                else if((currentUser.length> 0) && (currentUser[0].user_type_id === 2))
                {
                  Room.findAllRoomForAllocation(function(err, room) {
                    if (err)
                    res.send(err);
                    else{
                      req.session.userId = currentUser[0].user_id; 
                      res.render("studentroom",{
                       data:room,
                       userid:currentUser[0].user_id,
                       method:"POST",
                       pathurl :"/block",
                       cblock:"",
                       checked:"",
                       btnvalue:"Add",
                       tabheader:"Add Block"
                   });               
                        }
                      });      
                }
              }
                });
              }  
      
              