var dbConn = require("../configuration/config");
//Employee object create
var City = function(city){
  this.city_name = city.city_name;
  this.state_id = city.state_id;
};
City.create = function (newCity, result) {
  console.log(newCity)
dbConn.query("INSERT INTO tbl_city (city_name,state_id) values(?,?)", [newCity.city_name,newCity.state_id], function (err, res) {
if(err) {
  console.log("error: this is error  ",newCity, err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
City.findById = function (id, result) {
dbConn.query("Select * from tbl_city inner join tbl_state on tbl_city.state_id = tbl_state.state_id where city_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
City.findAll = function (result) {
dbConn.query("Select * from tbl_city inner join tbl_state on tbl_city.state_id = tbl_state.state_id", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Users : ', res);
  result(null, res);
}
});
};
City.update = function(cityid, city, result){
dbConn.query("UPDATE tbl_city SET city_name=? ,state_id = ? WHERE city_id = ?", [city.city_name,cityid], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
City.delete = function(id, result){
dbConn.query("DELETE FROM tbl_city WHERE city_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= City;