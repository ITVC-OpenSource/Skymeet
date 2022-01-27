const WebSocket = require('ws').Server;
const { PeerServer } = require('peer');
const fs = require('fs');
const mysql = require('mysql');
var global = {};
var WSS = new WebSocket({ port: 8000 });
const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);
const peerServer = PeerServer({ port: 9000, path: '/skymeet' , generateClientId: customGenerationFunction });

// Codes

var con = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6468012",
  password: "d4Dpqiy6G9",
  database: "sql6468012"
});

con.connect(function(err) {
  // if (err) throw err;
});

WSS.on("connection" , (WS) => {
  console.log("New user joined");
  WS.on("message" , (msg) => {
    let message = JSON.parse(msg);
    if (message.action === "join") {
      var d = message.data.split("/");
      console.log("New user joined with username: " + d[1]);
    }
  });
  // WS.on("close" , () => {
  //   var roomsOnlineUsers , users , rooms;
  //   fs.readFile("./../DB/roomsOnlineUsers.json" , (data) => {
  //     roomsOnlineUsers = JSON.parse(data);
  //   });
  //   fs.readFile("./../DB/users.json" , (data) => {
  //     // users = JSON.parse(data);
  //     users = data;
  //   });
  //   fs.readFile("./../DB/rooms.json" , (data) => {
  //     rooms = JSON.parse(data);
  //   });
  //   users.forEach((user) => {
  //     if (user.uname === d[1]) {
  //       var id = user.id;
  //     }
  //   });
  //   roomsOnlineUsers.forEach((room) => {
  //     if (room.id === d[0]) {
  //       var rou = roomsOnlineUsers;
  //       rou.d[0] === roomsOnlineUsers.d[0].push(id);
  //       fs.writeFile("./../DB/roomsOnlineUsers.json" , JSON.stringify(rou));
  //     }
  //   });
  // });
});

peerServer.on('connection', (client) => {
  console.log("New peer user connected with id:" + client.id);
});

fs.readFile("./../DB/roomsOnlineUsers.json" , (data) => {
  global.roomsOnlineUsers = JSON.parse(data);
});
