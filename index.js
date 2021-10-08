let express = require('express');
let socket =require('socket.io')

/** ___app setup___*/

let app = express();


/** ___server setup___*/
let server = app.listen(4000,()=>{
    console.log("project is running");
});
app.get('/',(res,req)=>{
    req.sendFile(__dirname+'/public/index.html')
});

/** ___server setup___*/
let io =socket(server)
io.on('connection',(socket)=>{
    socket.on("chat", (data)=>{
        io.sockets.emit("chat",data);
    });
    socket.on("typing",(name)=>{
        socket.broadcast.emit("typing",name);
    });
});







