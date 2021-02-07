var dbConn = require("../configuration/config");
//Employee object create
var Room = function(room){
  this.room_no     = room.room_no;
  this.block_id      = room.block_id;
  this.room_no_of_beds  = room.room_no_of_beds;
  this.room_desc     = room.room_desc;
  
};
Room.create = function (newRoom, result) {
  console.log(newRoom)
dbConn.query("INSERT INTO tbl_room (room_no, block_id, room_no_of_beds, room_desc) values(?,?,?,?)", [newRoom.room_no,newRoom.block_id,newRoom.room_no_of_beds,newRoom.room_desc], function (err, res) {
if(err) {
  console.log("error: this is error  ",newRoom, err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null,res.insertId);
}
});
};
Room.findById = function (id, result) {
dbConn.query("Select * from tbl_room where room_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Room.findAll = function (result) {
dbConn.query("Select * from tbl_room inner join tbl_block where tbl_room.block_id = tbl_block.block_id", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Rooms by find all : ', res);
  result(null, res);
}
});
};
Room.update = function(roomid, room, result){
dbConn.query("UPDATE tbl_room SET room_no=?,block_id = ?,room_no_of_beds=?, room_desc=? WHERE room_id = ?", [room.room_no,room.block_id,room.room_no_of_beds,room.room_desc,roomid], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Room.delete = function(id, result){
dbConn.query("DELETE FROM tbl_room WHERE room_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

Room.findAllRoomForAllocation = function (result) {
  dbConn.query("SELECT * FROM `tbl_room` inner join tbl_block WHERE (tbl_room.block_id = tbl_block.block_id) and (room_id not IN (select room_id from tbl_roomallocate))", function (err, res) {
  if(err) {
   // console.log("error: ", err);
    result(null, err);
  }
  else{
 //   console.log('Rooms to be allocated are : ', res);
    result(null, res);
  }
  });
  };


module.exports= Room;