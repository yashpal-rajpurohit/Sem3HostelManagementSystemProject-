const path = require("path");
const express= require("express"); 
const session = require('express-session');
const bodyParser =require("body-parser"); 

//const studentController =   require('./controller/studentController');

const blockRoutes= require("./routes/blockRoutes");
const courseRoutes = require("./routes/courseRoutes");
const userRoutes =require('./routes/userRoutes');
const roomRoutes =require('./routes/roomRoutes');
const stateRoutes = require("./routes/stateRoutes");
const cityRoutes = require('./routes/cityRoutes');

const roomAllocateRoutes = require("./routes/roomAllocateRoutes");


  
var app=express(); 
  
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(session({secret: "Secret key",
                resave : false,
                saveUninitialized: false }));

app.use('/block', blockRoutes);
app.use('/course', courseRoutes);
app.use("/student",userRoutes);
app.use("/room",roomRoutes);
app.use("/city",cityRoutes);
app.use("/roomallocate",roomAllocateRoutes);
app.use("/state",stateRoutes);


app.listen(3100);

