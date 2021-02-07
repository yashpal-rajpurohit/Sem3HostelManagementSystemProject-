var dbConn = require("../configuration/config");
//Employee object create
var Block = function(block){
  this.block_name     = block.block_name;
  this.block_desc      = block.block_desc;
  this.block_gender     = block.block_gender;
  
};
Block.create = function (newBlock, result) {
//  console.log(newBlock)
dbConn.query("INSERT INTO tbl_block (block_name, block_desc, block_gender) values(?,?,?)", [newBlock.block_name,newBlock.block_desc,newBlock.block_gender], function (err, res) {
if(err) {
  console.log("error: this is error  ",newBlock, err);
  result(err, null);
}
else{
 // console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Block.findById = function (id, result) {
dbConn.query("Select * from tbl_block where block_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Block.findAll = function (result) {
dbConn.query("Select * from tbl_block", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  //console.log('All : ', res);
  result(null, res);
}
});
};
Block.update = function(blockid, block, result){
dbConn.query("UPDATE tbl_block SET block_name=?,block_desc=?, block_gender =?  WHERE block_id = ?", [block.block_name,block.block_desc,block.block_gender,blockid], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Block.delete = function(id, result){
dbConn.query("DELETE FROM tbl_block WHERE block_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Block;