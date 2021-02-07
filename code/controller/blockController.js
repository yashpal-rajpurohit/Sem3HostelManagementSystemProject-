const Block = require('../models/block');
//const session = require("express-session");
exports.findAll = function(req, res) {
  let ssn  = req.session;
   if(ssn.userId == null){
     res.redirect("student/login");
     	return;
	 }
    Block.findAll(function(err, block) {
//  console.log('controller')
  if (err)
  res.send(err);
  //console.log('res', block);

  res.render('block.ejs',{
    data:block,
    btnvalue:"Add",
    cblock:"",
    checked:"",
    pathurl :"/block",
    method:"POST",
    tabheader:"Add Block"

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
  
const new_block = new Block(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Block.create(new_block, function(err, block) {
  if (err)
  res.send(err);
  else{
    Block.findAll(function(err, block) {
      //console.log('controller')
      if (err)
      res.send(err);
    //  console.log('res', block);
    
      res.render('block.ejs',{
        data:block,
        btnvalue:"Add",
        cblock:"",
        checked:"",
        pathurl :"/block",
        method:"POST",
        tabheader:"Add Block"

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
  
    Block.findById(req.params.id, function(err, currentBlock) {
  if (err)
  res.send(err);
  else{
    Block.findAll(function(err, allblocks) {
   //   console.log('controller')
      if (err)
      res.send(err);
      let fgenderstate;
      //console.log('res', currentBlock);
      if(currentBlock[0].block_gender === "F")
         fgenderstate = "checked";
      else
        fgenderstate = "";
       // console.log(fgenderstate)

      res.render('block.ejs',{
        data:allblocks,
        btnvalue:"Edit",
        cblock : currentBlock[0],
        checked: fgenderstate,
        pathurl :"/block/update",
        method:"GET",
        tabheader:"Edit Block"

       
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
    Block.update(req.body.id, new Block(req.body), function(err, course) {
   if (err)
   res.send(err);
   else{
    Block.findAll(function(err, allblocks) {
      //   console.log('controller')
         if (err)
         res.send(err);
         
       
        res.render('block.ejs',{
        data:allblocks,
        btnvalue:"Add",
        cblock : "",
        checked: "",
        pathurl :"/block/",
        method:"POST",
        tabheader:"Add Block"

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
  
    Block.delete( req.params.id, function(err, block) {
  if (err)
  res.send(err);
  else{
    Block.findAll(function(err, block) {
      console.log('controller')
      if (err)
      res.send(err);
     // console.log('res', block);
    
      res.render('block.ejs',{
        data:block,
        method:"POST",
        pathurl :"/block",
        cblock:"",
        checked:"",
        btnvalue:"Add",
        tabheader:"Add Block"
    });
      
      //res.send(block);
    });
  }
 // res.json({ error:false, message: 'Course successfully deleted' });
});
};