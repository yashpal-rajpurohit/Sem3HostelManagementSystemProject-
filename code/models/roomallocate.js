var dbConn = require("../configuration/config");
//Employee object create
var Roomallocate = function(roomreq){
  this.room_id     = roomreq.room_id;
  this.user_id      = roomreq.user_id;
  
};

Roomallocate.createRequestForRoom = function (room_id,user_id, result) {
  console.log(room_id,user_id)
  let datetime = new Date();
  let todaysDate =datetime.toISOString().slice(0,10);
dbConn.query("INSERT INTO tbl_roomallocate(room_id, user_id, roomallocate_status, roomallocate_date) values(?,?,'R',?)", [room_id,user_id,todaysDate], function (err, res) {
if(err) {
  console.log("error: this is error  ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
})
};


Roomallocate.getAllRequestedRoom = function (result) {
  dbConn.query("SELECT tbl_roomallocate.roomallocate_id,tbl_roomallocate.roomallocate_date, tbl_room.room_no,tbl_user.user_email,tbl_block.block_name FROM tbl_roomallocate INNER JOIN tbl_room ON tbl_roomallocate.room_id = tbl_room.room_id INNER JOIN tbl_user ON tbl_roomallocate.user_id = tbl_user.user_id INNER join tbl_block on tbl_room.block_id = tbl_block.block_id where tbl_roomallocate.roomallocate_status ='R' ", function (err, res) {
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
Roomallocate.deleteRoomRequest = function (roomallocate_id,result) {
  console.log(roomallocate_id+"this is user")
  dbConn.query("delete  FROM `tbl_roomallocate` WHERE roomallocate_id=? ",roomallocate_id, function (err, res) {
    if(err) {
     // console.log("error: ", err);
      result(null, err);
    }
    else{

      console.log("deleted");
   //   console.log('Rooms to be allocated are : ', res);
      result(null, res);
    }
    });

};

Roomallocate.allocateHostelRoom = function (roomallocate_id,result) {
 // console.log(roomallocate_id+"this is user")
  dbConn.query("Update tbl_roomallocate Set roomallocate_status ='A' where  roomallocate_id=? ",roomallocate_id, function (err, res) {
    if(err) {
     // console.log("error: ", err);
      result(null, err);
    }
    else{

      console.log("deleted");
   //   console.log('Rooms to be allocated are : ', res);
      result(null, res);
    }
    });

};

module.exports= Roomallocate;
