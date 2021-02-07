var dbConn = require("../configuration/config");

var User = function(user){
  this.userfname     = user.userfname;
  this.usermname     = user.usermname;
  this.userlname     = user.userlname;
  this.usercourseid     = user.usercourseid;
  this.userdob     = user.userdob;
  this.userrollno     = user.userrollno;
  this.userfathername     = user.userfathername;
  this.usermothername     = user.usermothername;
  this.usergender     = user.usergender;
  this.useraddress     = user.useraddress;
  this.usercontactno     = user.usercontactno;
  this.userparentsno = user.userparentsno;
  this.usercityid = user.usercityid;
  this.useremail = user.useremail;
  this.userpassword      = user.userpassword;
  

};

User.create = function (newuser, result) {
    console.log(newuser)
  dbConn.query("INSERT INTO tbl_user( user_fname, user_mname, user_lname, user_course_id, user_roll_no, user_dob, user_father_name, user_mother_name, user_gender, user_address, user_contact_no, user_parents_no, user_city_id, user_email, user_password,user_type_id) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,2)", [newuser.userfname,newuser.usermname,newuser.userlname,newuser.usercourseid,newuser.userrollno,newuser.userdob,newuser.userfathername,newuser.usermothername,newuser.usergender,newuser.useraddress,newuser.usercontactno,newuser.userparentsno,newuser.usercityid,newuser.useremail,newuser.userpassword], function (err, res) {
  if(err) {
    console.log("error: this is error  ",newuser, err);
    result(err, null);
  }
  else{
    console.log(res.insertId);
    result(null, res.insertId);
  }
  });
  };

  User.userLogin = function (userEmail,userPassword, result) {
    console.log(userEmail,userPassword)
    dbConn.query("Select * from tbl_user where (user_email = ?) AND (user_password) =? ",[userEmail,userPassword], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };

    

//   user.login = function(req, res){
//     var message = '';
//     var sess = req.session; 
  
//     if(req.method == "POST"){
//        var post  = req.body;
//        var name= post.user_name;
//        var pass= post.password;
      
//        var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";                           
//        db.query(sql, function(err, results){      
//           if(results.length){
//              req.session.userId = results[0].id;
//              req.session.user = results[0];
//              console.log(results[0].id);
//              res.redirect('/home/dashboard');
//           }
//           else{
//              message = 'Wrong Credentials.';
//              res.render('index.ejs',{message: message});
//           }
                  
//        });
//     } else {
//        res.render('index.ejs',{message: message});
//     }         
//  };


  module.exports= User;