var dbConn = require("../configuration/config");
//Employee object create
var Course = function(course){
  this.course_name     = course.course_name;
  this.course_no_of_years      = course.course_no_of_years;
  this.course_code     = course.course_code;
  this.course_desc     = course.course_desc;
  
};
Course.create = function (newCourse, result) {
  console.log(newCourse)
dbConn.query("INSERT INTO tbl_course (course_name, course_no_of_years, course_code, course_desc) values(?,?,?,?)", [newCourse.course_name,newCourse.course_no_of_years,newCourse.course_code,newCourse.course_desc], function (err, res) {
if(err) {
  console.log("error: this is error  ",newCourse, err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Course.findById = function (id, result) {
dbConn.query("Select * from tbl_course where course_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Course.findAll = function (result) {
dbConn.query("Select * from tbl_course", function (err, res) {
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
Course.update = function(courseid, course, result){
dbConn.query("UPDATE tbl_course SET course_name=?,course_no_of_years=?, course_code =? , course_desc=? WHERE course_id = ?", [course.course_name,course.course_no_of_years,course.course_code,course.course_desc,courseid], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Course.delete = function(id, result){
dbConn.query("DELETE FROM tbl_course WHERE course_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Course;