var dbConn = require("../configuration/config");
//Employee object create
var State = function(state){
  this.state_name     = state.state_name;
  
};
State.create = function (newState, result) {
  // console.log()
dbConn.query("INSERT INTO tbl_state (state_name) values(?)", [newState.state_name], function (err, res) {
if(err) {
  console.log("error: this is error  ",newState, err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
State.findById = function (id, result) {
dbConn.query("Select * from tbl_state where state_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
State.findAll = function (result) {
dbConn.query("Select * from tbl_state", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('States : ', res);
  result(null, res);
}
});
};
State.update = function(stateid, state, result){
dbConn.query("UPDATE tbl_state SET state_name=? WHERE state_id = ?", [state.state_name,stateid], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
State.delete = function(id, result){
dbConn.query("DELETE FROM tbl_state WHERE state_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= State;